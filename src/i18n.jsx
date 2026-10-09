import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    language: "English",
    menu: "Menu",
    close: "Close",
    navigation: "NAVIGATION",
    solutions: "Solutions",
    paymentNetwork: "Payment Network",
    payinPayout: "Payin & Payout",
    paymentLinks: "Payment Links",
    apiSdk: "API & SDK",
    integrationSupport: "Support & Integration",
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
    payinPayout: "Payin & Payout",
    paymentLinks: "Liens de paiement",
    apiSdk: "API & SDK",
    integrationSupport: "Assistance et intégration",
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
    payinPayout: "收款与付款",
    paymentLinks: "支付链接",
    apiSdk: "API 与 SDK",
    integrationSupport: "集成与支持",
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

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("robotpay-language") || "en"
  );

  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

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
