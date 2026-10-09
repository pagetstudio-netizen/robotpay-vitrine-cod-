import { useLanguage } from "../i18n.jsx";
import gameCatalog from "../assets/game-api/game-catalog.jpg";
import gameTiles from "../assets/game-api/game-tiles.jpg";
import "./GameApiSection.css";

const copy = {
  en: {
    title: "A video game API with a technical team ready to help.",
    description:
      "We offer a video game API and a technical team to support you throughout integration.",
    discover: "Explore the API",
    contact: "Talk to our team",
    actionsLabel: "Game API links",
    steps: [
      {
        title: "Connect your platform to the game API.",
        description: "Our team can help you prepare the integration for your project."
      },
      {
        title: "Present games to your users.",
        description: "Highlight the games that fit your offer."
      },
      {
        title: "Get technical support.",
        description: "Our technical team is ready to help and answer your questions."
      }
    ],
    catalogAlt: "Video game catalog",
    gamesAlt: "A selection of video games"
  },
  fr: {
    title: "Une API de jeux vidéo avec une équipe technique prête à vous aider.",
    description:
      "Nous proposons une API de jeux vidéo et une équipe technique pour vous accompagner dans son intégration.",
    discover: "Découvrir l’API",
    contact: "Parler à l’équipe",
    actionsLabel: "Liens de l’API de jeux",
    steps: [
      {
        title: "Connectez votre plateforme à l’API de jeux.",
        description: "Notre équipe vous accompagne dans la préparation de l’intégration selon votre projet."
      },
      {
        title: "Présentez des jeux à vos utilisateurs.",
        description: "Mettez en avant les jeux qui correspondent à votre offre."
      },
      {
        title: "Profitez d’un accompagnement technique.",
        description: "Notre équipe est prête à vous aider et à répondre à vos questions."
      }
    ],
    catalogAlt: "Catalogue de jeux vidéo",
    gamesAlt: "Sélection de jeux vidéo"
  },
  zh: {
    title: "游戏 API 与随时提供帮助的技术团队。",
    description:
      "我们提供游戏 API，并由技术团队协助您完成集成。",
    discover: "了解游戏 API",
    contact: "联系技术团队",
    actionsLabel: "游戏 API 链接",
    steps: [
      {
        title: "将您的平台连接到游戏 API。",
        description: "我们的团队可以协助您为项目准备集成。"
      },
      {
        title: "向用户展示游戏。",
        description: "展示适合您业务的游戏内容。"
      },
      {
        title: "获得技术支持。",
        description: "我们的技术团队随时准备为您提供帮助并解答问题。"
      }
    ],
    catalogAlt: "电子游戏目录",
    gamesAlt: "电子游戏精选"
  }
};

export default function GameApiSection() {
  const { language } = useLanguage();
  const current = copy[language] || copy.en;

  return (
    <section className="rp-game-api-section" aria-labelledby="rp-game-api-title">
      <div className="rp-game-api-inner">
        <header className="rp-game-api-header">
          <h2 id="rp-game-api-title">{current.title}</h2>
          <p className="rp-game-api-description">{current.description}</p>
          <nav className="rp-game-api-actions" aria-label={current.actionsLabel}>
            <a className="rp-game-api-action" href="#rp-game-api-step-1">
              {current.discover}
            </a>
            <a
              className="rp-game-api-action"
              href="https://t.me/geeorbotpay"
              target="_blank"
              rel="noopener noreferrer"
            >
              {current.contact}
            </a>
          </nav>
        </header>

        <figure className="rp-game-api-visual rp-game-api-visual-catalog">
          <img src={gameCatalog} alt={current.catalogAlt} loading="lazy" />
        </figure>

        <div className="rp-game-api-steps">
          <article className="rp-game-api-step" id="rp-game-api-step-1">
            <span className="rp-game-api-step-number" aria-hidden="true">1</span>
            <div>
              <h3>{current.steps[0].title}</h3>
              <p>{current.steps[0].description}</p>
            </div>
          </article>

          <figure className="rp-game-api-visual rp-game-api-visual-games">
            <img src={gameTiles} alt={current.gamesAlt} loading="lazy" />
          </figure>

          <article className="rp-game-api-step">
            <span className="rp-game-api-step-number" aria-hidden="true">2</span>
            <div>
              <h3>{current.steps[1].title}</h3>
              <p>{current.steps[1].description}</p>
            </div>
          </article>

          <article className="rp-game-api-step">
            <span className="rp-game-api-step-number" aria-hidden="true">3</span>
            <div>
              <h3>{current.steps[2].title}</h3>
              <p>{current.steps[2].description}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
