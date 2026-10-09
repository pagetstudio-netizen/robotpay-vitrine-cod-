import { useLanguage } from "../i18n.jsx";
import gameLoginFlow from "../assets/game-api/game-login-flow.png";
import gameDepositFlow from "../assets/game-api/game-deposit-flow.png";
import gameCatalog from "../assets/game-api/game-catalog.jpg";
import gameTiles from "../assets/game-api/game-tiles.jpg";
import "./GameApiSection.css";

const copy = {
  en: {
    label: "GAMING API",
    title: "A game API with a technical team ready to help.",
    description:
      "Connect your platform to our game API. Our technical team can guide you through the integration and answer your questions.",
    benefits: [
      {
        title: "A dedicated game API",
        description: "Bring a gaming offer to your platform through our API."
      },
      {
        title: "Guidance during integration",
        description: "Get help from our technical team at every step."
      },
      {
        title: "A team by your side",
        description: "We are ready to answer your integration questions."
      }
    ],
    contact: "Talk to our technical team",
    galleryLabel: "Examples of game and payment experiences",
    images: {
      catalog: "GameBrain game catalog",
      games: "A selection of video games",
      login: "OKPay account sign-in screen",
      deposit: "OKPay payment and deposit screen"
    }
  },
  fr: {
    label: "API GAMING",
    title: "Une API de jeux vidéo, avec une équipe technique prête à vous aider.",
    description:
      "Connectez votre plateforme à notre API de jeux. Notre équipe technique vous accompagne dans l’intégration et reste disponible pour répondre à vos questions.",
    benefits: [
      {
        title: "Une API dédiée aux jeux",
        description: "Intégrez une offre gaming à votre plateforme grâce à notre API."
      },
      {
        title: "Un accompagnement à l’intégration",
        description: "Bénéficiez de l’aide de notre équipe technique à chaque étape."
      },
      {
        title: "Une équipe à vos côtés",
        description: "Nous sommes disponibles pour répondre à vos questions sur l’intégration."
      }
    ],
    contact: "Parler à l’équipe technique",
    galleryLabel: "Exemples d’expériences de jeu et de paiement",
    images: {
      catalog: "Catalogue de jeux GameBrain",
      games: "Sélection de jeux vidéo",
      login: "Écran de connexion OKPay",
      deposit: "Écran de paiement et de dépôt OKPay"
    }
  },
  zh: {
    label: "游戏 API",
    title: "游戏 API 与随时为您提供帮助的技术团队。",
    description:
      "将您的平台连接到我们的游戏 API。我们的技术团队可以协助您完成集成并解答问题。",
    benefits: [
      {
        title: "专属游戏 API",
        description: "通过我们的 API 将游戏服务接入您的平台。"
      },
      {
        title: "集成指导",
        description: "我们的技术团队会在集成过程中为您提供帮助。"
      },
      {
        title: "技术团队支持",
        description: "如有集成问题，我们随时为您解答。"
      }
    ],
    contact: "联系技术团队",
    galleryLabel: "游戏与支付体验示例",
    images: {
      catalog: "GameBrain 游戏目录",
      games: "电子游戏精选",
      login: "OKPay 账户登录界面",
      deposit: "OKPay 支付与充值界面"
    }
  }
};

const galleryImages = [
  { key: "catalog", src: gameCatalog, className: "catalog" },
  { key: "games", src: gameTiles, className: "games" },
  { key: "login", src: gameLoginFlow, className: "login" },
  { key: "deposit", src: gameDepositFlow, className: "deposit" }
];

export default function GameApiSection() {
  const { language } = useLanguage();
  const current = copy[language] || copy.en;

  return (
    <section className="rp-game-api-section" aria-labelledby="rp-game-api-title">
      <div className="rp-game-api-inner">
        <div className="rp-game-api-copy">
          <span className="rp-game-api-label">{current.label}</span>
          <h2 id="rp-game-api-title">{current.title}</h2>
          <p className="rp-game-api-description">{current.description}</p>

          <ul className="rp-game-api-benefits">
            {current.benefits.map((benefit, index) => (
              <li key={benefit.title}>
                <span className="rp-game-api-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong>{benefit.title}</strong>
                  <span className="rp-game-api-benefit-copy">
                    {benefit.description}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <a
            className="rp-game-api-cta"
            href="https://t.me/geeorbotpay"
            target="_blank"
            rel="noopener noreferrer"
          >
            {current.contact}
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div
          className="rp-game-api-gallery"
          role="group"
          aria-label={current.galleryLabel}
        >
          {galleryImages.map((image) => (
            <figure
              className={`rp-game-api-image rp-game-api-image-${image.className}`}
              key={image.key}
            >
              <img
                src={image.src}
                alt={current.images[image.key]}
                loading="lazy"
              />
              <figcaption>{current.images[image.key]}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
