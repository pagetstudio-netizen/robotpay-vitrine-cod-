import { FaMobileAlt, FaCreditCard } from "react-icons/fa";

import { useLanguage } from "../i18n.jsx";
import paymentsHero from "../../attached_assets/payboxbusiness-S_1791569156861.png";

import tg from "../assets/flags/tg.svg";
import bj from "../assets/flags/bj.svg";
import ci from "../assets/flags/ci.svg";
import bf from "../assets/flags/bf.svg";
import sn from "../assets/flags/sn.svg";
import ml from "../assets/flags/ml.svg";
import ne from "../assets/flags/ne.svg";
import ke from "../assets/flags/ke.svg";
import gh from "../assets/flags/gh.svg";
import cd from "../assets/flags/cd.svg";
import cg from "../assets/flags/cg.svg";
import cm from "../assets/flags/cm.svg";
import ng from "../assets/flags/ng.svg";
import ph from "../assets/flags/ph.svg";
import inFlag from "../assets/flags/in.svg";
import pk from "../assets/flags/pk.svg";
import eg from "../assets/flags/eg.svg";

const countries = [
  { name: "Togo", flag: tg },
  { name: "Benin", flag: bj },
  { name: "Côte d'Ivoire", flag: ci },
  { name: "Burkina Faso", flag: bf },
  { name: "Senegal", flag: sn },
  { name: "Mali", flag: ml },
  { name: "Niger", flag: ne },
  { name: "Kenya", flag: ke },
  { name: "Ghana", flag: gh },
  { name: "DR Congo", flag: cd },
  { name: "Congo", flag: cg },
  { name: "Cameroon", flag: cm },
  { name: "Nigeria", flag: ng },
  { name: "Philippines", flag: ph },
  { name: "India", flag: inFlag },
  { name: "Pakistan", flag: pk },
  { name: "Egypt", flag: eg }
];

export default function PaymentMethods() {
  const { language } = useLanguage();

  const text = {
    en: {
      label: "PAYMENT NETWORK",
      title: <>One platform.<br /><span>Multiple networks.</span></>,
      intro: "Connect your business to payment networks across Africa and global emerging markets.",
      countries: "Countries",
      countryCoverage: "Countries supported",
      operators: "Operators",
      mobile: "Mobile Money",
      cards: "Cards",
      view: "View all countries"
    },

    fr: {
      label: "RÉSEAU DE PAIEMENT",
      title: <>Une plateforme.<br /><span>Plusieurs réseaux.</span></>,
      intro: "Connectez votre entreprise aux réseaux de paiement en Afrique et sur les marchés émergents mondiaux.",
      countries: "Pays",
      countryCoverage: "Pays pris en charge",
      operators: "Opérateurs",
      mobile: "Mobile Money",
      cards: "Cartes",
      view: "Voir tous les pays"
    },

    zh: {
      label: "支付网络",
      title: <>一个平台。<br /><span>多个支付网络。</span></>,
      intro: "将您的企业连接到非洲及全球新兴市场的支付网络。",
      countries: "国家",
      countryCoverage: "支持的国家",
      operators: "运营商",
      mobile: "移动支付",
      cards: "银行卡",
      view: "查看所有国家"
    }
  };

  const current = text[language] || text.en;

  return (
    <section
      className="rp-payments rp-payments-hero"
      id="payments"
      style={{ "--rp-payments-hero-image": `url("${paymentsHero}")` }}
    >

      <div className="rp-payments-inner">

        <div className="rp-section-label">
          {current.label}
        </div>

        <h2>
          {current.title}
        </h2>

        <p className="rp-payments-intro">
          {current.intro}
        </p>

        <div className="rp-network-stats">

          <div className="rp-network-stat">
            <strong>17</strong>
            <span>{current.countries}</span>
          </div>

          <div className="rp-network-stat">
            <strong>30+</strong>
            <span>{current.operators}</span>
          </div>

        </div>

        <div
          className="rp-network-country-grid"
          aria-label={current.countryCoverage}
        >
          {countries.map((country) => (
            <div className="rp-network-country" key={country.name}>
              <img
                src={country.flag}
                alt={`${country.name} flag`}
              />
              <span>{country.name}</span>
            </div>
          ))}
        </div>

        <div className="rp-network-note">

          <FaMobileAlt />
          <span>{current.mobile}</span>

          <i></i>

          <FaCreditCard />
          <span>{current.cards}</span>

        </div>

        <a
          href="/countries"
          className="rp-view-countries"
        >
          {current.view}
          <span>→</span>
        </a>

      </div>

    </section>
  );
}
