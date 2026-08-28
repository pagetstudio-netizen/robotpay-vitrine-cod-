import { ArrowRight, Send } from "lucide-react";
import { useLanguage } from "../i18n.jsx";

const translations = {
  en: {
    ctaLabel: "LET'S WORK TOGETHER",
    ctaTitle: <>Ready to move<br /><span>money differently?</span></>,
    ctaText:
      "Tell us about your business, your target markets and your payment needs. Our team will help you find the right RobotPay integration.",

    support: "Telegram support",
    available1: "Available 09:00–12:00 China Time",
    available2: "Available 15:00–20:00 China Time",

    formLabel: "START A CONVERSATION",
    formTitle: "Tell us about your project.",

    emailLabel: "Business email",
    emailPlaceholder: "you@company.com",

    websiteLabel: "Website",
    websitePlaceholder: "https://yourcompany.com",

    countriesLabel: "Countries you want to integrate",
    countriesPlaceholder: "Togo, Benin, Côte d'Ivoire...",

    needsLabel: "Tell us about your needs",
    needsPlaceholder:
      "Tell us about your business, payment methods, expected volume or integration needs...",

    send: "Send your request",
    note: "Your request will open directly in Telegram.",

    telegramGreeting: "Hello RobotPay",
    telegramIntro: "I would like to discuss a payment integration.",
    email: "Business email:",
    website: "Website:",
    countries: "Countries I want to integrate:",
    needs: "Payment / integration needs:",
    notProvided: "Not provided",

    faqLabel: "QUESTIONS",
    faqTitle: <>Frequently asked<br /><span>questions.</span></>,

    faq: [
      {
        q: "What is RobotPay?",
        a: "RobotPay is a payment infrastructure that helps businesses collect payments and send payouts through connected payment networks."
      },
      {
        q: "Which countries do you support?",
        a: "RobotPay is designed to connect businesses with payment networks across African markets."
      },
      {
        q: "Can I integrate RobotPay with my website?",
        a: "Yes. Developers can integrate RobotPay using our API and payment tools."
      },
      {
        q: "How do I get access to the API?",
        a: "Contact our team to discuss your business, integration requirements and API access."
      },
      {
        q: "How long does integration take?",
        a: "Integration time depends on your use case, payment methods and technical requirements."
      }
    ]
  },

  fr: {
    ctaLabel: "TRAVAILLONS ENSEMBLE",
    ctaTitle: <>Prêt à déplacer<br /><span>l'argent autrement ?</span></>,
    ctaText:
      "Parlez-nous de votre entreprise, de vos marchés cibles et de vos besoins en matière de paiement. Notre équipe vous aidera à trouver la solution RobotPay adaptée.",

    support: "Support Telegram",
    available1: "Disponible de 09h00 à 12h00, heure de Chine",
    available2: "Disponible de 15h00 à 20h00, heure de Chine",

    formLabel: "DÉMARRER UNE CONVERSATION",
    formTitle: "Parlez-nous de votre projet.",

    emailLabel: "E-mail professionnel",
    emailPlaceholder: "vous@entreprise.com",

    websiteLabel: "Site web",
    websitePlaceholder: "https://votreentreprise.com",

    countriesLabel: "Pays que vous souhaitez intégrer",
    countriesPlaceholder: "Togo, Bénin, Côte d'Ivoire...",

    needsLabel: "Parlez-nous de vos besoins",
    needsPlaceholder:
      "Présentez votre entreprise, vos moyens de paiement, votre volume prévu ou vos besoins d'intégration...",

    send: "Envoyer la demande",
    note: "Votre demande s'ouvrira directement dans Telegram.",

    telegramGreeting: "Bonjour RobotPay",
    telegramIntro: "Je souhaite discuter d'une intégration de paiement.",
    email: "E-mail professionnel :",
    website: "Site web :",
    countries: "Pays que je souhaite intégrer :",
    needs: "Besoins en paiement / intégration :",
    notProvided: "Non renseigné",

    faqLabel: "QUESTIONS",
    faqTitle: <>Questions<br /><span>fréquentes.</span></>,

    faq: [
      {
        q: "Qu'est-ce que RobotPay ?",
        a: "RobotPay est une infrastructure de paiement qui permet aux entreprises d'accepter des paiements et d'effectuer des payouts via des réseaux de paiement connectés."
      },
      {
        q: "Quels pays prenez-vous en charge ?",
        a: "RobotPay est conçu pour connecter les entreprises aux réseaux de paiement des marchés africains."
      },
      {
        q: "Puis-je intégrer RobotPay à mon site web ?",
        a: "Oui. Les développeurs peuvent intégrer RobotPay à l'aide de notre API et de nos outils de paiement."
      },
      {
        q: "Comment obtenir l'accès à l'API ?",
        a: "Contactez notre équipe pour discuter de votre entreprise, de vos besoins d'intégration et de l'accès à l'API."
      },
      {
        q: "Combien de temps prend l'intégration ?",
        a: "La durée de l'intégration dépend de votre cas d'utilisation, des moyens de paiement et des exigences techniques."
      }
    ]
  },

  zh: {
    ctaLabel: "让我们一起合作",
    ctaTitle: <>准备好<br /><span>以不同方式转移资金了吗？</span></>,
    ctaText:
      "告诉我们您的企业、目标市场和支付需求。我们的团队将帮助您找到适合您的 RobotPay 支付解决方案。",

    support: "Telegram 支持",
    available1: "中国时间 09:00–12:00",
    available2: "中国时间 15:00–20:00",

    formLabel: "开始对话",
    formTitle: "告诉我们您的项目。",

    emailLabel: "企业邮箱",
    emailPlaceholder: "you@company.com",

    websiteLabel: "网站",
    websitePlaceholder: "https://yourcompany.com",

    countriesLabel: "您希望接入的国家",
    countriesPlaceholder: "多哥、贝宁、科特迪瓦...",

    needsLabel: "告诉我们您的需求",
    needsPlaceholder:
      "介绍您的企业、支付方式、预计交易量或集成需求...",

    send: "发送请求",
    note: "您的请求将直接在 Telegram 中打开。",

    telegramGreeting: "您好 RobotPay",
    telegramIntro: "我想咨询支付集成。",
    email: "企业邮箱：",
    website: "网站：",
    countries: "希望接入的国家：",
    needs: "支付 / 集成需求：",
    notProvided: "未提供",

    faqLabel: "常见问题",
    faqTitle: <>常见<br /><span>问题。</span></>,

    faq: [
      {
        q: "什么是 RobotPay？",
        a: "RobotPay 是一个支付基础设施，帮助企业通过连接的支付网络收款和向用户付款。"
      },
      {
        q: "你们支持哪些国家？",
        a: "RobotPay 致力于将企业连接到非洲各个市场的支付网络。"
      },
      {
        q: "我可以将 RobotPay 集成到我的网站吗？",
        a: "可以。开发者可以使用我们的 API 和支付工具将 RobotPay 集成到自己的平台。"
      },
      {
        q: "如何获得 API 访问权限？",
        a: "请联系我们的团队，讨论您的业务、集成需求以及 API 访问权限。"
      },
      {
        q: "集成需要多长时间？",
        a: "集成时间取决于您的使用场景、支付方式和技术要求。"
      }
    ]
  }
};

export default function CTA() {
  const { language } = useLanguage();

  const current = translations[language] || translations.en;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const email = form.get("email");
    const website = form.get("website");
    const countries = form.get("countries");
    const message = form.get("message");

    const telegramMessage = `${current.telegramGreeting},

${current.telegramIntro}

${current.email}
${email}

${current.website}
${website || current.notProvided}

${current.countries}
${countries}

${current.needs}
${message}`;

    const telegramUrl =
      `https://t.me/geeorbotpay?text=${encodeURIComponent(telegramMessage)}`;

    window.open(
      telegramUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <section className="rp-cta" id="contact">

        <div className="rp-cta-inner">

          <div className="rp-cta-copy">

            <div className="rp-section-label">
              {current.ctaLabel}
            </div>

            <h2>
              {current.ctaTitle}
            </h2>

            <p>
              {current.ctaText}
            </p>

            <div className="rp-telegram-support">

              <div className="rp-support-title">
                <Send size={17} />
                <span>{current.support}</span>
              </div>

              <a
                href="https://t.me/geeorbotpay"
                target="_blank"
                rel="noopener noreferrer"
                className="rp-support-contact"
              >
                <strong>@geeorbotpay</strong>
                <span>{current.available1}</span>
              </a>

              <a
                href="https://t.me/Atfchalvt"
                target="_blank"
                rel="noopener noreferrer"
                className="rp-support-contact"
              >
                <strong>@Atfchalvt</strong>
                <span>{current.available2}</span>
              </a>

            </div>

          </div>

          <div className="rp-cta-form-card">

            <div className="rp-form-heading">
              <span>{current.formLabel}</span>
              <h3>{current.formTitle}</h3>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="rp-form-field">
                <label>{current.emailLabel}</label>
                <input
                  type="email"
                  name="email"
                  placeholder={current.emailPlaceholder}
                  required
                />
              </div>

              <div className="rp-form-field">
                <label>{current.websiteLabel}</label>
                <input
                  type="url"
                  name="website"
                  placeholder={current.websitePlaceholder}
                />
              </div>

              <div className="rp-form-field">
                <label>{current.countriesLabel}</label>
                <input
                  type="text"
                  name="countries"
                  placeholder={current.countriesPlaceholder}
                  required
                />
              </div>

              <div className="rp-form-field">
                <label>{current.needsLabel}</label>
                <textarea
                  name="message"
                  placeholder={current.needsPlaceholder}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="rp-send-request"
              >
                <span>{current.send}</span>

                <span className="rp-send-icon">
                  <ArrowRight size={18} />
                </span>
              </button>

              <div className="rp-form-note">
                {current.note}
              </div>

            </form>

          </div>

        </div>

      </section>

      <section className="rp-faq">

        <div className="rp-faq-inner">

          <div className="rp-section-label">
            {current.faqLabel}
          </div>

          <h2>
            {current.faqTitle}
          </h2>

          <div className="rp-faq-list">

            {current.faq.map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <span>+</span>
                </summary>

                <p>
                  {item.a}
                </p>
              </details>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}
