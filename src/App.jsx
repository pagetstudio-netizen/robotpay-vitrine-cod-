import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import PaymentMethods from "./components/PaymentMethods";
import PaymentSolutions from "./components/PaymentSolutions";
import SendReceivePayments from "./components/SendReceivePayments";
import PaymentFeaturePage from "./components/PaymentFeaturePage";
import Infrastructure from "./components/Infrastructure";
import GameApiSection from "./components/GameApiSection";
import RobotPayAdoptionSection from "./components/RobotPayAdoptionSection";
import Footer from "./components/Footer";
import Countries from "./components/Countries";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import { LanguageProvider } from "./i18n";

function Home() {
  return (
    <>
      <main>
        <Hero />
        <Solutions />
        <PaymentMethods />
        <PaymentSolutions />
        <SendReceivePayments />
        <Infrastructure />
        <GameApiSection />
        <RobotPayAdoptionSection />
      </main>
      <Footer />
    </>
  );
}

function CountriesPage() {
  return (
    <>
      <Hero headerOnly />
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/features/:slug" element={<PaymentFeaturePage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
