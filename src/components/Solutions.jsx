import { useLanguage } from "../i18n.jsx";
import fintech from "../assets/icons/fintech.png";
import transaction from "../assets/icons/transaction.png";
import transfer from "../assets/icons/transfer.png";
import mobile from "../assets/icons/mobile.png";
import payment from "../assets/icons/payment.png";
import api from "../assets/icons/api.png";

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
    }
  }[language] || null;

  const current = content;
  return (
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
  );
}
