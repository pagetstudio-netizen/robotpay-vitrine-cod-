import { createContext, useContext, useEffect, useState } from "react";

const translations = {
  en: {
    language: "English",
    menu: "Menu",
    close: "Close",
    navigation: "NAVIGATION",
    solutions: "Solutions",
    paymentNetwork: "Payment Network",
    paymentLinks: "Payment Links",
    countries: "Countries",
    operators: "Payment operators",
    apiSdk: "API & SDK",
    integrationSupport: "Support & Integration",
    about: "About RobotPay",
    openAccount: "Open an account",
    paymentInfrastructure: "PAYMENT INFRASTRUCTURE",
    heroTitle: "Payments that are",
    heroTitleHighlight: "simple for everyone.",
    heroDescription:
      "Accept payments, send payouts and connect your business to powerful payment networks across Africa.",
    exploreSolutions: "Explore our solutions",
    builtModernAfrica: "Built for modern Africa."
  },

  fr: {
    language: "Français",
    menu: "Menu",
    close: "Fermer",
    navigation: "NAVIGATION",
    solutions: "Solutions",
    paymentNetwork: "Réseau de paiement",
    paymentLinks: "Liens de paiement",
    countries: "Pays",
    operators: "Opérateurs de paiement",
    apiSdk: "API & SDK",
    integrationSupport: "Assistance et intégration",
    about: "À propos",
    openAccount: "Ouvrir un compte",
    paymentInfrastructure: "INFRASTRUCTURE DE PAIEMENT",
    heroTitle: "Les paiements",
    heroTitleHighlight: "simples pour tous.",
    heroDescription:
      "Acceptez les paiements, effectuez des payouts et connectez votre entreprise aux principaux réseaux de paiement en Afrique.",
    exploreSolutions: "Découvrir nos solutions",
    builtModernAfrica: "Conçu pour l'Afrique moderne."
  },

  zh: {
    language: "中文",
    menu: "菜单",
    close: "关闭",
    navigation: "导航",
    solutions: "解决方案",
    paymentNetwork: "支付网络",
    paymentLinks: "支付链接",
    countries: "国家",
    operators: "支付运营商",
    apiSdk: "API 与 SDK",
    integrationSupport: "集成与支持",
    about: "关于 RobotPay",
    openAccount: "开设账户",
    paymentInfrastructure: "支付基础设施",
    heroTitle: "让支付变得",
    heroTitleHighlight: "简单易用。",
    heroDescription:
      "接受付款、发送付款，并将您的业务连接到非洲强大的支付网络。",
    exploreSolutions: "探索我们的解决方案",
    builtModernAfrica: "为现代非洲而打造。"
  }
};

const pageMeta = {
  en: {
    title: "RobotPay | International payment APIs and services",
    description:
      "RobotPay aggregates payment technology and provides APIs and online and offline services for platforms, with USDT and D0 payments.",
    locale: "en_US"
  },
  fr: {
    title: "RobotPay | API et solutions de paiement internationales",
    description:
      "RobotPay agrège des technologies de paiement et propose des API et services en ligne et hors ligne aux plateformes, avec des paiements en USDT et D0.",
    locale: "fr_FR"
  },
  zh: {
    title: "RobotPay — 国际支付技术聚合平台",
    description:
      "RobotPay 是一家国际支付技术聚合平台，为各类平台提供支付 API 和多种线上及线下服务，并支持 USDT 和 D0 支付。",
    locale: "zh_CN"
  }
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("robotpay-language") || "fr"
  );

  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : language;

    const meta = pageMeta[language] || pageMeta.en;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", meta.locale);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", meta.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", meta.description);
  }, [language]);

  const changeLanguage = (newLanguage) => {
    if (!newLanguage || newLanguage === language) return;

    setIsChangingLanguage(true);

    setTimeout(() => {
      setLanguage(newLanguage);
      localStorage.setItem("robotpay-language", newLanguage);

      setTimeout(() => {
        setIsChangingLanguage(false);
      }, 450);
    }, 650);
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
        isChangingLanguage
      }}
    >
      {children}

      {isChangingLanguage && (
        <div className="rp-language-loading">
          <div className="rp-language-loading-card">

            <div className="rp-language-loading-logo">
              <img
                src="https://res.cloudinary.com/fa719lho/image/upload/v1787668181/robotpay-logo_iaa0dj.jpg"
                alt="RobotPay"
              />
            </div>

            <div className="rp-language-spinner"></div>

            <span>Changing language...</span>

          </div>
        </div>
      )}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}
