import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Brain,
  TrendingUp,
  Users,
  Globe,
  ChevronRight,
} from "lucide-react";

const tvSlides = [
  {
    label: "Web Development",
    title: "Future Ready Digital Experiences",
    text: "Design • Develop • Deploy • Grow",
    icon: Code2,
  },
  {
    label: "AI Automation",
    title: "Smart Business Automation",
    text: "AI workflows • Faster tasks • Better productivity",
    icon: Brain,
  },
  {
    label: "Mobile Apps",
    title: "Modern Mobile App Interfaces",
    text: "Clean UI • Smooth UX • Responsive systems",
    icon: Smartphone,
  },
  {
    label: "SEO Optimization",
    title: "Growth Focused Digital Presence",
    text: "Search visibility • Local ranking • Brand trust",
    icon: TrendingUp,
  },
];

const tvFeatures = [
  { label: "AI Automation", icon: Brain },
  { label: "Web Development", icon: Code2 },
  { label: "Mobile Apps", icon: Smartphone },
  { label: "SEO Optimization", icon: TrendingUp },
];

const services = [
  {
    icon: Code2,
    title: "AI Full Stack Web Development",
    desc: "Building high-performance AI-integrated web applications using modern frameworks and scalable architectures.",
    link: "/services",
  },
  {
    icon: Smartphone,
    title: "AI Mobile Development",
    desc: "Crafting seamless mobile experiences for iOS and Android with AI-powered features and premium interfaces.",
    link: "/services",
  },
  {
    icon: Brain,
    title: "Prompt Engineering",
    desc: "Strategic prompt optimization to maximize creativity, automation, and performance of Large Language Models.",
    link: "/services",
  },
  {
    icon: Globe,
    title: "Google Business Management",
    desc: "Complete GBP management to improve visibility, local search authority, customer engagement, and trust.",
    link: "/services",
  },
];

const stats = [
  { value: "20+", label: "AI & Digital Projects Delivered" },
  { value: "90%", label: "System Reliability & Performance" },
  { value: "5+", label: "AI Automation & Smart Solutions" },
  { value: "15+", label: "Users & Workflow Interactions Managed" },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const welcomeTimer = window.setTimeout(() => {
      setShowWelcome(false);
    }, 3800);

    return () => window.clearTimeout(welcomeTimer);
  }, []);

  useEffect(() => {
    if (showWelcome) return;

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % tvSlides.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [showWelcome]);

  const ActiveIcon = tvSlides[activeSlide].icon;

  return (
    <>
      <section className="relative overflow-hidden bg-white text-white dark:bg-[#050816]">
        <div className="relative min-h-[900px] overflow-hidden bg-[#030712] sm:min-h-[920px] lg:min-h-[calc(100vh-88px)] xl:min-h-[820px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_78%_55%,rgba(168,85,247,0.18),transparent_35%),linear-gradient(180deg,#030712,#020617)]" />

          <motion.div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40"
            animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-24 pt-10 sm:gap-14 sm:px-5 sm:pb-32 sm:pt-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10 lg:px-8 lg:pb-28 lg:pt-16 xl:pb-24">
            {/* TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 text-center lg:order-1 lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
                className="mx-auto max-w-3xl font-['Poppins'] text-[clamp(2.4rem,7vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white antialiased lg:mx-0"
              >
                Building
                <br />
                Intelligent
                <br />
                Solutions for the
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Future
                </span>
              </motion.h1>

              <p className="mx-auto mt-7 max-w-2xl font-['Poppins'] text-base leading-8 text-white/75 sm:text-lg lg:mx-0">
                We build AI-powered digital products, modern web experiences,
                and future-ready software solutions that drive real business
                results.
              </p>

              <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-['Poppins'] text-sm font-bold text-white shadow-[0_15px_50px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-[1.03]"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/internship"
                  className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-['Poppins'] text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-white/10"
                >
                  Apply for Internship
                  <Users className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </Link>
              </div>
            </motion.div>

            {/* TV SECTION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.85, ease: "easeOut" }}
              className="relative order-1 mx-auto flex w-full max-w-[96vw] items-center justify-center overflow-visible px-1 lg:order-2 lg:max-w-none lg:px-0"
              style={{ height: "clamp(230px,68vw,460px)" }}
            >
              <div className="absolute left-1/2 top-1/2 h-[220px] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[90px] sm:h-[280px] sm:w-[520px]" />
              <div className="absolute bottom-10 left-1/2 h-20 w-[76%] -translate-x-1/2 rounded-full bg-violet-500/25 blur-3xl" />

              <div
                className="relative z-20 w-full max-w-[820px]"
                style={{ perspective: "1600px" }}
              >
                <div
                  className="relative lg:[transform:rotateY(-13deg)_rotateX(3deg)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="absolute inset-0 hidden rounded-[12px] bg-gradient-to-br from-slate-700 via-slate-900 to-black lg:block"
                    style={{
                      transform: "translate3d(18px, 8px, -34px)",
                      boxShadow:
                        "0 42px 115px rgba(37,99,235,0.46), 0 0 80px rgba(168,85,247,0.18)",
                    }}
                  />

                  <div className="relative rounded-[14px] border border-slate-500/60 bg-gradient-to-br from-slate-600 via-slate-950 to-black p-[5px] shadow-[0_20px_60px_rgba(37,99,235,0.25)] lg:rounded-[12px] lg:p-[6px] lg:shadow-[0_35px_120px_rgba(37,99,235,0.35)]">
                    <div className="rounded-[10px] border border-white/10 bg-black p-[4px] lg:rounded-[8px] lg:p-[5px]">
                      <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-[#020617] lg:rounded-[5px]">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:20px_20px] opacity-35" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_75%_55%,rgba(168,85,247,0.28),transparent_48%)]" />

                        {/* OLD SCAN ANIMATION KEPT */}
                        <motion.div
                          className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          animate={{ x: ["0%", "330%"] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />

                        <div className="relative min-h-[clamp(190px,55vw,320px)] p-3 sm:p-5 lg:min-h-[clamp(210px,27vw,350px)] lg:p-7">
                          <AnimatePresence mode="wait">
                            {showWelcome ? (
                              <motion.div
                                key="welcome-screen"
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, y: -18, scale: 0.98 }}
                                transition={{ duration: 0.55, ease: "easeOut" }}
                                className="flex min-h-[clamp(160px,48vw,260px)] flex-col items-center justify-center text-center"
                              >
                                <motion.div
                                  initial={{ scale: 0.86, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ delay: 0.15, duration: 0.55 }}
                                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/40 bg-cyan-300/10 text-cyan-200 shadow-[0_0_45px_rgba(34,211,238,0.25)] sm:h-20 sm:w-20 sm:rounded-3xl"
                                >
                                  <Brain className="h-7 w-7 sm:h-10 sm:w-10" />
                                </motion.div>

                                <motion.p
                                  initial={{ opacity: 0, y: 12 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.35, duration: 0.45 }}
                                  className="font-['Poppins'] text-[8px] font-black uppercase tracking-[0.32em] text-cyan-200/80 sm:text-[11px] sm:tracking-[0.42em]"
                                >
                                  Initializing AI Systems
                                </motion.p>

                                <motion.h2
                                  initial={{ opacity: 0, y: 18 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.65, duration: 0.5 }}
                                  className="mt-3 font-['Poppins'] text-[clamp(1.35rem,5vw,3.4rem)] font-black leading-[1.02] text-white"
                                >
                                  Welcome to
                                  <br />
                                  <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                    TechNova Solutions
                                  </span>
                                </motion.h2>

                                <motion.div
                                  initial={{ width: "0%" }}
                                  animate={{ width: "70%" }}
                                  transition={{
                                    delay: 1.3,
                                    duration: 1.8,
                                    ease: "easeInOut",
                                  }}
                                  className="mt-6 h-1 rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500 shadow-[0_0_22px_rgba(34,211,238,0.45)]"
                                />

                                <motion.p
                                  animate={{ opacity: [0.35, 1, 0.35] }}
                                  transition={{ duration: 1, repeat: Infinity }}
                                  className="mt-4 font-['Poppins'] text-[9px] font-bold uppercase tracking-[0.24em] text-white/50 sm:text-[11px]"
                                >
                                  Loading Experience...
                                </motion.p>
                              </motion.div>
                            ) : (
                              <motion.div
                                key="slides-screen"
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="grid min-h-[clamp(160px,48vw,260px)] gap-3 sm:gap-5"
                                style={{ gridTemplateColumns: "1fr 85px" }}
                              >
                                <div className="flex flex-col justify-center">
                                  <AnimatePresence mode="wait">
                                    <motion.div
                                      key={activeSlide}
                                      initial={{ opacity: 0, y: 18 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -18 }}
                                      transition={{ duration: 0.45 }}
                                    >
                                      <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1.5 font-['Poppins'] text-[8px] font-black uppercase tracking-[0.18em] text-cyan-200 sm:px-4 sm:py-2 sm:text-[10px]">
                                        <ActiveIcon size={12} />
                                        {tvSlides[activeSlide].label}
                                      </div>

                                      <p className="font-['Poppins'] text-[9px] font-black uppercase tracking-[0.35em] text-white/60 sm:text-[11px]">
                                        We Build
                                      </p>

                                      <h2 className="mt-2 font-['Poppins'] text-[clamp(1.25rem,5vw,3.4rem)] font-black leading-[1.02] text-white">
                                        {tvSlides[activeSlide].title}
                                      </h2>

                                      <p className="mt-3 font-['Poppins'] text-[10px] leading-6 text-white/70 sm:text-[13px] sm:leading-7">
                                        {tvSlides[activeSlide].text}
                                      </p>
                                    </motion.div>
                                  </AnimatePresence>

                                  <div className="mt-5 flex gap-2 sm:mt-6 sm:gap-3">
                                    {tvSlides.map((_, index) => (
                                      <button
                                        key={index}
                                        type="button"
                                        onClick={() => setActiveSlide(index)}
                                        className={`h-1.5 rounded-full transition-all sm:h-2 ${
                                          activeSlide === index
                                            ? "w-7 bg-cyan-300 sm:w-9"
                                            : "w-3.5 bg-white/20 sm:w-4"
                                        }`}
                                        aria-label={`Show slide ${index + 1}`}
                                      />
                                    ))}
                                  </div>
                                </div>

                                <div className="flex flex-col justify-center gap-1.5 sm:gap-3">
                                  {tvFeatures.map((item, index) => {
                                    const Icon = item.icon;
                                    const isActive = index === activeSlide;

                                    return (
                                      <button
                                        key={item.label}
                                        type="button"
                                        onClick={() => setActiveSlide(index)}
                                        className={`rounded-xl border px-1.5 py-2.5 transition-all sm:rounded-2xl sm:px-2.5 sm:py-3.5 ${
                                          isActive
                                            ? "border-cyan-300 bg-cyan-300/10 text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.22)]"
                                            : "border-white/10 bg-white/[0.04] text-violet-200"
                                        }`}
                                      >
                                        <Icon className="mx-auto h-4 w-4 sm:h-6 sm:w-6" />
                                        <span className="mt-1.5 block text-center font-['Poppins'] text-[6px] font-black uppercase leading-tight text-white/80 sm:mt-2 sm:text-[9px]">
                                          {item.label}
                                        </span>
                                      </button>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 font-['Poppins'] text-[7px] font-bold tracking-[0.3em] text-white/40 sm:bottom-[8px] sm:text-[13px] sm:tracking-[0.35em]">
                          TECHNOVA SOLUTIONS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute -bottom-px left-0 h-10 w-full rounded-t-[100%] bg-white dark:bg-[#050816] sm:h-16" />
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 py-16 text-slate-900 transition-colors duration-500 dark:bg-[#050816] dark:text-white sm:px-5 sm:py-24">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:70px_70px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-0 sm:px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-7 text-center font-['Poppins'] text-[clamp(1.9rem,8vw,2.25rem)] font-black leading-tight sm:text-5xl">
              <span className="block sm:inline">Specialized</span>
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent sm:ml-3 sm:inline">
                Services
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl font-['Poppins'] text-base leading-8 text-slate-600 dark:text-zinc-400 sm:text-lg">
              We provide elite digital marketing and high-performance
              development services tailored for modern businesses and
              future-ready digital experiences.
            </p>
          </div>

          <div className="mt-16 grid w-full gap-7 lg:mt-20 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -10, scale: 1.015 }}
                  className="group relative w-full max-w-full overflow-hidden rounded-[24px] border border-slate-200 bg-white/75 p-5 shadow-xl backdrop-blur-xl transition-colors duration-500 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.03] sm:rounded-[32px] sm:p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-violet-500/[0.04] opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-5">
                      <motion.div
                        whileHover={{ rotate: -6, scale: 1.08 }}
                        transition={{ duration: 0.25 }}
                        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-lg dark:from-white dark:to-zinc-200 dark:text-black"
                      >
                        <Icon size={30} strokeWidth={2.2} />
                      </motion.div>

                      <Link
                        to={service.link}
                        className="group/arrow flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:text-blue-400"
                      >
                        <ChevronRight
                          size={20}
                          className="transition duration-300 group-hover/arrow:translate-x-0.5"
                        />
                      </Link>
                    </div>

                    <h3 className="mt-7 font-['Poppins'] text-2xl font-black leading-tight text-slate-900 dark:text-white">
                      {service.title}
                    </h3>

                    <p className="mt-5 font-['Poppins'] leading-8 text-slate-600 dark:text-zinc-400">
                      {service.desc}
                    </p>

                    <Link
                      to={service.link}
                      className="mt-8 inline-flex items-center gap-2 font-['Poppins'] text-sm font-bold text-blue-600 transition-all duration-300 hover:gap-3 dark:text-blue-400"
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 font-['Poppins'] text-sm font-bold text-white shadow-2xl shadow-slate-300/30 transition-all duration-300 hover:-translate-y-1 dark:bg-white dark:text-black dark:shadow-white/10"
            >
              Explore All Services
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-16 grid w-full gap-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, scale: 1.025 }}
                className="group relative w-full max-w-full overflow-hidden rounded-[24px] border border-slate-200 bg-white/80 px-5 py-8 text-center shadow-xl backdrop-blur-xl transition-colors duration-500 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.03] sm:rounded-[32px] sm:px-7 sm:py-10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-cyan-500/[0.03] to-violet-500/[0.05] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute left-1/2 top-0 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-full" />

                <h3 className="relative font-['Poppins'] text-4xl font-black tracking-tight sm:text-6xl">
                  <span className="bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#7c3aed] bg-clip-text text-transparent">
                    {item.value}
                  </span>
                </h3>

                <p className="relative mt-4 font-['Poppins'] text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 dark:text-zinc-300">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
