import robotpayFooter from "../assets/robotpay-footer.png";

import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin
} from "lucide-react";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="rp-footer">

      <div className="rp-footer-inner">

        <div className="rp-footer-main">

          <div className="rp-footer-brand">

            <a href="#" className="rp-footer-logo">
              <img src={robotpayFooter} alt="RobotPay" />
            </a>

            <p>
              Payment infrastructure built for
              modern businesses across Africa.
            </p>

          </div>

          <div className="rp-footer-links">

            <div>
              <h4>Platform</h4>
              <a href="#services">Services</a>
              <a href="#developers">API</a>
              <a href="#contact">Contact</a>
            </div>

            <div>
              <h4>Solutions</h4>
              <a href="#services">Payin</a>
              <a href="#services">Payout</a>
              <a href="#services">Payment Links</a>
            </div>

            <div>
              <h4>Contact</h4>

              <a href="mailto:hello@robotpay.com">
                <Mail size={14} />
                hello@robotpay.com
              </a>

              <a href="#contact">
                <MapPin size={14} />
                Africa
              </a>
            </div>

          </div>

        </div>

        <div className="rp-footer-bottom">

          <span>
            © 2026 RobotPay. All rights reserved.
          </span>

          <button
            className="rp-back-top"
            onClick={scrollTop}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>

    </footer>
  );
}
