import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../i18n.jsx";
import {
  paymentFeaturePageCopy,
  paymentFeatures
} from "../data/paymentFeatures.js";
import "./PaymentFeaturePage.css";

const languageNames = {
  en: "English",
  fr: "Français",
  zh: "中文"
};

export default function PaymentFeaturePage() {
  const { slug } = useParams();
  const { language, changeLanguage } = useLanguage();
  const feature = paymentFeatures.find((item) => item.slug === slug);
  const current = paymentFeaturePageCopy[language] || paymentFeaturePageCopy.en;

  if (!feature) {
    return (
      <div className="rp-feature-page">
        <header className="rp-feature-page-header">
          <Link className="rp-feature-page-logo" to="/">
            Robot<span>Pay</span>
          </Link>
        </header>
        <main className="rp-feature-not-found">
          <h1>{current.notFoundTitle}</h1>
          <Link className="rp-feature-back" to="/">
            {current.backHome}
          </Link>
        </main>
      </div>
    );
  }

  const content = feature.content[language] || feature.content.en;

  return (
    <div className="rp-feature-page">
      <header className="rp-feature-page-header">
        <Link className="rp-feature-page-logo" to="/" aria-label="RobotPay">
          Robot<span>Pay</span>
        </Link>
        <div className="rp-feature-page-header-actions">
          <label className="rp-feature-language">
            <span>{current.language}</span>
            <select
              value={language}
              onChange={(event) => changeLanguage(event.target.value)}
              aria-label={current.language}
            >
              {Object.entries(languageNames).map(([value, name]) => (
                <option key={value} value={value}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <Link className="rp-feature-back" to="/">
            {current.backHome}
          </Link>
        </div>
      </header>

      <main className="rp-feature-detail">
        <section className="rp-feature-detail-hero">
          <img src={feature.icon} alt="" aria-hidden="true" />
          <p className="rp-feature-eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="rp-feature-detail-intro">{content.detail}</p>
        </section>

        <section
          className="rp-feature-detail-points"
          aria-labelledby="rp-feature-details-title"
        >
          <h2 id="rp-feature-details-title">{content.detailsTitle}</h2>
          <ul>
            {content.points.map((point, index) => (
              <li key={point}>
                <span className="rp-feature-point-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="rp-feature-detail-actions">
          <a
            className="rp-feature-contact"
            href="https://t.me/geeorbotpay"
            target="_blank"
            rel="noopener noreferrer"
          >
            {current.contact}
            <span aria-hidden="true">→</span>
          </a>
          <Link className="rp-feature-back-mobile" to="/">
            {current.backHome}
          </Link>
        </div>
      </main>

      <footer className="rp-feature-page-footer">
        <span>© 2026 RobotPay</span>
        <Link to="/">{current.backHome}</Link>
      </footer>
    </div>
  );
}
