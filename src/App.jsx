import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import PaymentMethods from "./components/PaymentMethods";
import PaymentSolutions from "./components/PaymentSolutions";
import Infrastructure from "./components/Infrastructure";
import Showcase from "./components/Showcase";
import GlobalPayments from "./components/GlobalPayments";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Countries from "./components/Countries";
import { LanguageProvider, useLanguage } from "./i18n";

function LanguageIntro() {
  const { changeLanguage } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Le site commence toujours en chinois
    changeLanguage("zh");

    // Attendre 7 secondes avant d'afficher l'animation
    const showTimer = setTimeout(() => {
      setShowPopup(true);
    }, 7000);

    // Après l'animation, revenir automatiquement en anglais
    const languageTimer = setTimeout(() => {
      changeLanguage("en");
      localStorage.setItem("robotpay-language", "en");
    }, 10500);

    // Retirer le popup après l'animation
    const hideTimer = setTimeout(() => {
      setShowPopup(false);
    }, 11000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(languageTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!showPopup) return null;

  return (
    <div className="rp-language-intro">
      <div className="rp-language-glow"></div>

      <div className="rp-language-popup">
        <div className="rp-language-logo-wrap">
          <img
            src="https://res.cloudinary.com/fa719lho/image/upload/v1787668181/robotpay-logo_iaa0dj.jpg"
            alt="WestPay"
          />
        </div>

        <div className="rp-language-line"></div>

        <div className="rp-language-text">
          <strong>WestPay</strong>
          <span>Switching language...</span>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <Hero />
        <Solutions />
        <PaymentMethods />
        <PaymentSolutions />
        <Infrastructure />
        <Showcase />
        <GlobalPayments />

        {/* =====================================
            ROBOTPAY SEO INTRODUCTION
        ===================================== */}
        <section className="rp-seo-section" aria-labelledby="robotpay-seo-title">
          <div className="rp-seo-inner">

            <span className="rp-section-label">
              ROBOTPAY
            </span>

            <h2 id="robotpay-seo-title">
              RobotPay — Payment Infrastructure for Africa
            </h2>

            <p>
              RobotPay utilise des robots intelligents pour détecter,
              vérifier et créditer automatiquement vos transactions en
              temps réel. Notre infrastructure permet aux entreprises
              d’accepter des paiements, d’effectuer des payouts et de
              connecter leurs activités à plusieurs réseaux de paiement
              en Afrique et sur les marchés émergents.
            </p>

          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

function CountriesPage() {
  return (
    <>
      <main>
        <Countries />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <LanguageIntro />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountriesPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
