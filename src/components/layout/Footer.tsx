import { Mail } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Internship", to: "/internship" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Our Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

const policies = [
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Security Policy", to: "/security-policy" },
  { label: "Client & Payment Policy", to: "/client-payment-policy" },
];

const services = [
  "Web Development",
  "AI Solutions",
  "Google Business Profile",
  "Local SEO",
  "Mobile Apps",
  "Prompt Engineering",
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (to: string) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(to);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-br from-white via-[#f8fbff] to-[#eef7ff] text-slate-700 dark:border-white/10 dark:from-[#050816] dark:via-[#07101d] dark:to-[#050816] dark:text-white">
      {/* TOP LINE */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

      {/* BG EFFECT */}
      <div className="absolute -right-24 bottom-0 h-44 w-44 rounded-full bg-cyan-100/60 blur-3xl dark:bg-cyan-500/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
        <div className="grid w-full gap-7 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.7fr_0.8fr_0.75fr_0.95fr]">
          {/* BRAND */}
          <div className="text-center sm:col-span-2 lg:col-span-1 lg:text-left">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center lg:justify-start">
              <img
                src={`${import.meta.env.BASE_URL}logo.jpeg`}
                alt="TechNova Solutions"
                className="h-12 w-12 rounded-full border border-slate-200 bg-white object-cover shadow-md dark:border-white/10"
              />

              <div className="min-w-0">
                <h2 className="font-serif text-2xl font-black leading-none text-[#081c4b] dark:text-white sm:text-3xl">
                  TechNova
                  <span className="block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </h2>

                <p className="mt-1 text-[11px] font-semibold text-slate-500 dark:text-white/50">
                  AI Powered ~ Smart Digital Solutions
                </p>
              </div>
            </div>

            <p className="mx-auto mt-3 max-w-md text-xs leading-6 text-slate-600 dark:text-white/60 sm:text-sm lg:mx-0">
              We help businesses grow with professional websites, AI-powered
              solutions, SEO, Google visibility, and modern digital strategy.
            </p>
          </div>

          {/* QUICK LINKS */}
          <FooterColumn title="Quick Links">
            <ul className="grid grid-cols-2 justify-items-center gap-x-5 gap-y-3 text-center sm:gap-x-10 lg:grid-cols-1 lg:justify-items-start lg:text-left lg:gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(link.to)}
                    className="relative text-xs font-semibold text-slate-600 transition-all duration-300 hover:text-blue-600 dark:text-white/65 dark:hover:text-cyan-300 sm:text-sm after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* SERVICES */}
          <div className="hidden sm:block">
            <FooterColumn title="Services">
              <ul className="space-y-2 text-center lg:text-left">
                {services.map((service) => (
                  <li key={service}>
                    <button
                      type="button"
                      onClick={() => handleNavigate("/services")}
                      className="relative text-sm font-medium text-slate-600 transition-all duration-300 hover:text-blue-600 dark:text-white/65 dark:hover:text-cyan-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
          <FooterColumn title="Policies">
            <ul className="space-y-2 text-center lg:text-left">
              {policies.map((policy) => (
                <li key={policy.label}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(policy.to)}
                    className="relative text-sm font-medium text-slate-600 transition-all duration-300 hover:text-blue-600 dark:text-white/65 dark:hover:text-cyan-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {policy.label}
                  </button>
                </li>
              ))}
            </ul>
          </FooterColumn>
          {/* CONTACT */}
          <FooterColumn title="Contact">
            <div className="space-y-2">
              {/* INSTAGRAM */}
              <ContactLink
                href="https://www.instagram.com/technovasolutions.in/"
                icon={<InstagramSvg />}
                text="TechNova Solutions"
                color="from-pink-500 via-red-500 to-yellow-500"
              />

              {/* MAIL */}
              <ContactLink
                href="mailto:support.technovasolutions@gmail.com"
                icon={<Mail size={15} />}
                text="support.technovasolutions@gmail.com"
                color="from-cyan-500 to-blue-600"
              />

              {/* AVAILABLE */}
              <div className="mt-3 rounded-2xl border border-blue-100 bg-blue-50/80 p-3 text-center dark:border-white/10 dark:bg-white/[0.04] lg:text-left">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-600 dark:text-cyan-300">
                  Available
                </p>

                <p className="mt-1 text-xs text-slate-500 dark:text-white/50">
                  Monday - Friday
                </p>

                <p className="mt-1 text-xs font-black text-[#081c4b] dark:text-white sm:text-sm">
                  10:00 AM – 7:00 PM
                </p>
              </div>
            </div>
          </FooterColumn>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-5 border-t border-slate-200 pt-4 text-center dark:border-white/10">
          <p className="text-xs text-slate-500 dark:text-white/45 sm:text-sm">
            © 2026 TechNova Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center lg:text-left">
      <h3 className="mb-3 text-center text-xs font-black uppercase tracking-[0.26em] text-[#081c4b] dark:text-white sm:text-sm lg:text-left">
        {title}
      </h3>

      {children}
    </div>
  );
}

function ContactLink({
  href,
  icon,
  text,
  color,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex min-w-0 max-w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/70 sm:text-sm"
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white`}
      >
        {icon}
      </span>

      <span className="min-w-0 truncate">{text}</span>
    </a>
  );
}

function InstagramSvg() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />

      <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" />
    </svg>
  );
}
