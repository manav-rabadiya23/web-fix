import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Brush,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Flag,
  Globe,
  MapPin,
  Search,
  ShieldCheck,
  Smartphone,
  UsersRound,
  WandSparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const process = [
  {
    step: "01",
    title: "Apply Online",
    desc: "Submit your internship application through the official form & pay ₹149 processing fee to proceed.",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    title: "Offer Letter",
    desc: "Selected candidates receive an official internship offer letter within 24 hours.",
    icon: MapPin,
  },
  {
    step: "03",
    title: "Project Task",
    desc: "You will get a practical task based on your selected internship domain.",
    icon: Flag,
  },
  {
    step: "04",
    title: "Mentor Support",
    desc: "Complete your work with mentor guidance, modern tools, and proper learning flow.",
    icon: UsersRound,
  },
  {
    step: "05",
    title: "Certificate",
    desc: "After successful completion, interns can receive their certificate.",
    icon: Award,
  },
];

const domains = [
  {
    title: "Prompt Engineering",
    desc: "Learn to think with AI and create powerful prompts for practical solutions.",
    icon: WandSparkles,
    gradient: "from-cyan-500 to-blue-600",
    points: ["AI Thinking", "Workflow Practice", "Business Use Cases"],
  },
  {
    title: "AI-Powered Web Development",
    desc: "Build responsive modern web experiences with creative interfaces.",
    icon: Code2,
    gradient: "from-violet-500 to-fuchsia-600",
    points: ["Website Building", "Responsive Interfaces", "Modern UI/UX"],
  },
  {
    title: "AI-Powered App Development",
    desc: "Design app experiences users love with creative screen flows.",
    icon: Smartphone,
    gradient: "from-blue-500 to-cyan-500",
    points: ["App Experiences", "Creative Screens", "User Journey"],
  },
  {
    title: "SEO Optimization",
    desc: "Understand search strategies and improve visibility with smart techniques.",
    icon: Search,
    gradient: "from-emerald-500 to-lime-500",
    points: ["Search Visibility", "Growth Strategy", "Optimization Skills"],
  },
  {
    title: "Web Design",
    desc: "Create stunning modern designs with premium layouts and creativity.",
    icon: Brush,
    gradient: "from-orange-500 to-pink-500",
    points: ["Creative Layouts", "Design Systems", "User Experience"],
  },
  {
    title: "WordPress Development",
    desc: "Learn to build professional business websites, blogs, and portfolio websites using WordPress and modern tools.",
    icon: Globe,
    gradient: "from-[#21759B] to-[#0A4B78]",
    points: ["Website Creation", "Themes & Plugins", "Business Websites"],
  },
];

const trustItems = [
  " #startupindia Registered",
  "Verified Business",
  "Trusted Internship Provider",
  "Professional Digital Solutions",
];

export default function InternshipSection() {
  return (
    <section
      id="internship"
      className="relative overflow-hidden bg-[#f6f7f8] px-4 py-8 text-[#020617] dark:bg-[#020617] dark:text-white sm:px-6 sm:py-12 lg:px-8"
    >
      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#007f8f]/10 blur-3xl" />
      <div className="absolute -right-32 top-40 h-72 w-72 rounded-full bg-[#ffd814]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* HERO */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-black uppercase tracking-[0.28em] text-[#007f8f] sm:text-lg"
          >
            TechNova Internship Program
          </motion.p>

          <h1
            className="mt-6 text-[clamp(2.3rem,8vw,4.7rem)] font-black leading-[1.05] text-[#111827] dark:text-white"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Start your
            <span className="block text-[#007c89] dark:text-cyan-300">
              Internship Journey
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 dark:text-white/65 sm:text-base"
          >
            Modern internship programs designed for future digital creators.
          </motion.p>
        </div>
        {/* TRUST BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-12 overflow-hidden rounded-[2rem] border border-cyan-100 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#0f1722]"
        >
          <div className="absolute -left-32 top-[20%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="grid grid-cols-1 items-stretch lg:grid-cols-[minmax(0,1fr)_360px]">
            {/* LEFT CONTENT */}
            <div className="relative min-w-0 overflow-hidden p-5 sm:p-7 lg:p-8 xl:p-10">
              <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-cyan-50 to-transparent dark:from-cyan-500/5" />

              <div className="relative flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007C89] to-cyan-700 text-white shadow-xl shadow-cyan-500/30">
                  <ShieldCheck size={30} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#007C89] sm:text-xs">
                    Trust & Authenticity
                  </p>
                  <div className="mt-2 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#007C89] to-transparent" />
                </div>
              </div>

              <div className="relative mt-8 max-w-5xl">
                <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
                  <img
                    src={`${import.meta.env.BASE_URL}startup-india-transparent.png`}
                    alt="Startup India"
                    className="w-[260px] h-auto object-contain"
                  />

                  <div className="hidden h-14 w-px bg-slate-200 dark:bg-white/15 lg:block" />

                  <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-white/70 sm:text-base">
                    Proud to be{" "}
                    <span className="font-black text-[#007C89]">
                      #startupindia
                    </span>{" "}
                    registered, supporting innovation, entrepreneurship, and
                    building a stronger digital India.
                  </p>
                </div>
              </div>

              <p className="relative mt-7 max-w-5xl text-sm leading-8 text-slate-600 dark:text-white/65 sm:text-base">
                TechNova Solutions is a Startup India recognized company
                dedicated to innovation, digital transformation, and skill
                development. We provide industry-focused internships, web and
                mobile solutions, and AI-powered services that help students
                gain practical experience while enabling businesses to grow
                through modern technology.
              </p>

              <div className="relative mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[78px] items-center gap-3 rounded-2xl border border-cyan-100 bg-white/80 p-4 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#007C89]/40 dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#007C89] text-white">
                      <CheckCircle2 size={16} />
                    </div>

                    <p className="text-sm font-bold leading-snug text-slate-800 dark:text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT VERIFIED CARD */}
            <div className="relative flex items-center justify-center p-5 sm:p-7 lg:p-6">
              <div className="relative w-full max-w-[340px] overflow-hidden rounded-[2rem] border border-cyan-100/20 bg-gradient-to-b from-[#008A97] via-[#007C89] to-[#006975] px-7 py-9 text-center shadow-[0_20px_60px_rgba(0,124,137,0.28)] dark:border-cyan-400/10 dark:from-slate-800 dark:via-[#063f46] dark:to-slate-950 dark:shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
                <div className="absolute right-6 top-6 grid grid-cols-5 gap-2 opacity-35">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <span key={i} className="h-2 w-2 rounded-full bg-white" />
                  ))}
                </div>

                <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-center">
                  <div className="mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl">
                    <div className="flex h-18 w-18 items-center justify-center rounded-full border-2 border-dashed border-[#007C89] p-2">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#007C89] text-white">
                        <CheckCircle2 size={34} />
                      </div>
                    </div>
                  </div>

                  <h3 className="font-['Poppins'] text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white">
                    Verified Business
                  </h3>

                  <div className="mt-5 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-md">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white">
                      Startup India Registered
                    </span>
                  </div>

                  <div className="my-7 flex items-center gap-4">
                    <span className="h-px w-16 bg-white/35" />

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/15 backdrop-blur-md">
                      <ShieldCheck className="h-5 w-5 text-white" />
                    </div>

                    <span className="h-px w-16 bg-white/35" />
                  </div>

                  <div className="rounded-2xl border border-white/20 bg-white/15 px-8 py-4 backdrop-blur-md dark:bg-white/10">
                    <p className="font-['Poppins'] text-[11px] font-bold uppercase tracking-[0.32em] text-white">
                      Government
                      <br />
                      Recognized
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* PROCESS ROADMAP */}
        <div className="relative mt-14 overflow-hidden rounded-[3rem] border border-cyan-100 bg-[radial-gradient(circle_at_top,#ffffff_0%,#f4fbfc_45%,#e8f7f8_100%)] px-4 py-10 shadow-[0_30px_100px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_top,#0f172a_0%,#06111f_50%,#020617_100%)] sm:px-6 lg:px-10">
          <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.45em] text-[#007f8f]">
              Internship Roadmap
            </p>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-20 rounded-full bg-[#007f8f]" />
              <span className="h-2 w-2 rounded-full bg-[#007f8f]" />
            </div>

            <h3 className="mt-6 font-serif text-[clamp(2.1rem,5vw,4.4rem)] font-black leading-[1.05] tracking-[-0.045em] text-[#020617] dark:text-white">
              Your Journey from
              <br />
              Application to Certificate
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-white/65 sm:text-base">
              A clear step-by-step internship path designed for students,
              beginners, and future digital creators.
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-7xl">
            <div className="absolute left-[8%] right-[8%] top-[50px] hidden lg:block">
              <div className="relative h-4 rounded-full bg-gradient-to-r from-[#007f8f] via-[#22c7c9] via-[#65b741] to-[#ffd814] shadow-[0_16px_40px_rgba(34,211,238,0.28)]">
                <div className="absolute inset-x-5 top-1/2 h-[2px] -translate-y-1/2 bg-[repeating-linear-gradient(to_right,white_0_13px,transparent_13px_26px)] opacity-90" />
              </div>
            </div>

            <div className="absolute left-7 top-0 h-full w-1 rounded-full bg-gradient-to-b from-[#007f8f] via-[#22c7c9] to-[#ffd814] lg:hidden" />

            <div className="grid gap-8 lg:grid-cols-5 lg:gap-7">
              {process.map((item, index) => {
                const Icon = item.icon;
                const colors = [
                  "from-[#007f8f] to-[#0797a6]",
                  "from-[#00a9b8] to-[#22c7c9]",
                  "from-[#12aa8e] to-[#23c997]",
                  "from-[#62ad38] to-[#7cc242]",
                  "from-[#ffc400] to-[#ffd814]",
                ];

                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="relative flex gap-5 lg:block"
                  >
                    <div className="relative z-20 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[6px] border-white text-white shadow-xl shadow-cyan-500/20 dark:border-[#06111f] lg:mx-auto lg:h-[102px] lg:w-[102px]">
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors[index]}`}
                      />
                      <div className="absolute inset-[-9px] rounded-full border border-cyan-200 bg-white/50 dark:border-white/10 dark:bg-white/5" />
                      <div className="absolute inset-3 rounded-full bg-white/10" />
                      <Icon
                        className="relative z-10"
                        size={34}
                        strokeWidth={2.4}
                      />
                      <span
                        className={`absolute -bottom-8 hidden h-10 w-8 bg-gradient-to-b ${colors[index]} lg:block`}
                        style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
                      />
                    </div>

                    <motion.div
                      whileHover={{ y: -8, scale: 1.015 }}
                      className="group relative z-10 mt-0 min-h-[235px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.09)] backdrop-blur-xl transition-all duration-300 hover:border-[#007f8f]/40 dark:border-white/10 dark:bg-white/[0.06] lg:mt-12"
                    >
                      <div
                        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${colors[index]}`}
                      />

                      <div className="relative z-10">
                        <div className="inline-flex rounded-lg bg-[#ffd814] px-4 py-1.5 text-xs font-black text-black shadow-md shadow-yellow-400/25">
                          Step {item.step}
                        </div>

                        <h4 className="mt-5 text-[1.32rem] font-bold leading-[1.2] tracking-[-0.01em] text-[#020617] dark:text-white">
                          {item.title}
                        </h4>

                        <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-white/65">
                          {item.desc}
                        </p>
                      </div>

                      <span
                        className={`absolute bottom-4 right-5 bg-gradient-to-br ${colors[index]} bg-clip-text text-[4.2rem] font-black leading-none text-transparent opacity-20 transition group-hover:opacity-30`}
                      >
                        {item.step}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mt-10 flex max-w-4xl items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 px-6 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.07)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#007f8f] text-white">
                <ShieldCheck size={22} />
              </div>

              <p className="text-sm font-medium leading-7 text-slate-600 dark:text-white/70 sm:text-base">
                We ensure practical learning, real-world projects, and valuable
                experience{" "}
                <span className="font-black text-[#007f8f]">
                  that shapes your future!
                </span>
              </p>
            </motion.div>
          </div>
        </div>
        {/* DOMAINS */}
        <div className="mt-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#007f8f]">
              Internship Domains
            </p>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
            </div>

            <h3 className="mt-6 font-serif text-[clamp(2rem,4vw,3.8rem)] font-black leading-[1.05] tracking-[-0.04em] text-[#020617] dark:text-white">
              Choose Your{" "}
              <span className="bg-gradient-to-r text-[#007f8f]">
                Learning Path
              </span>
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-white/65 sm:text-base">
              Select your preferred internship domain and start building
              real-world skills with practical tasks and mentor support.
            </p>
          </div>

          <div className="relative mx-auto mt-10 max-w-6xl">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {domains.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-[0_14px_35px_rgba(15,23,42,0.06)] transition hover:shadow-[0_22px_55px_rgba(59,130,246,0.16)] dark:border-white/10 dark:from-[#111827] dark:to-[#07111f]"
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.gradient}`}
                    />

                    <div
                      className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 blur-3xl transition duration-500 group-hover:opacity-25`}
                    />

                    <span className="absolute right-5 top-5 text-2xl font-black text-slate-200 dark:text-white/10">
                      0{index + 1}
                    </span>

                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-xl transition duration-300 group-hover:scale-105 group-hover:rotate-3`}
                    >
                      <Icon size={24} />
                    </div>

                    <h4 className="mt-4 min-h-[48px] text-lg font-black leading-tight tracking-[-0.03em] text-[#020617] dark:text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 min-h-[50px] text-sm leading-6 text-slate-600 dark:text-white/65">
                      {item.desc}
                    </p>

                    <div className="mt-4 space-y-1.5">
                      {item.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-white/80"
                        >
                          <span
                            className={`h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${item.gradient}`}
                          />
                          {point}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-5">
                      <Link
                        to="/internship-apply"
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${item.gradient} px-4 py-2.5 text-sm font-black text-white shadow-lg transition duration-300 hover:scale-[1.02]`}
                      >
                        Apply Now
                        <ArrowRight
                          size={16}
                          className="transition group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
        {/* CERTIFICATE PREVIEW */}
        <div className="relative mt-16 overflow-hidden rounded-[3rem] border border-cyan-100 bg-white p-5 shadow-[0_30px_100px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#0f1722] sm:p-8 lg:p-10">
          <div className="absolute left-[-120px] top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-[-120px] bottom-0 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#007f8f]">
              Certificate Preview
            </p>

            <h3 className="mt-5 font-serif text-[clamp(2rem,4vw,3.8rem)] font-black leading-[1.05] tracking-[-0.04em] text-[#020617] dark:text-white">
              Your Achievement,{" "}
              <span className="text-[#007C89]">Our Recognition</span>
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-white/65 sm:text-base">
              A professional certificate that validates your skills, learning,
              and dedication through our internship program.
            </p>
          </div>

          <div className="relative mt-12 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="rounded-[2rem] bg-gradient-to-r from-[#007f8f] via-cyan-500 to-blue-600 p-[3px] shadow-[0_25px_70px_rgba(8,145,178,0.25)]">
                <div className="rounded-[1.8rem] bg-white p-3 dark:bg-[#07111f]">
                  <img
                    src={`${import.meta.env.BASE_URL}certificate-demo.png`}
                    alt="Certificate Preview"
                    className="w-full rounded-[1.4rem] object-cover shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border border-slate-200 bg-[#f8fbfc] p-6 shadow-xl dark:border-white/10 dark:bg-white/[0.04] sm:p-8"
            >
              <h4 className="text-2xl font-black leading-tight text-[#020617] dark:text-white">
                Earn a verified internship certificate that highlights your
                practical skills and real-world experience.
              </h4>

              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: ShieldCheck,
                    text: "Professional certificate designed to strengthen your resume and career profile.",
                  },
                  {
                    icon: Award,
                    text: "Demonstrates your hands-on experience in modern digital and AI-powered technologies.",
                  },
                  {
                    icon: ClipboardCheck,
                    text: "Perfect for showcasing your internship experience on LinkedIn, resumes, and future opportunities.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text}>
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-[#007f8f] dark:bg-cyan-500/10">
                          <Icon size={28} />
                        </div>

                        <p className="text-sm leading-7 text-slate-600 dark:text-white/70 sm:text-base">
                          {item.text}
                        </p>
                      </div>

                      <div className="mt-6 h-px bg-slate-200 last:hidden dark:bg-white/10" />
                    </div>
                  );
                })}

                <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-500/20 dark:bg-amber-500/10">
                  <p className="text-xs font-bold leading-6 text-amber-800 dark:text-amber-200 sm:text-sm">
                    Note: This certificate preview is a demo template. Final
                    certificate design, content, and format may vary according
                    to internship domain and completion requirements.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
