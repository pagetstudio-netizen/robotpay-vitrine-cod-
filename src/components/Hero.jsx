import { useState } from "react";
import { useLanguage } from "../i18n.jsx";
import {
  Menu,
  X,
  ArrowRight,
  CreditCard,
  Smartphone,
  Receipt
} from "lucide-react";

import supportImage from "../assets/account-support.jpeg";

export default function Hero() {
  const { language, changeLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageLabels = {
    en: "English",
    fr: "Français",
    zh: "中文"
  };

  const selectLanguage = (newLanguage) => {
    changeLanguage(newLanguage);
    setLanguageOpen(false);
  };

  return (
    <section className="robot-hero">

      {/* HEADER */}

      <header className="robot-topbar">

        <a href="#" className="robot-top-logo">
          <img
            src="https://res.cloudinary.com/fa719lho/image/upload/v1787668181/robotpay-logo_iaa0dj.jpg"
            alt="RobotPay"
          />
          <span>RobotPay</span>
        </a>

        <div className="robot-top-actions">

          <div className="robot-language-wrapper">

            <button
              className={`robot-language ${
                languageOpen ? "is-open" : ""
              }`}
              onClick={() => setLanguageOpen(!languageOpen)}
              aria-label="Select language"
              aria-expanded={languageOpen}
            >
              <span>{languageLabels[language]}</span>
              <span className="robot-language-arrow">⌄</span>
            </button>

            {languageOpen && (
              <div className="robot-language-dropdown">

                <button
                  className={language === "en" ? "active" : ""}
                  onClick={() => { changeLanguage("en"); setLanguageOpen(false); }}
                >
                  <span>🇬🇧</span>
                  English
                </button>

                <button
                  className={language === "fr" ? "active" : ""}
                  onClick={() => { changeLanguage("fr"); setLanguageOpen(false); }}
                >
                  <span>🇫🇷</span>
                  Français
                </button>

                <button
                  className={language === "zh" ? "active" : ""}
                  onClick={() => { changeLanguage("zh"); setLanguageOpen(false); }}
                >
                  <span>🇨🇳</span>
                  中文
                </button>

              </div>
            )}

          </div>

          <button
            className="robot-menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span>Menu</span>
            <Menu size={21} />
          </button>

        </div>

      </header>


      {/* MENU OVERLAY */}

      <div
        className={`robot-menu-overlay ${
          menuOpen ? "is-open" : ""
        }`}
      >

        <div className="robot-menu-blue"></div>

        <div className="robot-menu-panel">

          <div className="robot-menu-header">

            <span className="robot-menu-logo">
              <img src="https://res.cloudinary.com/fa719lho/image/upload/v1787668181/robotpay-logo_iaa0dj.jpg" alt="RobotPay" />
            </span>

            <button
              className="robot-menu-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <span>{t.close}</span>
              <X size={23} />
            </button>

          </div>


          <div className="robot-menu-content">

            <div className="robot-menu-label">
              {t.navigation}
            </div>

            <nav className="robot-menu-links">

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
              >
                <span>01</span>
                {t.solutions}
                <ArrowRight />
              </a>

              <a
                href="#payments"
                onClick={() => setMenuOpen(false)}
              >
                <span>02</span>
                {t.paymentNetwork}
                <ArrowRight />
              </a>

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
              >
                <span>03</span>
                {t.payinPayout}
                <ArrowRight />
              </a>

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
              >
                <span>04</span>
                {t.paymentLinks}
                <ArrowRight />
              </a>

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
              >
                <span>05</span>
                {t.apiSdk}
                <ArrowRight />
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                <span>06</span>
                {t.integrationSupport}
                <ArrowRight />
              </a>

            </nav>


            <button
              type="button"
              className="robot-menu-account"
              onClick={() => {
                setMenuOpen(false);
                setShowAccountModal(true);
              }}
            >
              <span>{t.openAccount}</span>

              <strong>
                <ArrowRight size={20} />
              </strong>
            </button>

          </div>


          <div className="robot-menu-footer">
            <span>{t.paymentInfrastructure}</span>
            <span>{t.builtModernAfrica}</span>
          </div>

        </div>

      </div>


      {/* HERO CONTENT */}

      <div className="robot-hero-content">

        <div className="robot-hero-text">

          <div className="robot-hero-label">
            {t.paymentInfrastructure}
          </div>

          <h1>
            {t.heroTitle}
            <br />
            <span>{t.heroTitleHighlight}</span>
          </h1>

          <p>
            {t.heroDescription}
          </p>


          {/* OPEN ACCOUNT */}

          <button
            type="button"
            className="robot-main-button robot-open-account"
            onClick={() => setShowAccountModal(true)}
          >

            <span>
              Open an account
            </span>

            <span className="robot-main-button-circle">
              <ArrowRight size={18} />
            </span>

          </button>


          <a
            href="#services"
            className="robot-hero-link"
          >
            {t.exploreSolutions}
          </a>

        </div>

      </div>


      {/* HERO VISUAL */}

      <div className="robot-hero-visual">

        <div className="robot-visual-glow"></div>


        <div className="robot-card robot-card-left">

          <Smartphone size={25} />

          <span>
            Mobile Money
          </span>

          <strong>
            + 25,000 XOF
          </strong>

        </div>


        <div className="robot-invoice">

          <div className="robot-invoice-top">

            <span>
              ROBOTPAY
            </span>

            <Receipt size={20} />

          </div>


          <div className="robot-invoice-title">
            PAYMENT
          </div>

          <div className="robot-invoice-line"></div>

          <div className="robot-invoice-line small"></div>


          <div className="robot-invoice-total">

            <span>
              Total
            </span>

            <strong>
              25,000 XOF
            </strong>

          </div>


          <div className="robot-invoice-button">
            Payment successful
          </div>

        </div>


        <div className="robot-card robot-card-right">

          <CreditCard size={24} />

          <span>
            Transaction
          </span>

          <strong>
            Completed ✓
          </strong>

        </div>

      </div>


      {/* ACCOUNT MODAL */}

      {showAccountModal && (

        <div
          className="robot-account-overlay"
          onClick={() => setShowAccountModal(false)}
        >

          <div
            className="robot-account-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              className="robot-account-close"
              onClick={() => setShowAccountModal(false)}
              aria-label="Close"
            >
              <X size={19} />
            </button>


            <img
              src={supportImage}
              alt="RobotPay support team"
              className="robot-account-image"
            />


            <div className="robot-telegram-icon">

              <svg
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="none"
              >

                <path
                  d="M21.5 3.5L18.3 20c-.24 1.17-.9 1.46-1.82.91l-5.02-3.7-2.42 2.33c-.27.27-.5.5-1.02.5l.36-5.12 9.32-8.42c.4-.36-.09-.56-.62-.2L5.55 13.2.58 11.65c-1.08-.34-1.1-1.08.23-1.57L20.2 2.46c.9-.33 1.69.2 1.3 1.04Z"
                  fill="currentColor"
                />

              </svg>

            </div>


            <div className="robot-account-modal-label">
              ROBOTPAY
            </div>


            <h2>
              Open an account
            </h2>


            <p className="robot-account-modal-subtitle">
              Ready to start accepting payments?
            </p>


            <p className="robot-account-modal-description">
              Contact our team on Telegram to open your
              RobotPay merchant account and get started.
            </p>


            <a
              href="https://t.me/geeorbotpay"
              target="_blank"
              rel="noopener noreferrer"
              className="robot-telegram-button"
            >

              <svg
                viewBox="0 0 24 24"
                width="21"
                height="21"
                fill="none"
              >

                <path
                  d="M21.5 3.5L18.3 20c-.24 1.17-.9 1.46-1.82.91l-5.02-3.7-2.42 2.33c-.27.27-.5.5-1.02.5l.36-5.12 9.32-8.42c.4-.36-.09-.56-.62-.2L5.55 13.2.58 11.65c-1.08-.34-1.1-1.08.23-1.57L20.2 2.46c.9-.33 1.69.2 1.3 1.04Z"
                  fill="currentColor"
                />

              </svg>

              <span>
                Continue on Telegram
              </span>

              <ArrowRight size={18} />

            </a>


            <div className="robot-account-secure">

              <span>
                ●
              </span>

              Secure contact with RobotPay

            </div>

          </div>

        </div>

      )}

    </section>
  );
}
