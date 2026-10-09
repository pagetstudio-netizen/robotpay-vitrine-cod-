import { Link } from "react-router-dom";
import {
  Banknote,
  CreditCard,
  DollarSign,
  Gem,
  Landmark,
  Receipt
} from "lucide-react";
import { useLanguage } from "../i18n.jsx";
import Hero from "./Hero";
import Footer from "./Footer";
import "./AboutPage.css";

const bannerMarks = [
  { Icon: Gem, className: "rp-about-mark-gem-left" },
  { Icon: Banknote, className: "rp-about-mark-note" },
  { Icon: DollarSign, className: "rp-about-mark-dollar-top" },
  { Icon: Gem, className: "rp-about-mark-gem-right" },
  { Icon: CreditCard, className: "rp-about-mark-card" },
  { Icon: DollarSign, className: "rp-about-mark-dollar-bottom" },
  { Icon: Receipt, className: "rp-about-mark-receipt" },
  { Icon: Landmark, className: "rp-about-mark-bank" }
];

const aboutCopy = {
  en: {
    title: "What is RobotPay?",
    intro:
      "RobotPay is an international payment technology aggregator. We provide payment APIs and a range of online and offline services for platforms across different categories, with support for USDT and D0 payments.",
    platformTitle: "One platform for connected payment services",
    platform:
      "RobotPay brings payment capabilities together so businesses can accept payments, send payouts and connect to supported payment networks through a unified platform.",
    servicesTitle: "Our services",
    servicesIntro:
      "We provide payment tools and integration support for the essential payment operations of your platform:",
    services: [
      {
        title: "Payment collection (Payin)",
        description:
          "Accept customer payments through payment networks and methods supported by RobotPay."
      },
      {
        title: "Payouts",
        description:
          "Send payments to users and business partners through connected payout services."
      },
      {
        title: "Payment links",
        description:
          "Create a link to collect a payment without building a checkout flow from scratch."
      },
      {
        title: "Payment APIs and SDKs",
        description:
          "Connect payment features to your website, application or other platform."
      },
      {
        title: "Game API and technical support",
        description:
          "Explore game integrations with a technical team available to help with setup and testing."
      }
    ],
    accessTitle: "Online and offline payment services",
    access:
      "RobotPay provides payment technology for different platform categories and business needs. Our APIs and integration services help teams connect their payment operations, including support for USDT and D0 payments.",
    contact:
      "Questions about a service or integration? Contact the RobotPay team."
  },
  fr: {
    title: "Qu’est-ce que RobotPay ?",
    intro:
      "RobotPay est un agrégateur international de technologies de paiement. Nous proposons des API de paiement et différents services en ligne et hors ligne pour des plateformes de toutes catégories, avec des paiements en USDT et D0.",
    platformTitle: "Une plateforme pour connecter vos paiements",
    platform:
      "RobotPay rassemble des outils de paiement pour aider les entreprises à encaisser, effectuer des payouts et se connecter aux réseaux de paiement pris en charge depuis une plateforme unifiée.",
    servicesTitle: "Nos services",
    servicesIntro:
      "Nous proposons des outils et un accompagnement à l’intégration pour les opérations de paiement essentielles de votre plateforme :",
    services: [
      {
        title: "Encaissement (Payin)",
        description:
          "Acceptez les paiements de vos clients via les réseaux et moyens pris en charge par RobotPay."
      },
      {
        title: "Payouts",
        description:
          "Envoyez des paiements à vos utilisateurs et partenaires via les services de paiement connectés."
      },
      {
        title: "Liens de paiement",
        description:
          "Créez un lien pour encaisser un paiement sans développer un parcours de paiement complet."
      },
      {
        title: "API de paiement et SDK",
        description:
          "Connectez des fonctionnalités de paiement à votre site, application ou autre plateforme."
      },
      {
        title: "API de jeux et assistance technique",
        description:
          "Découvrez les intégrations de jeux avec une équipe technique disponible pour vous aider à les configurer et les tester."
      }
    ],
    accessTitle: "Des services en ligne et hors ligne",
    access:
      "RobotPay propose des technologies de paiement adaptées à différents types de plateformes et besoins d’entreprise. Nos API et services d’intégration aident les équipes à connecter leurs opérations de paiement, avec la prise en charge des paiements en USDT et D0.",
    contact:
      "Une question sur un service ou une intégration ? Contactez l’équipe RobotPay."
  },
  zh: {
    title: "什么是 RobotPay？",
    intro:
      "RobotPay 是一家国际支付技术聚合平台，为各类平台提供支付 API 和多种线上及线下服务，并支持 USDT 和 D0 支付。",
    platformTitle: "一个平台，连接多种支付服务",
    platform:
      "RobotPay 汇集支付能力，帮助企业收款、向用户付款，并通过统一平台接入受支持的支付网络。",
    servicesTitle: "我们的服务",
    servicesIntro: "我们为平台的核心支付业务提供工具与集成支持：",
    services: [
      {
        title: "收款（Payin）",
        description: "通过 RobotPay 支持的支付网络和方式接收客户付款。"
      },
      {
        title: "付款（Payout）",
        description: "通过已连接的付款服务向用户和业务合作伙伴付款。"
      },
      {
        title: "支付链接",
        description: "创建支付链接，无需从头开发完整的结账流程即可收款。"
      },
      {
        title: "支付 API 与 SDK",
        description: "将支付功能接入网站、应用程序或其他平台。"
      },
      {
        title: "游戏 API 与技术支持",
        description: "了解游戏集成服务，技术团队可协助配置和测试。"
      }
    ],
    accessTitle: "线上与线下支付服务",
    access:
      "RobotPay 为不同类别的平台和业务需求提供支付技术。我们的 API 与集成服务帮助团队连接支付业务，并支持 USDT 和 D0 支付。",
    contact: "对服务或集成有疑问？请联系 RobotPay 团队。"
  }
};

export default function AboutPage() {
  const { language } = useLanguage();
  const content = aboutCopy[language] || aboutCopy.en;

  return (
    <div className="rp-about-page">
      <Hero headerOnly />

      <main>
        <section className="rp-about-banner" aria-labelledby="rp-about-title">
          <div className="rp-about-banner-art" aria-hidden="true">
            {bannerMarks.map(({ Icon, className }) => (
              <span className={className} key={className}>
                <Icon aria-hidden="true" />
              </span>
            ))}
          </div>
          <div className="rp-about-banner-inner">
            <h1 id="rp-about-title">{content.title}</h1>
          </div>
        </section>

        <article className="rp-about-content">
          <p className="rp-about-intro">{content.intro}</p>

          <h2>{content.platformTitle}</h2>
          <p>{content.platform}</p>

          <h2>{content.servicesTitle}</h2>
          <p>{content.servicesIntro}</p>
          <ul className="rp-about-services">
            {content.services.map((service) => (
              <li key={service.title}>
                <strong>{service.title}:</strong>{" "}
                <span>{service.description}</span>
              </li>
            ))}
          </ul>

          <h2>{content.accessTitle}</h2>
          <p>{content.access}</p>

          <p className="rp-about-contact">
            {content.contact}{" "}
            <Link to="/contact">
              {language === "fr"
                ? "Contacter l’équipe"
                : language === "zh"
                  ? "联系团队"
                  : "Contact the team"}
            </Link>
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
