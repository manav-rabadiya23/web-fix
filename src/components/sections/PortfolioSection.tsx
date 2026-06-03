import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Nitin Jewellers",
    category: "Jewelry eCommerce",
    desc: "A premium jewelry website created to showcase products beautifully, build brand trust, and give customers a smooth browsing experience.",
    image: "nitin-jewellers.png",
    link: "https://www.nitinjewellers.shop",
  },
  {
    title: "Dhan Suraksha",
    category: "Finance & Insurance",
    desc: "A professional finance platform designed with clean content structure, strong trust-building visuals, and lead-focused sections.",
    image: "dhan-suraksha.png",
    link: "https://www.dhansuraksha.co.in",
  },
  {
    title: "Gujarati Rasoi",
    category: "Restaurant Website",
    desc: "A modern restaurant web app with menu showcase, ordering flow, attractive food visuals, and a premium customer experience.",
    image: "gujarati-rasoi.png",
    link: "https://restaurant-tau-brown.vercel.app/",
  },
  {
    title: "Dhruvi Enterprise",
    category: "Finance & Insurance",
    desc: "This is a space dedicated to elevating your everyday style. To help you elevate your look, your comfort, your confidence, your wardrobe..",
    image: "dhruvi-enterprise.png",
    link: "https://dhruvi-enterprise-pearl.vercel.app/",
  },

  {
    title: "Kuber Jewellers",
    category: "Jewelry eCommerce",
    desc: "A premium jewelry website created to showcase products beautifully, build brand trust, and give customers a smooth browsing experience.",
    image: "kuber-jewellers.png",
    link: "https://kuber-opal.vercel.app/",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#f6f9fc] px-4 py-14 text-[#10182f] dark:bg-[#0f1111] dark:text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#007185]/10 blur-3xl dark:bg-[#007185]/20" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl dark:bg-[#ffd814]/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.24em] text-[#007185] dark:text-[#ffd814] sm:text-xs sm:tracking-[0.28em]">
            <span className="h-px w-8 bg-[#007185] dark:bg-[#ffd814] sm:w-10" />
            Our Portfolio
            <span className="h-px w-8 bg-[#007185] dark:bg-[#ffd814] sm:w-10" />
          </div>

          <h2 className="mt-5 font-serif text-[clamp(2rem,7vw,4.5rem)] font-black leading-[1.05] tracking-[-0.04em]">
            Projects That Deliver{" "}
            <span className="block text-[#007185] dark:text-[#ffd814]">
              Real Results
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 dark:text-white/60 sm:text-base sm:leading-8">
            We build digital experiences that help businesses grow, attract
            customers, and achieve measurable success.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mt-10 overflow-hidden rounded-[26px] border border-slate-200 bg-white p-5 shadow-xl dark:border-white/10 dark:bg-[#131921] sm:p-7 lg:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#007185]/10 text-[#007185] dark:bg-[#ffd814]/10 dark:text-[#ffd814]">
                <Sparkles size={26} />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-black sm:text-3xl">
                  Want to explore more projects and case studies?
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-white/60">
                  Contact us to see our complete portfolio and discover how we
                  can help transform your business digitally.
                </p>
              </div>
            </div>

            <a
              href={`${import.meta.env.BASE_URL}#/contact`}
              className="group inline-flex w-full items-center justify-center gap-4 rounded-2xl bg-[#007185] px-7 py-4 text-sm font-black text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#005f70] dark:bg-[#ffd814] dark:text-[#111827] dark:hover:bg-[#f7ca00] sm:w-auto"
            >
              Contact Us
              <ArrowRight
                size={20}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: {
    title: string;
    category: string;
    desc: string;
    image: string;
    link: string;
  };
  index: number;
}) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-lg backdrop-blur-xl transition-all duration-500 hover:border-[#007185]/40 hover:shadow-2xl dark:border-white/10 dark:bg-[#131921]"
    >
      <div className="relative h-52.5 overflow-hidden rounded-t-[26px] bg-[#e9eef2] dark:bg-[#0f1720] sm:h-60 lg:h-55 xl:h-60">
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={project.title}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/45 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl font-black leading-tight text-[#10182f] dark:text-white sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-white/60">
          {project.desc}
        </p>

        <div className="mt-6 inline-flex w-fit items-center gap-3 rounded-full border border-[#007185]/20 bg-[#007185] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#007185]/20 transition-all duration-300 group-hover:gap-4 group-hover:shadow-xl dark:border-[#ffd814]/20 dark:bg-[#ffd814] dark:text-[#111827] dark:shadow-[#ffd814]/10">
          Visit Website
          <ArrowRight size={18} />
        </div>
      </div>

      <div className="h-1 w-0 bg-[#007185] transition-all duration-500 group-hover:w-full dark:bg-[#ffd814]" />
    </motion.a>
  );
}
