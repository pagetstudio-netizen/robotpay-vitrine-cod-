import { useLanguage } from "../i18n.jsx";

const cards = [
  {
    image: "https://res.cloudinary.com/fa719lho/image/upload/v1787872129/Screenshot_20260826-170313_tjkzgz.png",
    key: "infrastructure"
  },
  {
    image: "https://res.cloudinary.com/fa719lho/image/upload/v1787872099/Screenshot_20260826-170419_wme2au.png",
    key: "links"
  },
  {
    image: "https://res.cloudinary.com/fa719lho/image/upload/v1787872053/IMG_20260826_171326_814_lc2mli.jpg",
    key: "transactions"
  },
  {
    image: "https://res.cloudinary.com/fa719lho/image/upload/v1787871998/IMG_20260826_171328_925_zixzad.jpg",
    key: "business"
  }
];

const translations = {
  en: {
    label: "ROBOTPAY PLATFORM",
    title: <>Powerful tools.<br /><span>Simple experience.</span></>,
    intro:
      "Discover the tools that help businesses manage payments, transactions and operations.",
    cards: {
      infrastructure: {
        label: "Payment infrastructure",
        title: "Everything your business needs to move money.",
        text: "Manage payments and financial operations from one powerful platform."
      },
      links: {
        label: "Payment links",
        title: "Get paid with a simple link.",
        text: "Create payment experiences that are simple for your customers."
      },
      transactions: {
        label: "Transactions",
        title: "See every transaction in one place.",
        text: "Track your payment activity with a clear and intuitive interface."
      },
      business: {
        label: "Business tools",
        title: "Built for modern businesses.",
        text: "Powerful tools designed to simplify your daily payment operations."
      }
    }
  },

  fr: {
    label: "PLATEFORME ROBOTPAY",
    title: <>Des outils puissants.<br /><span>Une expérience simple.</span></>,
    intro:
      "Découvrez les outils qui permettent aux entreprises de gérer leurs paiements, transactions et opérations.",
    cards: {
      infrastructure: {
        label: "Infrastructure de paiement",
        title: "Tout ce dont votre entreprise a besoin pour déplacer de l'argent.",
        text: "Gérez vos paiements et opérations financières depuis une plateforme puissante."
      },
      links: {
        label: "Liens de paiement",
        title: "Recevez des paiements avec un simple lien.",
        text: "Créez des expériences de paiement simples pour vos clients."
      },
      transactions: {
        label: "Transactions",
        title: "Visualisez toutes vos transactions au même endroit.",
        text: "Suivez votre activité de paiement grâce à une interface claire et intuitive."
      },
      business: {
        label: "Outils professionnels",
        title: "Conçu pour les entreprises modernes.",
        text: "Des outils puissants conçus pour simplifier vos opérations de paiement quotidiennes."
      }
    }
  },

  zh: {
    label: "ROBOTPAY 平台",
    title: <>强大的工具。<br /><span>简单的体验。</span></>,
    intro:
      "探索帮助企业管理支付、交易和业务运营的工具。",
    cards: {
      infrastructure: {
        label: "支付基础设施",
        title: "企业转移资金所需的一切。",
        text: "通过一个强大的平台管理您的支付和财务运营。"
      },
      links: {
        label: "支付链接",
        title: "通过一个简单的链接收款。",
        text: "为您的客户创建简单便捷的支付体验。"
      },
      transactions: {
        label: "交易",
        title: "在一个地方查看所有交易。",
        text: "通过清晰直观的界面跟踪您的支付活动。"
      },
      business: {
        label: "企业工具",
        title: "专为现代企业打造。",
        text: "强大的工具帮助您简化日常支付运营。"
      }
    }
  }
};

export default function Showcase() {
  const { language } = useLanguage();

  const current = translations[language] || translations.en;

  return (
    <section className="rp-showcase">

      <div className="rp-showcase-header">

        <div className="rp-section-label">
          {current.label}
        </div>

        <h2>
          {current.title}
        </h2>

        <p>
          {current.intro}
        </p>

      </div>

      <div className="rp-showcase-grid">

        {cards.map((card) => {

          const content = current.cards[card.key];

          return (
            <article
              className="rp-showcase-card"
              key={card.key}
            >

              <div className="rp-showcase-image">
                <img
                  src={card.image}
                  alt={content.title}
                  loading="lazy"
                />
              </div>

              <div className="rp-showcase-content">

                <span className="rp-showcase-label">
                  {content.label}
                </span>

                <h3>
                  {content.title}
                </h3>

                <p>
                  {content.text}
                </p>

              </div>

            </article>
          );

        })}

      </div>

    </section>
  );
}
