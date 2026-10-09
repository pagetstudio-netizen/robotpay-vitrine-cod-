import tg from "../assets/flags/tg.svg";
import bj from "../assets/flags/bj.svg";
import bf from "../assets/flags/bf.svg";
import cm from "../assets/flags/cm.svg";
import cg from "../assets/flags/cg.svg";
import ga from "../assets/flags/ga.svg";
import ci from "../assets/flags/ci.svg";
import ml from "../assets/flags/ml.svg";
import sn from "../assets/flags/sn.svg";
import gn from "../assets/flags/gn.svg";
import cd from "../assets/flags/cd.svg";
import gh from "../assets/flags/gh.svg";
import ne from "../assets/flags/ne.svg";
import ke from "../assets/flags/ke.svg";
import ng from "../assets/flags/ng.svg";
import eg from "../assets/flags/eg.svg";
import pk from "../assets/flags/pk.svg";
import inFlag from "../assets/flags/in.svg";
import ph from "../assets/flags/ph.svg";
import { useLanguage } from "../i18n.jsx";

const countries = [
  { flag: tg, name: { en: "Togo", fr: "Togo", zh: "多哥" }, code: "+228", methods: ["Moov Money", "TMoney", "Visa / Mastercard"] },
  { flag: bj, name: { en: "Benin", fr: "Bénin", zh: "贝宁" }, code: "+229", methods: ["MTN Mobile Money", "Moov Africa"] },
  { flag: bf, name: { en: "Burkina Faso", fr: "Burkina Faso", zh: "布基纳法索" }, code: "+226", methods: ["Moov Money", "Orange Money"] },
  { flag: cm, name: { en: "Cameroon", fr: "Cameroun", zh: "喀麦隆" }, code: "+237", methods: ["MTN Mobile Money", "Orange Money"] },
  { flag: cg, name: { en: "Congo Brazzaville", fr: "Congo-Brazzaville", zh: "刚果（布）" }, code: "+242", methods: ["MTN Mobile Money", "Airtel Money"] },
  { flag: ga, name: { en: "Gabon", fr: "Gabon", zh: "加蓬" }, code: "+241", methods: ["Airtel Money", "Moov Money"] },
  { flag: ci, name: { en: "Côte d’Ivoire", fr: "Côte d’Ivoire", zh: "科特迪瓦" }, code: "+225", methods: ["Moov Money", "MTN", "Orange Money", "Wave"] },
  { flag: ml, name: { en: "Mali", fr: "Mali", zh: "马里" }, code: "+223", methods: ["Orange Money", "Moov Africa"] },
  { flag: sn, name: { en: "Senegal", fr: "Sénégal", zh: "塞内加尔" }, code: "+221", methods: ["Mixx by Yas", "Orange Money", "Wave", "Free Money"] },
  { flag: gn, name: { en: "Guinea", fr: "Guinée", zh: "几内亚" }, code: "+224", methods: ["Orange Money", "MTN Mobile Money"] },
  { flag: cd, name: { en: "DRC", fr: "RDC", zh: "刚果（金）" }, code: "+243", methods: ["M-Pesa", "Airtel Money", "Orange Money"] },
  { flag: gh, name: { en: "Ghana", fr: "Ghana", zh: "加纳" }, code: "+233", methods: ["MTN Mobile Money", "Vodafone Cash", "AirtelTigo"] },
  { flag: ne, name: { en: "Niger", fr: "Niger", zh: "尼日尔" }, code: "+227", methods: ["Airtel Money", "Moov Africa"] },
  { flag: ke, name: { en: "Kenya", fr: "Kenya", zh: "肯尼亚" }, code: "+254", methods: ["M-Pesa", "Airtel Money"] },
  { flag: ng, name: { en: "Nigeria", fr: "Nigeria", zh: "尼日利亚" }, code: "+234", methods: ["Bank Transfer", "Cards", "USSD"] },
  { flag: eg, name: { en: "Egypt", fr: "Égypte", zh: "埃及" }, code: "+20", methods: ["Cards", "Mobile Wallets", "Bank Transfer"] },
  { flag: pk, name: { en: "Pakistan", fr: "Pakistan", zh: "巴基斯坦" }, code: "+92", methods: ["JazzCash", "Easypaisa", "Cards"] },
  { flag: inFlag, name: { en: "India", fr: "Inde", zh: "印度" }, code: "+91", methods: ["UPI", "Cards", "Net Banking"] },
  { flag: ph, name: { en: "Philippines", fr: "Philippines", zh: "菲律宾" }, code: "+63", methods: ["GCash", "Maya", "Cards"] }
];

const copy = {
  en: {
    eyebrow: "COUNTRY COVERAGE",
    heading: "Connected across",
    highlight: "Africa & beyond.",
    description:
      "Our network is constantly expanding, allowing you to accept payments across multiple markets through the local payment methods your customers already use.",
    active: "Active",
    methods: "Payment methods",
    flag: "flag",
    methodNames: {}
  },
  fr: {
    eyebrow: "COUVERTURE GÉOGRAPHIQUE",
    heading: "Un réseau présent en",
    highlight: "Afrique et au-delà.",
    description:
      "Notre réseau s’étend continuellement et vous permet d’accepter des paiements sur plusieurs marchés grâce aux moyens de paiement locaux utilisés par vos clients.",
    active: "Actif",
    methods: "Moyens de paiement",
    flag: "drapeau",
    methodNames: {
      "Bank Transfer": "Virement bancaire",
      Cards: "Cartes",
      "Mobile Wallets": "Portefeuilles mobiles",
      "Net Banking": "Banque en ligne"
    }
  },
  zh: {
    eyebrow: "国家覆盖",
    heading: "连接非洲",
    highlight: "以及更多地区。",
    description:
      "我们的网络不断扩展，让您可以通过客户熟悉的本地支付方式，在多个市场收款。",
    active: "已开通",
    methods: "支付方式",
    flag: "国旗",
    methodNames: {
      "Bank Transfer": "银行转账",
      Cards: "银行卡",
      "Mobile Wallets": "移动钱包",
      "Net Banking": "网上银行"
    }
  }
};

export default function Countries() {
  const { language } = useLanguage();
  const current = copy[language] || copy.en;

  return (
    <section className="rp-countries" id="countries">

      <div className="rp-countries-heading">
        <span>{current.eyebrow}</span>

        <h2>
          {current.heading}
          <br />
          <strong>{current.highlight}</strong>
        </h2>

        <p>{current.description}</p>
      </div>

      <div className="rp-country-grid">

        {countries.map((country) => (
          <div className="rp-country-card" key={country.name}>

            <div className="rp-country-top">

              <div className="rp-country-name">

                <img
                  src={country.flag}
                  alt={`${country.name[language] || country.name.en} ${current.flag}`}
                  className="rp-country-flag"
                />

                <div>
                  <h3>{country.name[language] || country.name.en}</h3>
                  <small>{country.code}</small>
                </div>

              </div>

              <span className="rp-active">
                {current.active}
              </span>

            </div>

            <div className="rp-country-methods">

              <span>{current.methods}</span>

              <div>
                {country.methods.map((method) => (
                  <b key={method}>{current.methodNames[method] || method}</b>
                ))}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
