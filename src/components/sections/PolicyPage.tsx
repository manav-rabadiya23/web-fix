import { motion } from "framer-motion";
import { FileText, ShieldCheck, LockKeyhole, CreditCard } from "lucide-react";

const policies = {
  "terms-and-conditions": {
    title: "Terms & Conditions",
    icon: FileText,
    sections: [
      {
        heading: "Service Usage",
        points: [
          "By accessing or using any services provided by TechNova Solutions, users agree to comply with these Terms & Conditions.",
          "All services including website development, AI solutions, internship programs, and digital services are subject to mutual understanding of scope, timeline, and deliverables.",
        ],
      },
      {
        heading: "User Responsibilities",
        points: [
          "Provide accurate and complete information.",
          "Use services strictly for lawful and professional purposes.",
          "Follow instructions and communication guidelines.",
          "Respect intellectual property and confidentiality.",
          "Any misuse of services, including but not limited to unauthorized system access, misrepresentation, unethical practices, or violation of companypolicies, is strictly prohibited.",
        ],
      },
      {
        heading: "Company Rights",
        points: [
          "TNS reserves the right to modify or update services and policies.",
          "TNS may suspend or terminate access in case of violation.",
          "TNS may refuse service under justified circumstances.",
        ],
      },
      {
        heading: "Intellectual Property",
        points: [
          "All content, designs, code, and materials created by TNS remain the intellectual property of the company unless explicitly transferred through agreement.",
          "Continued use of services indicates acceptance of these terms.",
        ],
      },
    ],
  },

  "privacy-policy": {
    title: "Privacy Policy",
    icon: LockKeyhole,
    sections: [
      {
        heading: "Data Collection",
        points: [
          "TechNova Solutions is committed to safeguarding the privacy and personal data of clients, interns, employees, and website users.",
          "We may collect full name, email address, contact number, organization details, project requirements, and communication records.",
          "We may also collect system-related data such as IP address, browser type, usage logs, and activity data when users access our digital platformsor internal systems (including tools like MirrorMee)..",
        ],
      },
      {
        heading: "Use of Information",
        points: [
          "Information is used for service delivery, project execution, communication, performance monitoring, security, and internal analysis.",
        ],
      },
      {
        heading: "Data Sharing",
        points: [
          "TNS does not sell, rent, or trade personal information to third parties.",
          "Data may be shared when required by law  or legal process, with trusted service providers, or with user consent.",
          "We take reasonable measures to protect data against unauthorized access, alteration, disclosure, ordestruction. However, users also share responsibility in maintaining the confidentiality of their own credentials",
        ],
      },
      {
        heading: "User Consent",
        points: [
          "By using our services or platforms, users acknowledge and consent to the data practices described in this policy.",
        ],
      },
    ],
  },

  "security-policy": {
    title: "Data Security Policy",
    icon: ShieldCheck,
    sections: [
      {
        heading: "Security Practices",
        points: [
          "TechNova Solutions prioritizes the security and integrity of all company, client, and user data.",
          "We use role-based access control, secure authentication systems, encrypted transmission where applicable, and regular monitoring.",
        ],
      },
      {
        heading: "User Responsibility",
        points: [
          "Users are responsible for maintaining the confidentiality of their login credentials.",
          "Sharing accounts or unauthorized access to systems is strictly prohibited.",
        ],
      },
      {
        heading: "Restricted Actions",
        points: [
          "Sensitive information, including client data, project details, and internal documentation, must not be shared externally without proper authorization.",
          "Hacking, exploiting, manipulating system data, bypassing security controls, or accessing restricted information is prohibited.",
          "Violations may result in immediate termination and possible legal action.",
        ],
      },
    ],
  },

  "client-payment-policy": {
    title: "Client & Payment Policy",
    icon: CreditCard,
    sections: [
      {
        heading: "Project Confirmation",
        points: [
          "Clients must clearly define requirements and scope.",
          "Clients must approve the final proposal or SRS before project start.",
          "Timelines and deliverables must be confirmed before work begins.",
        ],
      },
      {
        heading: "Payment Terms",
        points: [
          "Projects may require partial or full advance payment before work begins.",
          "Payment structure will be defined before project start.",
          "All payments must be made through agreed methods.",
        ],
      },
      {
        heading: "Refund Policy",
        points: [
          "Payments are generally non-refundable once project work has commenced.",
          "Refunds, if applicable, will be considered only under exceptional circumstances and at company discretion.",
        ],
      },
      {
        heading: "Scope Changes & Support",
        points: [
          "Additional features  or changes beyond agreed scope may incur extra charges.",
          "Timelines may be revised based on requested changes.",
          "Post-delivery support may be limited or chargeable based on scope.",
        ],
      },
      {
        heading: "Delivery & Support",
        points: [
          "TNS ensures delivery based on agreed requirements and timelines.",
          " Minor revisions may be included depending on agreement",
          "Post-delivery support may be limited or chargeable based on scope.",
        ],
      },

      {
        heading: "Client Responsibility",
        points: [
          "Clients must provide timely feedback",
          "Clients must Share required content/materials.",
          "Clients must  Communicate clearly throughout the project.",
          "Delays caused due to client-side inactivity may impact delivery timelines.",
        ],
      },
    ],
  },
};

export default function PolicyPage({ type }: { type: keyof typeof policies }) {
  const policy = policies[type];
  const Icon = policy.icon;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7fafa] px-4 py-14 text-[#071126] dark:bg-[#050816] dark:text-white sm:px-6 lg:px-8">
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white/85 p-5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05] sm:p-8 lg:p-10"
      >
        <img
          src={`${import.meta.env.BASE_URL}logo.jpeg`}
          alt="logo"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[700px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.18] select-none dark:opacity-[0.20]"
        />

        <div className="relative z-10">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#007c89] text-white shadow-lg">
              <Icon size={30} />
            </div>

            <p className="mt-5 text-xs font-black uppercase tracking-[0.35em] text-[#007c89] dark:text-cyan-300">
              TechNova Solutions
            </p>

            <h1 className="mt-3 font-serif text-3xl font-black text-[#081c4b] dark:text-white sm:text-5xl">
              {policy.title}
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-white/60">
              AI Powered ~ Smart Digital Solutions
            </p>
          </div>

          <div className="mt-10 grid gap-5">
            {policy.sections.map((section) => (
              <div
                key={section.heading}
                className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm dark:border-white/10 dark:bg-[#050816]/60"
              >
                <h2
                  className="font-serif text-xl font-black text-[#007c89] dark:text-cyan-300"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {section.heading}
                </h2>

                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 dark:text-zinc-300 sm:text-base">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#007c89]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 rounded-3xl border border-[#007c89]/20 bg-gradient-to-r from-cyan-50 to-white p-6 dark:border-cyan-400/20 dark:from-cyan-950/20 dark:to-transparent">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <img
              src={`${import.meta.env.BASE_URL}startup-india-transparent.png`}
              alt="Startup India"
              className="h-16 w-auto object-contain sm:h-20"
            />

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#007c89] dark:text-cyan-300">
                Recognized By
              </p>

              <h3 className="mt-1 font-serif text-2xl font-black text-[#081c4b] dark:text-white">
                #StartupIndia Registered
              </h3>

              <p className="mt-2 text-sm font-semibold text-[#007c89] dark:text-cyan-300">
                Recognition No: IN-0426-9440WO
              </p>

              <p className="mt-2 text-sm text-slate-600 dark:text-white/60">
                TechNova Solutions is proudly recognized under the Startup India
                initiative, reflecting our commitment to innovation,
                professionalism, and trusted digital services.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
