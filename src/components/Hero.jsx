import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n.jsx";
import { getSeoPath } from "../data/seoRoutes.js";
import {
  Menu,
  X,
  ArrowRight,
  CreditCard,
  Smartphone,
  Receipt
} from "lucide-react";

export default function Hero({ headerOnly = false }) {
  const { language, changeLanguage, t } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const sectionHref = (section) =>
    `${location.pathname === "/" ? "" : "/"}#${section}`;
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
    <section
      className={`robot-hero ${
        headerOnly ? "robot-hero-header-only" : ""
      }`}
    >

      {/* HEADER */}

      <header className="robot-topbar">

        <Link to="/" className="robot-top-logo">
          <img
            src="https://res.cloudinary.com/fa719lho/image/upload/v1787668181/robotpay-logo_iaa0dj.jpg"
            alt="RobotPay"
          />
          <span>RobotPay</span>
        </Link>

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
                  onClick={() => selectLanguage("en")}
                >
                  <span>🇬🇧</span>
                  English
                </button>

                <button
                  className={language === "fr" ? "active" : ""}
                  onClick={() => selectLanguage("fr")}
                >
                  <span>🇫🇷</span>
                  Français
                </button>

                <button
                  className={language === "zh" ? "active" : ""}
                  onClick={() => selectLanguage("zh")}
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
            aria-expanded={menuOpen}
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
                href={sectionHref("services")}
                onClick={() => setMenuOpen(false)}
              >
                <span>01</span>
                {t.solutions}
                <ArrowRight />
              </a>

              <a
                href={sectionHref("payments")}
                onClick={() => setMenuOpen(false)}
              >
                <span>02</span>
                {t.paymentNetwork}
                <ArrowRight />
              </a>

              <a
                href={sectionHref("services")}
                onClick={() => setMenuOpen(false)}
              >
                <span>03</span>
                {t.paymentLinks}
                <ArrowRight />
              </a>

              <a
                href={getSeoPath(language, "feature", "merchant-integration")}
                onClick={() => setMenuOpen(false)}
              >
                <span>04</span>
                {t.apiSdk}
                <ArrowRight />
              </a>

              <a href={getSeoPath(language, "countries")} onClick={() => setMenuOpen(false)}>
                <span>05</span>
                {t.countries}
                <ArrowRight />
              </a>

              <a href={getSeoPath(language, "operators")} onClick={() => setMenuOpen(false)}>
                <span>06</span>
                {t.operators}
                <ArrowRight />
              </a>

              <a
                href={getSeoPath(language, "contact")}
                onClick={() => setMenuOpen(false)}
              >
                <span>07</span>
                {t.integrationSupport}
                <ArrowRight />
              </a>

              <a
                href={getSeoPath(language, "about")}
                onClick={() => setMenuOpen(false)}
              >
                <span>08</span>
                {t.about}
                <ArrowRight />
              </a>

            </nav>


            <a
              href={getSeoPath(language, "contact")}
              className="robot-menu-account"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <span>{t.openAccount}</span>

              <strong>
                <ArrowRight size={20} />
              </strong>
            </a>

          </div>


          <div className="robot-menu-footer">
            <span>{t.paymentInfrastructure}</span>
            <span>{t.builtModernAfrica}</span>
          </div>

        </div>

      </div>


      {!headerOnly && (
        <>
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

          <a
            href={getSeoPath(language, "contact")}
            className="robot-main-button robot-open-account"
          >

            <span>
              {t.openAccount}
            </span>

            <span className="robot-main-button-circle">
              <ArrowRight size={18} />
            </span>

          </a>


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
        </>
      )}

    </section>
  );
}
