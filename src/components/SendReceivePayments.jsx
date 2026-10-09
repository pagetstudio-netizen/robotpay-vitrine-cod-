import { Link } from "react-router-dom";
import { useLanguage } from "../i18n.jsx";
import { paymentFeatures } from "../data/paymentFeatures.js";
import "./SendReceivePayments.css";

const sectionCopy = {
  en: {
    title: "You can send and receive payments",
    learnMore: "Learn more"
  },
  fr: {
    title: "Vous pouvez envoyer et recevoir des paiements",
    learnMore: "Apprendre encore plus"
  },
  zh: {
    title: "轻松收款与付款",
    learnMore: "了解更多"
  }
};

export default function SendReceivePayments() {
  const { language } = useLanguage();
  const current = sectionCopy[language] || sectionCopy.en;

  return (
    <section
      className="rp-transfer-section"
      id="payment-features"
      aria-labelledby="rp-transfer-title"
    >
      <div className="rp-transfer-inner">
        <h2 id="rp-transfer-title">{current.title}</h2>

        <div className="rp-transfer-grid">
          {paymentFeatures.map((feature) => {
            const content = feature.content[language] || feature.content.en;

            return (
              <article className="rp-transfer-card" key={feature.slug}>
                <img
                  className="rp-transfer-icon"
                  src={feature.icon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
                <h3>{content.title}</h3>
                <p>{content.description}</p>
                <Link
                  className="rp-transfer-link"
                  to={`/features/${feature.slug}`}
                  aria-label={`${current.learnMore}: ${content.title}`}
                >
                  {current.learnMore}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
