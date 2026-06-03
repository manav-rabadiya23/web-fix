import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Building2,
  Code2,
  Headphones,
  Map,
  MapPin,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { ElementType } from "react";

const services = [
  {
    title: "Google Business Profile Management",
    desc: "Complete management of your Google Business Profile to keep your brand accurate, active, and trusted in local search.",
    icon: MapPin,
    color: "teal",
  },
  {
    title: "WordPress Development",
    desc: "Custom WordPress solutions designed for speed, scalability, and a seamless user experience across all devices.",
    icon: Search,
    color: "green",
  },
  {
    title: "Google Maps Listing Management",
    desc: "Optimized Google Maps presence so customers can quickly find your location, contact details, and services.",
    icon: Map,
    color: "blue",
  },
  {
    title: "Digital Marking",
    desc: "Boost your brand visibility with strategic campaigns, social media growth, and performance-driven marketing solutions.",
    icon: Building2,
    color: "purple",
  },
  {
    title: "Ai Automation",
    desc: "Leverage intelligent automation to optimize operations, enhance efficiency, and accelerate business growth.",
    icon: Zap,
    color: "yellow",
  },
  {
    title: "AI Full Stack Web Development",
    desc: "Modern, high-performance websites and web applications built with AI-powered features and clean architecture.",
    icon: Code2,
    color: "pink",
  },
  {
    title: "AI Mobile Development",
    desc: "Smart mobile app experiences for Android and iOS with clean UI, smooth performance, and useful AI features.",
    icon: Smartphone,
    color: "violet",
  },
  {
    title: "Prompt Engineering",
    desc: "Professional prompt systems and AI workflows that improve automation, creativity, accuracy, and productivity.",
    icon: Brain,
    color: "orange",
  },
];
const ctaPoints = [
  { title: "Customized Solutions", icon: Settings },
  { title: "Result Driven", icon: Target },
  { title: "Ongoing Support", icon: Headphones },
];

const colorMap: Record<
  string,
  { iconBox: string; icon: string; number: string; link: string }
> = {
  teal: {
    iconBox: "bg-[#e5f6f6]",
    icon: "text-[#007C89]",
    number: "bg-[#e5f6f6] text-[#007C89]",
    link: "text-[#007C89]",
  },
  green: {
    iconBox: "bg-emerald-100",
    icon: "text-emerald-600",
    number: "bg-emerald-100 text-emerald-700",
    link: "text-emerald-600",
  },
  blue: {
    iconBox: "bg-sky-100",
    icon: "text-sky-600",
    number: "bg-sky-100 text-sky-700",
    link: "text-sky-600",
  },
  purple: {
    iconBox: "bg-purple-100",
    icon: "text-purple-600",
    number: "bg-purple-100 text-purple-700",
    link: "text-purple-600",
  },
  yellow: {
    iconBox: "bg-yellow-100",
    icon: "text-yellow-600",
    number: "bg-yellow-100 text-yellow-700",
    link: "text-yellow-600",
  },
  pink: {
    iconBox: "bg-pink-100",
    icon: "text-pink-600",
    number: "bg-pink-100 text-pink-700",
    link: "text-pink-600",
  },
  violet: {
    iconBox: "bg-violet-100",
    icon: "text-violet-600",
    number: "bg-violet-100 text-violet-700",
    link: "text-violet-600",
  },
  orange: {
    iconBox: "bg-orange-100",
    icon: "text-orange-600",
    number: "bg-orange-100 text-orange-700",
    link: "text-orange-600",
  },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f7fafa] px-4 py-14 text-slate-950 dark:bg-[#0f1111] dark:text-white sm:px-6 sm:py-18 lg:px-8 lg:py-20"
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex max-w-full items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-[#007C89] dark:text-[#ffd814] sm:text-xs sm:tracking-[0.32em]">
            <span className="h-px w-8 bg-[#007C89] dark:bg-[#ffd814] sm:w-12" />
            Our Services
            <span className="h-px w-8 bg-[#007C89] dark:bg-[#ffd814] sm:w-12" />
          </div>

          <h2 className="mt-5 font-serif text-[clamp(2rem,8vw,4.3rem)] font-black leading-[1.08] tracking-[-0.04em] text-[#070b1d] dark:text-white">
            Smart Solutions for Real{" "}
            <span className="relative inline-block text-[#007C89]">
              Business Growth
              <span className="absolute -bottom-1 left-0 z-0 h-2 w-full rounded-full bg-[#ffd814]" />
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-white/65 sm:text-base sm:leading-8">
            We combine strategy, technology, and AI to help businesses
            strengthen their online presence, attract more customers, and grow
            faster.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative mt-6 overflow-hidden rounded-[1.6rem] bg-linear-to-br from-[#006b75] via-[#007C89] to-[#004f57] p-5 text-white shadow-[0_25px_60px_rgba(0,124,137,0.25)] sm:rounded-4xl sm:p-8"
        >
          <div className="absolute left-0 top-0 h-32 w-32 rounded-full border border-white/10" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full border border-white/10" />
          <div className="absolute right-5 top-5 text-white/20">
            <Sparkles size={34} />
          </div>

          <div className="relative grid gap-7 lg:grid-cols-[1.1fr_1fr_0.75fr] lg:items-center">
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-2xl sm:h-28 sm:w-28">
                <img
                  src={`${import.meta.env.BASE_URL}logo.jpeg`}
                  alt="TechNova Solutions"
                  className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
                />
              </div>

              <div>
                <h3 className="font-['Poppins'] text-2xl font-black leading-tight sm:text-4xl">
                  Ready to{" "}
                  <span className="text-[#ffd814]">Grow Your Business?</span>
                </h3>

                <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#27d3df] sm:mx-0" />

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
                  Let’s build your digital success story together. Our experts
                  are ready to help you enhance your online presence, attract
                  more customers, and achieve your goals.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:border-l lg:border-r lg:border-white/20 lg:px-5">
              {ctaPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex min-h-37.5 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur-sm sm:min-h-46.25"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                      <Icon size={26} />
                    </div>

                    <div className="mt-4 h-1 w-10 rounded-full bg-[#ffd814]" />

                    <p className="mt-4 font-['Poppins'] text-sm font-semibold leading-6 text-white sm:text-[0.95rem]">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="relative">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#ffd814] px-6 py-4 font-['Poppins'] text-base font-black text-slate-950 shadow-xl transition duration-300 hover:scale-[1.02] hover:bg-[#f7ca00] sm:px-7 sm:py-5 sm:text-lg"
              >
                Get Started Today
                <ArrowRight size={22} />
              </Link>

              <div className="mt-5 flex items-center justify-center gap-3 text-sm text-white/85">
                <ShieldCheck size={18} />
                <span>No obligation. Just results.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: {
    title: string;
    desc: string;
    icon: ElementType;
    color: string;
  };
  index: number;
}) {
  const Icon = service.icon;
  const colors = colorMap[service.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      whileHover={{ y: -7 }}
      className="group relative flex min-h-77.5 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#007C89]/30 hover:shadow-xl hover:shadow-[#007C89]/10 dark:border-white/10 dark:bg-[#131921] sm:min-h-82.5 sm:p-6"
    >
      <div
        className={`absolute right-5 top-5 rounded-xl px-3 py-1 text-xs font-black ${colors.number}`}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl sm:h-16 sm:w-16 ${colors.iconBox} ${colors.icon}`}
      >
        <Icon size={30} strokeWidth={2.3} />
      </div>

      <h3 className="mt-5 font-['Poppins'] text-2xl font-black leading-tight text-slate-900 dark:text-white">
        {service.title}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-white/60">
        {service.desc}
      </p>

      <Link
        to="/contact"
        className={`mt-auto inline-flex items-center gap-2 pt-6 font-['Poppins'] text-[0.95rem] font-semibold transition-all duration-300 hover:gap-3 ${colors.link}`}
      >
        Get Service
        <ArrowRight size={18} />
      </Link>
    </motion.div>
  );
}
