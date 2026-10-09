import robotpayFooter from "../assets/robotpay-footer.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n.jsx";

import {
  ArrowUp,
  Globe,
  Mail,
} from "lucide-react";

const copy = {
  en: {
    description: "Payment infrastructure built for modern businesses across Africa.",
    platform: "Platform",
    services: "Services",
    api: "API",
    contact: "Contact",
    solutions: "Solutions",
    payin: "Payin",
    payout: "Payout",
    paymentLinks: "Payment Links",
    international: "International platform",
    rights: "All rights reserved.",
    backToTop: "Back to top"
  },
  fr: {
    description: "Une infrastructure de paiement conçue pour les entreprises modernes en Afrique.",
    platform: "Plateforme",
    services: "Services",
    api: "API",
    contact: "Contact",
    solutions: "Solutions",
    payin: "Encaissement",
    payout: "Versement",
    paymentLinks: "Liens de paiement",
    international: "Plateforme internationale",
    rights: "Tous droits réservés.",
    backToTop: "Retour en haut"
  },
  zh: {
    description: "为非洲现代企业打造的支付基础设施。",
    platform: "平台",
    services: "服务",
    api: "API",
    contact: "联系",
    solutions: "解决方案",
    payin: "收款",
    payout: "付款",
    paymentLinks: "支付链接",
    international: "国际平台",
    rights: "版权所有。",
    backToTop: "返回顶部"
  }
};

export default function Footer() {
  const { language } = useLanguage();
  const current = copy[language] || copy.en;

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="rp-footer">

      <div className="rp-footer-inner">

        <div className="rp-footer-main">

          <div className="rp-footer-brand">

            <a href="#" className="rp-footer-logo">
              <img src={robotpayFooter} alt="RobotPay" />
            </a>

            <p>
              {current.description}
            </p>

          </div>

          <div className="rp-footer-links">

            <div>
               <h4>{current.platform}</h4>
               <a href="#services">{current.services}</a>
               <a href="#developers">{current.api}</a>
               <Link to="/contact">{current.contact}</Link>
            </div>

            <div>
               <h4>{current.solutions}</h4>
               <a href="#services">{current.payin}</a>
               <a href="#services">{current.payout}</a>
               <a href="#services">{current.paymentLinks}</a>
            </div>

            <div>
               <h4>{current.contact}</h4>

              <Link to="/contact">
                <Mail size={14} />
                Hello@robotpay.com
              </Link>

              <Link to="/contact">
                <Globe size={14} />
                {current.international}
              </Link>
            </div>

          </div>

        </div>

        <div className="rp-footer-bottom">

          <span>
            © 2026 RobotPay. {current.rights}
          </span>

          <button
            className="rp-back-top"
            onClick={scrollTop}
            aria-label={current.backToTop}
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>

    </footer>
  );
}
