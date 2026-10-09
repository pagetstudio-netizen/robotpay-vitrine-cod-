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
import { operatorSlugByMethod, paymentMarkets } from "../data/paymentMarkets.js";
import { getSeoPath } from "../data/seoRoutes.js";

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

const flags = {
  tg,
  bj,
  bf,
  cm,
  cg,
  ga,
  ci,
  ml,
  sn,
  gn,
  cd,
  gh,
  ne,
  ke,
  ng,
  eg,
  pk,
  in: inFlag,
  ph
};

function countryPath(language, slug) {
  return getSeoPath(language, "country", slug);
}

function operatorPath(language, slug) {
  return getSeoPath(language, "operator", slug);
}

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

        {paymentMarkets.map((country) => (
          <div className="rp-country-card" key={country.slug}>

            <div className="rp-country-top">

              <div className="rp-country-name">

                <img
                  src={flags[country.flagCode]}
                  alt={`${country.name[language] || country.name.en} ${current.flag}`}
                  className="rp-country-flag"
                />

                <div>
                  <h3>
                    <a
                      href={countryPath(language, country.slug)}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {country.name[language] || country.name.en}
                    </a>
                  </h3>
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
                  <b key={method}>
                    {operatorSlugByMethod[method] ? (
                      <a
                        href={operatorPath(language, operatorSlugByMethod[method])}
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {current.methodNames[method] || method}
                      </a>
                    ) : (
                      current.methodNames[method] || method
                    )}
                  </b>
                ))}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
