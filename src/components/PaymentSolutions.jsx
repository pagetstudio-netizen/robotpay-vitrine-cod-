import { useLanguage } from "../i18n.jsx";
import { Link } from "react-router-dom";

import westpay from "../assets/icons/westpay.png";
import bank from "../assets/icons/bank.png";
import bank2 from "../assets/icons/bank2.png";
import wallet from "../assets/icons/wallet.png";
import wave from "../assets/icons/wave.png";
import paymaya from "../assets/icons/paymaya.png";
import paymentLink from "../assets/icons/payment-link.png";
import api from "../assets/icons/api.png";
import sdk from "../assets/icons/sdk.png";

const solutions = [
  {
    name: "WestPay",
    icon: westpay,
    type: "westpay"
  },
  {
    name: "Bank 1",
    icon: bank,
    type: "bank"
  },
  {
    name: "Bank 2",
    icon: bank2,
    type: "bank"
  },
  {
    name: "E-Wallet",
    icon: wallet,
    type: "wallet"
  },
  {
    name: "Wave",
    icon: wave,
    type: "wave"
  },
  {
    name: "PayMaya",
    icon: paymaya,
    type: "maya"
  },
  {
    name: "LinkPay",
    icon: paymentLink,
    type: "linkpay"
  },
  {
    name: "API",
    icon: api,
    type: "api"
  },
  {
    name: "SDK",
    icon: sdk,
    type: "sdk"
  }
];

const translations = {
  en: {
    label: "PAYMENT SOLUTIONS",
    title: <>Everything you need.<br /><strong>One platform.</strong></>,
    intro:
      "Connect your business to multiple payment networks, wallets and developer solutions through RobotPay.",
    learn: "Learn more",
    previous: "Previous",
    next: "Next",

    cards: {
      "WestPay": {
        category: "Payment Network",
        description: "Connect your business to local payment networks across Africa."
      },
      "Bank 1": {
        category: "Banking",
        description: "Reliable bank payment infrastructure for your business."
      },
      "Bank 2": {
        category: "Banking",
        description: "Access secure banking payment solutions through one platform."
      },
      "E-Wallet": {
        category: "Digital Wallet",
        description: "Manage digital wallet payments from a single integration."
      },
      "Wave": {
        category: "Mobile Money",
        description: "Accept mobile money payments through supported networks."
      },
      "PayMaya": {
        category: "E-Wallet",
        description: "Connect your customers to convenient digital wallet payments."
      },
      "LinkPay": {
        category: "Payment Link",
        description: "Create simple payment links and start collecting payments."
      },
      "API": {
        category: "Developer Tools",
        description: "Integrate RobotPay directly into your own platform."
      },
      "SDK": {
        category: "Developer Tools",
        description: "Build faster with RobotPay SDKs and ready-to-use tools."
      }
    }
  },

  fr: {
    label: "SOLUTIONS DE PAIEMENT",
    title: <>Tout ce dont vous avez besoin.<br /><strong>Une plateforme.</strong></>,
    intro:
      "Connectez votre entreprise à plusieurs réseaux de paiement, portefeuilles et solutions pour développeurs avec RobotPay.",
    learn: "En savoir plus",
    previous: "Précédent",
    next: "Suivant",

    cards: {
      "WestPay": {
        category: "Réseau de paiement",
        description: "Connectez votre entreprise aux réseaux de paiement locaux à travers l'Afrique."
      },
      "Bank 1": {
        category: "Services bancaires",
        description: "Une infrastructure bancaire fiable pour les paiements de votre entreprise."
      },
      "Bank 2": {
        category: "Services bancaires",
        description: "Accédez à des solutions bancaires sécurisées depuis une seule plateforme."
      },
      "E-Wallet": {
        category: "Portefeuille numérique",
        description: "Gérez les paiements par portefeuille numérique avec une seule intégration."
      },
      "Wave": {
        category: "Mobile Money",
        description: "Acceptez les paiements Mobile Money via les réseaux pris en charge."
      },
      "PayMaya": {
        category: "Portefeuille numérique",
        description: "Offrez à vos clients des paiements pratiques par portefeuille numérique."
      },
      "LinkPay": {
        category: "Lien de paiement",
        description: "Créez des liens de paiement simples et commencez à encaisser."
      },
      "API": {
        category: "Outils développeurs",
        description: "Intégrez directement RobotPay à votre propre plateforme."
      },
      "SDK": {
        category: "Outils développeurs",
        description: "Développez plus rapidement avec les SDK et outils RobotPay prêts à l'emploi."
      }
    }
  },

  zh: {
    label: "支付解决方案",
    title: <>您需要的一切。<br /><strong>一个平台。</strong></>,
    intro:
      "通过 RobotPay 将您的企业连接到多个支付网络、数字钱包和开发者解决方案。",
    learn: "了解更多",
    previous: "上一个",
    next: "下一个",

    cards: {
      "WestPay": {
        category: "支付网络",
        description: "将您的企业连接到非洲各地的本地支付网络。"
      },
      "Bank 1": {
        category: "银行服务",
        description: "为您的企业提供可靠的银行支付基础设施。"
      },
      "Bank 2": {
        category: "银行服务",
        description: "通过一个平台访问安全的银行支付解决方案。"
      },
      "E-Wallet": {
        category: "数字钱包",
        description: "通过一次集成管理数字钱包支付。"
      },
      "Wave": {
        category: "移动支付",
        description: "通过支持的网络接受移动支付。"
      },
      "PayMaya": {
        category: "数字钱包",
        description: "让您的客户使用便捷的数字钱包进行支付。"
      },
      "LinkPay": {
        category: "支付链接",
        description: "创建简单的支付链接并开始收款。"
      },
      "API": {
        category: "开发者工具",
        description: "将 RobotPay 直接集成到您自己的平台。"
      },
      "SDK": {
        category: "开发者工具",
        description: "使用 RobotPay SDK 和现成工具更快地进行开发。"
      }
    }
  }
};

export default function PaymentSolutions() {
  const { language } = useLanguage();

  const current =
    translations[language] || translations.en;

  const scroll = (direction) => {
    const track = document.getElementById("rp-solutions-track");

    if (!track) return;

    track.scrollBy({
      left: direction === "next" ? 330 : -330,
      behavior: "smooth"
    });
  };

  return (
    <section className="rp-solutions-slider">

      <div className="rp-solutions-heading">

        <span>{current.label}</span>

        <h2>
          {current.title}
        </h2>

        <p>
          {current.intro}
        </p>

      </div>

      <div className="rp-solutions-carousel">

        <button
          className="rp-slider-arrow rp-slider-prev"
          onClick={() => scroll("prev")}
          aria-label={current.previous}
        >
          ‹
        </button>

        <div
          className="rp-solutions-track"
          id="rp-solutions-track"
        >

          {solutions.map((solution) => {

            const card = current.cards[solution.name];

            return (
              <article
                className="rp-solution-card"
                key={solution.name}
              >

                <div
                  className={`rp-solution-icon ${solution.type}`}
                >
                  <img
                    src={solution.icon}
                    alt={solution.name}
                    className="rp-solution-img"
                  />
                </div>

                <span className="rp-solution-category">
                  {card.category}
                </span>

                <h3>
                  {solution.name}
                </h3>

                <p>
                  {card.description}
                </p>

                <Link
                  className="rp-solution-link"
                  to="/contact"
                >
                  {current.learn}
                  <span>→</span>
                </Link>

              </article>
            );

          })}

        </div>

        <button
          className="rp-slider-arrow rp-slider-next"
          onClick={() => scroll("next")}
          aria-label={current.next}
        >
          ›
        </button>

      </div>

    </section>
  );
}
