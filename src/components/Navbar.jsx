import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="rp-header">

      <a href="/" className="rp-header-logo">
        ROBOT<span>PAY</span>
      </a>

      <div className="rp-header-right">

        <button className="rp-language">
          EN
        </button>

        <button className="rp-menu" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </header>
  );
}
