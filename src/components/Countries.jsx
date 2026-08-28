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

const countries = [
  { flag: tg, name: "Togo", code: "+228", methods: ["Moov Money", "TMoney", "Visa / Mastercard"] },
  { flag: bj, name: "Benin", code: "+229", methods: ["MTN Mobile Money", "Moov Africa"] },
  { flag: bf, name: "Burkina Faso", code: "+226", methods: ["Moov Money", "Orange Money"] },
  { flag: cm, name: "Cameroon", code: "+237", methods: ["MTN Mobile Money", "Orange Money"] },
  { flag: cg, name: "Congo Brazzaville", code: "+242", methods: ["MTN Mobile Money", "Airtel Money"] },
  { flag: ga, name: "Gabon", code: "+241", methods: ["Airtel Money", "Moov Money"] },
  { flag: ci, name: "Côte d’Ivoire", code: "+225", methods: ["Moov Money", "MTN", "Orange Money", "Wave"] },
  { flag: ml, name: "Mali", code: "+223", methods: ["Orange Money", "Moov Africa"] },
  { flag: sn, name: "Senegal", code: "+221", methods: ["Mixx by Yas", "Orange Money", "Wave", "Free Money"] },
  { flag: gn, name: "Guinea", code: "+224", methods: ["Orange Money", "MTN Mobile Money"] },
  { flag: cd, name: "DRC", code: "+243", methods: ["M-Pesa", "Airtel Money", "Orange Money"] },
  { flag: gh, name: "Ghana", code: "+233", methods: ["MTN Mobile Money", "Vodafone Cash", "AirtelTigo"] },
  { flag: ne, name: "Niger", code: "+227", methods: ["Airtel Money", "Moov Africa"] },
  { flag: ke, name: "Kenya", code: "+254", methods: ["M-Pesa", "Airtel Money"] },
  { flag: ng, name: "Nigeria", code: "+234", methods: ["Bank Transfer", "Cards", "USSD"] },
  { flag: eg, name: "Egypt", code: "+20", methods: ["Cards", "Mobile Wallets", "Bank Transfer"] },
  { flag: pk, name: "Pakistan", code: "+92", methods: ["JazzCash", "Easypaisa", "Cards"] },
  { flag: inFlag, name: "India", code: "+91", methods: ["UPI", "Cards", "Net Banking"] },
  { flag: ph, name: "Philippines", code: "+63", methods: ["GCash", "Maya", "Cards"] }
];

export default function Countries() {
  return (
    <section className="rp-countries" id="countries">

      <div className="rp-countries-heading">
        <span>COUNTRY COVERAGE</span>

        <h2>
          Connected across
          <br />
          <strong>Africa & beyond.</strong>
        </h2>

        <p>
          Our network is constantly expanding, allowing you to accept
          payments across multiple markets through the local payment
          methods your customers already use.
        </p>
      </div>

      <div className="rp-country-grid">

        {countries.map((country) => (
          <div className="rp-country-card" key={country.name}>

            <div className="rp-country-top">

              <div className="rp-country-name">

                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="rp-country-flag"
                />

                <div>
                  <h3>{country.name}</h3>
                  <small>{country.code}</small>
                </div>

              </div>

              <span className="rp-active">
                Active
              </span>

            </div>

            <div className="rp-country-methods">

              <span>Payment methods</span>

              <div>
                {country.methods.map((method) => (
                  <b key={method}>{method}</b>
                ))}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
