import { useLanguage } from "../i18n.jsx";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import "./ContactPage.css";

const contactChannels = [
  {
    key: "account",
    href: "https://t.me/geeorbotpay",
    value: "t.me/geeorbotpay",
    external: true
  },
  {
    key: "sales",
    href: "https://t.me/Atfchalvt",
    value: "t.me/Atfchalvt",
    external: true
  },
  {
    key: "whatsapp",
    href: "https://wa.me/639609010279",
    value: "+63 960 901 0279",
    external: true
  },
  {
    key: "general",
    href: "mailto:finaceswei@westpay.cfd",
    value: "finaceswei@westpay.cfd",
    external: false
  }
];

const copy = {
  en: {
    notice:
      "RobotPay users can contact the appropriate team using the details below.",
    channelsLabel: "RobotPay contact details",
    channels: {
      account: "Open an account",
      sales: "Sales team",
      whatsapp: "WhatsApp support",
      general: "General questions"
    },
    help: "Have another question? Our team is ready to help.",
    footer: {
      home: "Home",
      countries: "Countries",
      contact: "Contact"
    }
  },
  fr: {
    notice:
      "Chers utilisateurs de RobotPay, si vous avez besoin d’aide, vous pouvez contacter les services suivants.",
    channelsLabel: "Coordonnées de RobotPay",
    channels: {
      account: "Ouvrir un compte",
      sales: "Service commercial",
      whatsapp: "Assistance WhatsApp",
      general: "Question générale"
    },
    help: "Vous avez d’autres questions ? Notre équipe reste à votre écoute.",
    footer: {
      home: "Accueil",
      countries: "Pays",
      contact: "Contact"
    }
  },
  zh: {
    notice: "RobotPay 用户可以通过以下方式联系相应团队。",
    channelsLabel: "RobotPay 联系方式",
    channels: {
      account: "开设账户",
      sales: "商务服务",
      whatsapp: "WhatsApp 支持",
      general: "一般咨询"
    },
    help: "还有其他问题？我们的团队随时为您提供帮助。",
    footer: {
      home: "首页",
      countries: "国家",
      contact: "联系"
    }
  }
};

export default function ContactPage() {
  const { language } = useLanguage();
  const current = copy[language] || copy.en;

  return (
    <div className="rp-contact-page">
      <Hero headerOnly />

      <main className="rp-contact-main">
        <div className="rp-contact-divider" aria-hidden="true" />

        <section className="rp-contact-content" aria-labelledby="rp-contact-title">
          <h1 className="rp-contact-wordmark" id="rp-contact-title">
            <span>ROBOT</span><strong>PAY</strong>
          </h1>

          <p className="rp-contact-notice">{current.notice}</p>

          <div
            className="rp-contact-list"
            role="list"
            aria-label={current.channelsLabel}
          >
            {contactChannels.map(({ key, href, value, external }) => (
              <div className="rp-contact-row" key={key} role="listitem">
                <strong className="rp-contact-label">
                  {current.channels[key]}
                </strong>
                <span className="rp-contact-colon" aria-hidden="true">:</span>
                <a
                  className="rp-contact-value"
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {value}
                </a>
              </div>
            ))}
          </div>

          <p className="rp-contact-help">{current.help}</p>
        </section>

        <div className="rp-contact-divider rp-contact-divider-bottom" aria-hidden="true" />
      </main>

      <footer className="rp-contact-footer">
        <span>© 2026 RobotPay</span>
        <nav aria-label={current.channelsLabel}>
          <Link to="/">{current.footer.home}</Link>
          <Link to="/countries">{current.footer.countries}</Link>
          <Link to="/contact">{current.footer.contact}</Link>
        </nav>
      </footer>
    </div>
  );
}
