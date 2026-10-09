import {
  ArrowUpRight,
  Briefcase,
  Mail,
  MessageCircle,
  UserRound
} from "lucide-react";
import { useLanguage } from "../i18n.jsx";
import Footer from "./Footer";
import Hero from "./Hero";
import "./ContactPage.css";

const contactChannels = [
  {
    key: "account",
    href: "https://t.me/geeorbotpay",
    value: "t.me/geeorbotpay",
    icon: UserRound,
    external: true
  },
  {
    key: "sales",
    href: "https://t.me/Atfchalvt",
    value: "t.me/Atfchalvt",
    icon: Briefcase,
    external: true
  },
  {
    key: "whatsapp",
    href: "https://wa.me/639609010279",
    value: "+63 960 901 0279",
    icon: MessageCircle,
    external: true
  },
  {
    key: "general",
    href: "mailto:finaceswei@westpay.cfd",
    value: "finaceswei@westpay.cfd",
    icon: Mail,
    external: false
  }
];

const copy = {
  en: {
    eyebrow: "CONTACT ROBOTPAY",
    title: "How can we help?",
    description:
      "Choose the right team for your question. We’ll help you take the next step with RobotPay.",
    notice:
      "For account opening, sales enquiries, WhatsApp assistance or general questions, contact us through the channel that suits you.",
    channelsLabel: "CONTACT CHANNELS",
    channels: {
      account: "Open an account",
      sales: "Sales team",
      whatsapp: "WhatsApp support",
      general: "General questions"
    },
    action: "Contact"
  },
  fr: {
    eyebrow: "CONTACT ROBOTPAY",
    title: "Comment pouvons-nous vous aider ?",
    description:
      "Choisissez le bon service pour votre demande. Notre équipe vous accompagne dans la prochaine étape avec RobotPay.",
    notice:
      "Pour ouvrir un compte, contacter le service commercial, obtenir de l’aide sur WhatsApp ou poser une question générale, choisissez le canal adapté.",
    channelsLabel: "NOS CONTACTS",
    channels: {
      account: "Ouvrir un compte",
      sales: "Service commercial",
      whatsapp: "Assistance WhatsApp",
      general: "Question générale"
    },
    action: "Contacter"
  },
  zh: {
    eyebrow: "联系 ROBOTPAY",
    title: "我们能为您提供什么帮助？",
    description: "选择合适的团队，了解如何开始使用 RobotPay。",
    notice: "您可以通过以下渠道联系开户、商务、WhatsApp 支持或一般咨询团队。",
    channelsLabel: "联系渠道",
    channels: {
      account: "开设账户",
      sales: "商务服务",
      whatsapp: "WhatsApp 支持",
      general: "一般咨询"
    },
    action: "联系"
  }
};

export default function ContactPage() {
  const { language } = useLanguage();
  const current = copy[language] || copy.en;

  return (
    <div className="rp-contact-page">
      <Hero headerOnly />

      <main className="rp-contact-main">
        <section className="rp-contact-intro" aria-labelledby="rp-contact-title">
          <p className="rp-contact-eyebrow">{current.eyebrow}</p>
          <h1 id="rp-contact-title">{current.title}</h1>
          <p className="rp-contact-description">{current.description}</p>
        </section>

        <aside className="rp-contact-notice">
          <span className="rp-contact-notice-mark" aria-hidden="true" />
          <p>{current.notice}</p>
        </aside>

        <section className="rp-contact-options" aria-label={current.channelsLabel}>
          {contactChannels.map(({ key, href, value, icon: Icon, external }) => (
            <a
              className="rp-contact-option"
              href={href}
              key={key}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={`${current.channels[key]}: ${value}`}
            >
              <span className="rp-contact-option-icon" aria-hidden="true">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <span className="rp-contact-option-copy">
                <span className="rp-contact-option-label">
                  {current.channels[key]}
                </span>
                <strong>{value}</strong>
              </span>
              <ArrowUpRight
                className="rp-contact-option-arrow"
                size={19}
                aria-hidden="true"
              />
            </a>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
