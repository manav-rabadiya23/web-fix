import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactSection from "./components/sections/ContactSection";
import AboutSection from "./components/sections/AboutSection";
import InternshipSection from "./components/sections/InternshipSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import TeamSection from "./components/sections/TeamSection";
import ScrollToTop from "./components/ScrollToTop";
import PolicyPage from "./components/sections/PolicyPage";
import InternshipApplySection from "./components/sections/InternshipApplySection";

export default function App() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);

    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // Theme still updates even when browser storage is unavailable.
    }
  }, [dark]);

  return (
    <div className="flex min-h-screen flex-col bg-white pt-[calc(56px+env(safe-area-inset-top))] text-slate-950 transition-colors duration-300 dark:bg-[#050816] dark:text-white sm:pt-[calc(64px+env(safe-area-inset-top))] lg:pt-[calc(72px+env(safe-area-inset-top))]">
      <Header dark={dark} setDark={setDark} />

      <ScrollToTop />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/internship" element={<InternshipSection />} />
          <Route path="/portfolio" element={<PortfolioSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/team" element={<TeamSection />} />
          <Route
            path="/internship-apply"
            element={<InternshipApplySection />}
          />{" "}
          <Route
            path="/terms-and-conditions"
            element={<PolicyPage type="terms-and-conditions" />}
          />
          <Route
            path="/privacy-policy"
            element={<PolicyPage type="privacy-policy" />}
          />
          <Route
            path="/security-policy"
            element={<PolicyPage type="security-policy" />}
          />
          <Route
            path="/client-payment-policy"
            element={<PolicyPage type="client-payment-policy" />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
