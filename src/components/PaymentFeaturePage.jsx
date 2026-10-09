import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../i18n.jsx";
import {
  paymentFeaturePageCopy,
  paymentFeatures
} from "../data/paymentFeatures.js";
import Hero from "./Hero";
import "./PaymentFeaturePage.css";

export default function PaymentFeaturePage() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const feature = paymentFeatures.find((item) => item.slug === slug);
  const current = paymentFeaturePageCopy[language] || paymentFeaturePageCopy.en;

  if (!feature) {
    return (
      <div className="rp-feature-page">
        <Hero headerOnly />
        <main className="rp-feature-not-found">
          <h1>{current.notFoundTitle}</h1>
          <Link className="rp-feature-back" to="/">
            {current.backHome}
          </Link>
        </main>
        <footer className="rp-feature-page-footer">
          <span>© 2026 RobotPay</span>
          <Link to="/">{current.backHome}</Link>
        </footer>
      </div>
    );
  }

  const content = feature.content[language] || feature.content.en;

  return (
    <div className="rp-feature-page">
      <Hero headerOnly />

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

        <section className="rp-feature-steps" aria-labelledby="rp-feature-steps-title">
          <div className="rp-feature-steps-header">
            <h2 id="rp-feature-steps-title">{content.stepsTitle}</h2>
            <p>{content.stepsIntro}</p>
          </div>
          <ol className="rp-feature-step-grid">
            {content.steps.map((step, index) => (
              <li className="rp-feature-step-card" key={step.title}>
                <span className="rp-feature-step-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="rp-feature-support">
          <h2>{current.supportTitle}</h2>
          <p>{current.supportDescription}</p>
          <Link
            className="rp-feature-contact"
            to="/contact"
          >
            {current.contact}
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>

      <footer className="rp-feature-page-footer">
        <span>© 2026 RobotPay</span>
        <Link to="/">{current.backHome}</Link>
      </footer>
    </div>
  );
}
