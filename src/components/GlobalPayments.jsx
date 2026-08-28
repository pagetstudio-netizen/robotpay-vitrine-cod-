import { useLanguage } from "../i18n.jsx";

export default function GlobalPayments() {
  const { language } = useLanguage();

  const text = {
    en: {
      label: "PAYMENTS WITHOUT BORDERS",
      title: <>Built for<br /><span>modern Africa.</span></>,
      description:
        "Connect your business to payment infrastructure designed for the realities of African markets and the businesses building across them.",
      api: "Unified API",
      currency: "Local currency",
      infrastructure: "Infrastructure",
      network: "PAYMENT NETWORK",
      connected: "CONNECTED"
    },

    fr: {
      label: "PAIEMENTS SANS FRONTIÈRES",
      title: <>Conçu pour<br /><span>l'Afrique moderne.</span></>,
      description:
        "Connectez votre entreprise à une infrastructure de paiement conçue pour les réalités des marchés africains et les entreprises qui y développent leurs activités.",
      api: "API unifiée",
      currency: "Devise locale",
      infrastructure: "Infrastructure",
      network: "RÉSEAU DE PAIEMENT",
      connected: "CONNECTÉ"
    },

    zh: {
      label: "无国界支付",
      title: <>为<br /><span>现代非洲而打造。</span></>,
      description:
        "将您的企业连接到专为非洲市场实际需求以及当地企业发展而设计的支付基础设施。",
      api: "统一 API",
      currency: "本地货币",
      infrastructure: "基础设施",
      network: "支付网络",
      connected: "已连接"
    }
  };

  const current = text[language] || text.en;

  return (
    <section className="global-section section">

      <div className="global-visual">

        <div className="world-card">

          <div className="world-grid" />

          <div className="map-line line-a" />
          <div className="map-line line-b" />
          <div className="map-line line-c" />

          <div className="map-point point-a">
            <span />
            <b>TOGO</b>
          </div>

          <div className="map-point point-b">
            <span />
            <b>GHANA</b>
          </div>

          <div className="map-point point-c">
            <span />
            <b>NIGERIA</b>
          </div>

          <div className="map-center">
            <div>R</div>
          </div>

          <div className="map-label">
            <span>{current.network}</span>
            <strong>{current.connected}</strong>
          </div>

        </div>

      </div>

      <div className="global-copy">

        <span className="section-label">
          {current.label}
        </span>

        <h2>
          {current.title}
        </h2>

        <p>
          {current.description}
        </p>

        <div className="country-stats">

          <div>
            <strong>01</strong>
            <span>{current.api}</span>
          </div>

          <div>
            <strong>XOF</strong>
            <span>{current.currency}</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>{current.infrastructure}</span>
          </div>

        </div>

      </div>

    </section>
  );
}
