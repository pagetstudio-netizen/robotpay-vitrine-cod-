import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n.jsx";
import retailFamilyImage from "../../attached_assets/wholesale_img_1791566885250.png";
import "./RobotPayAdoptionSection.css";

const copy = {
  en: {
    eyebrow: "ROBOTPAY",
    title: "Adopt RobotPay",
    intro:
      "An omnichannel payment platform for ambitious retail and wholesale businesses across Africa.",
    panelLabel: "PAYMENTS THAT MOVE BUSINESS FORWARD",
    panelTitle:
      "One omnichannel platform for retail and wholesale across Africa.",
    description:
      "RobotPay connects your business to local payment networks so you can accept payments and send payouts through one integration. Our technical team is ready to support your setup.",
    learnMore: "Learn more",
    imageAlt: "A father and daughter shopping together in a grocery store"
  },
  fr: {
    eyebrow: "ROBOTPAY",
    title: "Adoptez RobotPay",
    intro:
      "Une plateforme de paiement omnicanale pour les commerces de détail et de gros qui se développent en Afrique.",
    panelLabel: "DES PAIEMENTS QUI FONT AVANCER VOTRE ACTIVITÉ",
    panelTitle:
      "Une plateforme omnicanale pour le commerce de détail et de gros en Afrique.",
    description:
      "RobotPay connecte votre entreprise aux réseaux de paiement locaux afin d’accepter des paiements et d’effectuer des versements via une seule intégration. Notre équipe technique vous accompagne dans sa mise en place.",
    learnMore: "En savoir plus",
    imageAlt: "Un père et sa fille font leurs courses dans un magasin"
  },
  zh: {
    eyebrow: "ROBOTPAY",
    title: "选择 RobotPay",
    intro: "为非洲零售和批发企业打造的全渠道支付平台。",
    panelLabel: "让支付推动业务发展",
    panelTitle: "一个平台，连接非洲零售与批发业务。",
    description:
      "RobotPay 将您的业务连接到本地支付网络，通过一次集成即可收款和付款。我们的技术团队随时为您提供接入支持。",
    learnMore: "了解更多",
    imageAlt: "一位父亲和女儿在杂货店购物"
  }
};

export default function RobotPayAdoptionSection() {
  const { language } = useLanguage();
  const current = copy[language] || copy.en;

  return (
    <section className="rp-adoption-section" aria-labelledby="rp-adoption-title">
      <header className="rp-adoption-intro">
        <p className="rp-adoption-eyebrow">{current.eyebrow}</p>
        <h2 id="rp-adoption-title">{current.title}</h2>
        <p className="rp-adoption-lead">{current.intro}</p>
      </header>

      <figure className="rp-adoption-image">
        <img
          src={retailFamilyImage}
          alt={current.imageAlt}
          loading="lazy"
        />
      </figure>

      <div className="rp-adoption-panel">
        <div className="rp-adoption-panel-content">
          <p className="rp-adoption-panel-label">{current.panelLabel}</p>
          <h3>{current.panelTitle}</h3>
          <p className="rp-adoption-description">{current.description}</p>
          <Link className="rp-adoption-link" to="/contact">
            <span>{current.learnMore}</span>
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
