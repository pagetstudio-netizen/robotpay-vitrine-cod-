import { useLanguage } from "../i18n.jsx";
import fintech from "../assets/icons/fintech.png";
import transaction from "../assets/icons/transaction.png";
import transfer from "../assets/icons/transfer.png";
import mobile from "../assets/icons/mobile.png";
import payment from "../assets/icons/payment.png";
import api from "../assets/icons/api.png";
import integrationSupport from "../assets/integration-support.jpeg";

const services = [
  {
    key: "payin",
    image: transaction,
    title: "Payin",
    text: "Accept payments from customers across Africa."
  },
  {
    key: "payout",
    image: transfer,
    title: "Payout",
    text: "Send fast and secure payments to your users."
  },
  {
    key: "mobileMoney",
    image: mobile,
    title: "Mobile Money",
    text: "Connect to Africa's leading mobile money networks."
  },
  {
    key: "paymentLinks",
    image: payment,
    title: "Payment Links",
    text: "Create simple payment links and start collecting."
  },
  {
    key: "paymentSolutions",
    image: fintech,
    title: "Payment Solutions",
    text: "Powerful tools for modern African businesses."
  },
  {
    key: "paymentApi",
    image: api,
    title: "Payment API",
    text: "Integrate RobotPay directly into your application."
  }
];

export default function Solutions() {
  const { language } = useLanguage();

  const content = {
    en: {
      label: "{current.label}",
      title: <>Everything you need<br />to <span>move money.</span></>,
      intro: <>One infrastructure for collecting payments, sending payouts and connecting your business to Africa's payment networks.</>,
      services: {
        payin: ["Payin", "Accept payments from customers across Africa."],
        payout: ["Payout", "Send fast and secure payments to your users."],
        mobileMoney: ["Mobile Money", "Connect to Africa's leading mobile money networks."],
        paymentLinks: ["Payment Links", "Create simple payment links and start collecting."],
        paymentSolutions: ["Payment Solutions", "Powerful tools for modern African businesses."],
        paymentApi: ["Payment API", "Integrate RobotPay directly into your application."]
      },
      integrationLabel: "{current.integrationLabel}",
      integrationTitle: <>We're here to help<br />you <span>get started.</span></>,
      integrationDescription: "Our integration team is available to guide you through the setup, testing and launch of your RobotPay payment integration.",
      features: [
        ["API & SDK Setup", "Get help connecting your platform."],
        ["Sandbox Testing", "Test your integration before going live."],
        ["Payment Flow Testing", "Validate your payment and payout flows."],
        ["Technical Support", "Our team is ready to help when you need it."]
      ],
      talk: "Talk to our team",
      badge: "We're here to help",
      badgeSub: "Integration support"
    },
    fr: {
      label: "CE QUE NOUS PROPOSONS",
      title: <>Tout ce dont vous avez besoin<br />pour <span>transférer de l'argent.</span></>,
      intro: <>Une infrastructure unique pour collecter les paiements, effectuer des payouts et connecter votre entreprise aux réseaux de paiement africains.</>,
      services: {
        payin: ["Payin", "Acceptez les paiements de vos clients partout en Afrique."],
        payout: ["Payout", "Envoyez des paiements rapides et sécurisés à vos utilisateurs."],
        mobileMoney: ["Mobile Money", "Connectez-vous aux principaux réseaux de mobile money africains."],
        paymentLinks: ["Liens de paiement", "Créez simplement des liens de paiement et commencez à encaisser."],
        paymentSolutions: ["Solutions de paiement", "Des outils puissants pour les entreprises africaines modernes."],
        paymentApi: ["API de paiement", "Intégrez directement RobotPay à votre application."]
      },
      integrationLabel: "SUPPORT D'INTÉGRATION",
      integrationTitle: <>Nous sommes là pour vous aider<br />à <span>vous lancer.</span></>,
      integrationDescription: "Notre équipe d'intégration vous accompagne lors de la configuration, des tests et du lancement de votre intégration de paiement RobotPay.",
      features: [
        ["Configuration API & SDK", "Obtenez de l'aide pour connecter votre plateforme."],
        ["Tests Sandbox", "Testez votre intégration avant la mise en production."],
        ["Tests des flux de paiement", "Validez vos flux de paiement et de payout."],
        ["Support technique", "Notre équipe est disponible lorsque vous en avez besoin."]
      ],
      talk: "Contacter notre équipe",
      badge: "Nous sommes là pour vous aider",
      badgeSub: "Support d'intégration"
    },
    zh: {
      label: "我们的服务",
      title: <>您需要的一切<br />都可以轻松<span>转移资金。</span></>,
      intro: <>通过统一基础设施收款、发送付款，并连接您的企业与非洲支付网络。</>,
      services: {
        payin: ["收款", "接受来自非洲各地客户的付款。"],
        payout: ["付款", "快速、安全地向您的用户发送付款。"],
        mobileMoney: ["移动支付", "连接非洲领先的移动支付网络。"],
        paymentLinks: ["支付链接", "创建简单的支付链接并开始收款。"],
        paymentSolutions: ["支付解决方案", "为现代非洲企业提供强大的支付工具。"],
        paymentApi: ["支付 API", "将 RobotPay 直接集成到您的应用中。"]
      },
      integrationLabel: "集成支持",
      integrationTitle: <>我们随时为您提供帮助<br /><span>立即开始。</span></>,
      integrationDescription: "我们的集成团队可以帮助您完成 RobotPay 支付集成的配置、测试和上线。",
      features: [
        ["API 与 SDK 设置", "帮助您连接平台。"],
        ["Sandbox 测试", "上线前测试您的集成。"],
        ["支付流程测试", "验证您的支付和付款流程。"],
        ["技术支持", "需要帮助时，我们的团队随时为您服务。"]
      ],
      talk: "联系我们的团队",
      badge: "我们随时为您提供帮助",
      badgeSub: "集成支持"
    }
  }[language] || null;

  const current = content;
    return (
    <>
      <section className="rp-services" id="services">

        <div className="rp-services-inner">

          <div className="rp-section-label">
            {current.label}
          </div>

          <h2>
            {current.title}
          </h2>

          <p className="rp-services-intro">
            {current.intro}
          </p>

          <div className="rp-services-grid">

            {services.map((service) => (
              <div
                className="rp-service-card"
                key={service.title}
              >

                <div className="rp-service-image">
                  <img
                    src={service.image}
                    alt={service.title}
                  />
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

              </div>
            ))}

          </div>

          <div className="rp-flaticon-credit">
          </div>

        </div>

      </section>


      {/* =====================================
          {current.integrationLabel}
      ===================================== */}

      <section className="rp-integration-section">

        <div className="rp-integration-card">

          <div className="rp-integration-content">

            <div className="rp-integration-label">
              {current.integrationLabel}
            </div>

            <h2>
              {current.integrationTitle}
            </h2>

            <p className="rp-integration-description">
              {current.integrationDescription}
            </p>

            <div className="rp-integration-features">

              <div className="rp-integration-feature">
                <div className="rp-feature-check">✓</div>
                <div>
                  <strong>{current.features[0][0]}</strong>
                  <span>{current.features[0][1]}</span>
                </div>
              </div>

              <div className="rp-integration-feature">
                <div className="rp-feature-check">✓</div>
                <div>
                  <strong>{current.features[1][0]}</strong>
                  <span>{current.features[1][1]}</span>
                </div>
              </div>

              <div className="rp-integration-feature">
                <div className="rp-feature-check">✓</div>
                <div>
                  <strong>{current.features[2][0]}</strong>
                  <span>{current.features[2][1]}</span>
                </div>
              </div>

              <div className="rp-integration-feature">
                <div className="rp-feature-check">✓</div>
                <div>
                  <strong>{current.features[3][0]}</strong>
                  <span>{current.features[3][1]}</span>
                </div>
              </div>

            </div>

            <a
              href="https://t.me/geeorbotpay"
              target="_blank"
              rel="noopener noreferrer"
              className="rp-integration-button"
            >
              <span>{current.talk}</span>

              <span className="rp-integration-arrow">
                →
              </span>
            </a>

          </div>


          <div className="rp-integration-visual">

            <img
              src={integrationSupport}
              alt="RobotPay integration support team"
            />

            <div className="rp-integration-badge">

              <div className="rp-badge-dot"></div>

              <div>
                <strong>{current.badge}</strong>
                <span>{current.badgeSub}</span>
              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}
