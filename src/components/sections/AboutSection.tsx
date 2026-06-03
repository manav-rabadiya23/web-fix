import { motion } from "framer-motion";
import {
  BadgeCheck,
  Brain,
  Code2,
  Eye,
  Lightbulb,
  Rocket,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const STARTUP_INDIA_LOGO = `${import.meta.env.BASE_URL}startup-india-transparent.png`;
const STARTUP_TEMP_ID = "IN-0426-9440WO";

const growthCards = [
  {
    title: "For Startups",
    desc: "Launch-ready websites, MVP ideas, and scalable digital structure for early-stage growth.",
    icon: Rocket,
  },
  {
    title: "For Businesses",
    desc: "Powerful websites, digital marketing, and tech solutions to grow your business.",
    icon: Target,
  },
  {
    title: "For Freelancers",
    desc: "Portfolio websites, service pages, and personal branding that look professional.",
    icon: Users,
  },
];

const stats = [
  { value: "39+", label: "Happy Clients", icon: Users },
  { value: "25+", label: "Projects Completed", icon: Code2 },
  { value: "6+", label: "Team Members", icon: Users },
  { value: "1+", label: "Years of Experience", icon: BadgeCheck },
];

const pillars = [
  {
    title: "Smart Planning",
    desc: "We understand your business goal first, then create a practical digital strategy.",
    icon: Lightbulb,
  },
  {
    title: "Clean Development",
    desc: "We build fast, responsive, and easy-to-use digital products.",
    icon: Code2,
  },
  {
    title: "AI Integration",
    desc: "We use AI tools and workflows to improve productivity.",
    icon: Brain,
  },
  {
    title: "Growth Strategy",
    desc: "We help improve online visibility and brand trust.",
    icon: TrendingUp,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f7fafa] px-4 pb-14 pt-12 text-[#071126] dark:bg-[#0f1111] dark:text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-450">
        {" "}
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-[11px] font-black uppercase tracking-[0.45em] text-[#007f8f] sm:text-xs">
            About TechNova Solutions
          </p>

          <h2 className="mt-5 font-['Poppins'] text-[clamp(2.25rem,4.8vw,4.6rem)] font-extrabold leading-[1.02] tracking-[0.01em] text-[#111827] dark:text-white">
            Digital Intelligence
            <br />
            <span className="font-['Poppins'] tracking-[0.015em] text-[#007f8f]">
              for Business Growth
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 dark:text-white/65 sm:text-base">
            TechNova Solutions helps businesses, startups, freelancers, and
            freshers grow through professional websites, AI-powered solutions,
            Google visibility, and practical digital strategy.
          </p>
        </motion.div>
        {/* STARTUP INDIA HERO CARD */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-9 overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-[#131921]"
        >
          <div className="grid min-h-82.5 lg:grid-cols-[1fr_0.9fr]">
            {/* LEFT CONTENT */}
            <div className="relative flex flex-col justify-center overflow-hidden bg-linear-to-br from-[#00656d] via-[#007f8f] to-[#00555d] p-7 text-white sm:p-10 lg:p-12">
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-30 -right-25 h-80 w-80 rounded-full bg-[#ffd814]/20 blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
                  <BadgeCheck size={16} className="text-[#ffd814]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white/80">
                    Startup India Recognition
                  </span>
                </div>

                <h3 className="mt-6 max-w-xl font-['Poppins'] text-[clamp(2.1rem,4vw,4.2rem)] font-extrabold leading-[1.08] tracking-[0.02em]">
                  Officially Recognized Startup
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-8 text-white/85 sm:text-base">
                  TechNova Solutions is officially recognized under Startup
                  India, showcasing our commitment to innovation, technology,
                  and digital transformation.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                      Status
                    </p>
                    <p className="mt-2 text-base font-black">
                      Recognized by Startup India
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                      Registration ID
                    </p>
                    <p className="mt-2 text-2xl font-poppins tracking-wide text-[#ffd814]">
                      {STARTUP_TEMP_ID}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT LOGO */}
            <div className="relative flex min-h-65 items-center justify-center overflow-hidden bg-[#f8fafc] p-8 dark:bg-[#0f1722]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,127,143,0.12),transparent_58%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,216,20,0.10),transparent_58%)]" />

              <div className="relative z-10 flex w-full max-w-xl items-center justify-center rounded-[32px] bg-transparent px-8 py-10">
                <motion.img
                  src={STARTUP_INDIA_LOGO}
                  alt="Startup India"
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.04 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="w-full max-w-[420px] object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>
        {/* MAIN CARDS */}
        <div className="mt-7 grid items-stretch gap-6 lg:grid-cols-2">
          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex min-h-90 flex-col rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-[#131921]"
          >
            <h3 className="text-xl font-black text-[#007f8f]">
              Our Mission & Vision
            </h3>

            <div className="mt-3 h-0.75 w-12 rounded-full bg-[#ffd814]" />

            <div className="mt-5 grid flex-1 gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Our Mission",
                  text: "To deliver innovative and reliable IT solutions that empower businesses to achieve their goals.",
                  icon: Target,
                },
                {
                  title: "Our Vision",
                  text: "To be a global leader in technology and digital transformation with integrity and innovation.",
                  icon: Eye,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex flex-col items-center text-center rounded-2xl bg-[#f8fbfb] p-5 pt-7 dark:bg-white/5"
                  >
                    <Icon className="h-14 w-14 text-[#007f8f]" />

                    <h4 className="mt-5 font-black text-center">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-center text-sm leading-7 text-slate-600 dark:text-white/60">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* WORK FOR */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex min-h-90 flex-col rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-[#131921]"
          >
            <h3 className="text-xl font-black text-[#007f8f]">We Work For</h3>

            <div className="mt-3 h-0.75 w-12 rounded-full bg-[#ffd814]" />

            <div className="mt-5 grid flex-1 gap-4 sm:grid-cols-3">
              {growthCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex flex-col items-center justify-start rounded-2xl bg-[#f8fbfb] p-4 pt-7 text-center dark:bg-white/5"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#007f8f] text-white">
                      <Icon size={22} />
                    </div>

                    <h4 className="mt-5 text-sm font-black leading-tight sm:text-[15px]">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-[12px] leading-6 text-slate-600 dark:text-white/60">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
        {/* STATS + VALUES */}
        <div className="mt-6">
          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid w-full overflow-hidden rounded-4xl bg-linear-to-r from-[#00656d] via-[#007f8f] to-[#00545d] text-white shadow-[0_22px_70px_rgba(0,127,143,0.25)] sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex min-h-37.5 items-center justify-center gap-5 border-b border-white/20 px-6 py-7 sm:border-r lg:border-b-0 lg:last:border-r-0"
                >
                  <Icon className="h-10 w-10" />

                  <div>
                    <p className="text-2xl font-black">{item.value}</p>

                    <p className="text-xs text-white/85 sm:text-sm">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
        {/* PILLARS */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl dark:border-white/10 dark:bg-[#131921]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#007f8f] text-white">
                  <Icon size={22} />
                </div>

                <h4 className="mt-5 text-lg font-black">{item.title}</h4>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-white/60">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
