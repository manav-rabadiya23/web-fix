import { motion } from "framer-motion";
import { type ElementType, type FormEvent, useState } from "react";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  User,
} from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgpbwrn";

const contactCards = [
  {
    icon: MapPin,
    title: "Office Location",
    text: "Vadodara, Gujarat, India",
    link: "#",
  },
  {
    icon: Mail,
    title: "Email Address",
    text: "support.technovasolutions@gmail.com",
    link: "mailto:support.technovasolutions@gmail.com",
  },
  {
    icon: Phone,
    title: "Call / WhatsApp",
    text: "+91 9601451370",
    link: "tel:+919601451370",
  },
  {
    icon: Clock,
    title: "Working Hours",
    text: "Mon - Fri, 10:00 AM - 8:00 PM",
    link: "#",
  },
];

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof ContactForm, string>>;

const initialForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const updateField = (field: keyof ContactForm) => (value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setSuccessMessage("");

    if (field === "name") {
      if (value && !/^[A-Za-z\s]+$/.test(value)) {
        setFieldErrors((current) => ({
          ...current,
          name: "Only letters are allowed.",
        }));
      } else {
        setFieldErrors((current) => ({ ...current, name: "" }));
      }
      return;
    }

    setFieldErrors((current) => ({ ...current, [field]: "" }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
    };

    const errors: FieldErrors = {};

    if (!trimmedForm.name) {
      errors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(trimmedForm.name)) {
      errors.name = "Only letters are allowed.";
    }

    if (!trimmedForm.email) {
      errors.email = "Email is required.";
    }

    if (!trimmedForm.phone) {
      errors.phone = "Phone number is required.";
    }

    if (!trimmedForm.message) {
      errors.message = "Message is required.";
    }

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) return;

    try {
      setIsSubmitting(true);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(trimmedForm),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setForm(initialForm);
      setFieldErrors({});
      setSuccessMessage("success");

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error(error);
      setSuccessMessage("");
      alert("Message not sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="overflow-hidden bg-[#f3f3f3] px-4 py-16 text-slate-900 dark:bg-[#0f1111] dark:text-white sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#007185] dark:text-[#ffd814] sm:text-sm sm:tracking-[0.25em]">
            Contact TechNova
          </span>

          <h2 className="mt-5 text-[clamp(2rem,8vw,2.5rem)] font-black leading-tight sm:text-5xl lg:text-6xl">
            Let’s build your next{" "}
            <span className="text-[#007185] dark:text-[#ffd814]">
              digital solution
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-white/65 sm:text-lg">
            Have a project idea, business query, or internship question? Reach
            out to TechNova Solutions and our team will guide you.
          </p>
        </motion.div>

        <div className="mt-12 grid w-full gap-8 sm:mt-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="w-full max-w-full space-y-6 overflow-hidden"
          >
            <div className="w-full max-w-full overflow-hidden rounded-2xl bg-[#131921] p-6 text-white shadow-lg sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#232f3e] text-white shadow-sm">
                <MessageCircle size={32} />
              </div>

              <h3 className="mt-7 text-2xl font-black leading-tight sm:text-4xl">
                Need help with your business growth?
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-300">
                We help businesses with websites, SEO, Google Business Profile,
                AI development, mobile apps, and modern digital strategy.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Fast Reply",
                  "Free Guidance",
                  "Business Focused",
                  "Friendly Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-[#232f3e] px-4 py-3 text-sm font-bold text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid w-full gap-5 sm:grid-cols-2">
              {contactCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="w-full max-w-full overflow-hidden rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#007185] dark:border-white/10 dark:bg-[#131921] sm:p-6"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#232f3e] text-white shadow-sm">
                      <Icon size={25} />
                    </div>

                    <h4 className="mt-5 font-black text-slate-950 dark:text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 break-words text-[12px] leading-6 text-slate-600 dark:text-white/60">
                      {item.text}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="w-full max-w-full overflow-hidden rounded-2xl border border-slate-300 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#131921] sm:p-8"
          >
            <h3 className="text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">
              Send us a message
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-white/60">
              Fill out the form and our team will contact you as soon as
              possible.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Input
                icon={User}
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={updateField("name")}
                autoComplete="name"
                error={fieldErrors.name}
                required
              />

              <Input
                icon={Mail}
                name="email"
                placeholder="Email Address"
                type="email"
                value={form.email}
                onChange={updateField("email")}
                autoComplete="email"
                error={fieldErrors.email}
                required
              />
            </div>

            <div className="mt-5">
              <Input
                icon={Phone}
                name="phone"
                placeholder="Phone Number"
                type="tel"
                value={form.phone}
                onChange={updateField("phone")}
                autoComplete="tel"
                error={fieldErrors.phone}
                required
              />
            </div>

            <div
              className={`relative mt-5 min-h-40 w-full rounded-xl border bg-white shadow-sm dark:bg-[#0f1111] ${
                fieldErrors.message
                  ? "border-red-500 focus-within:border-red-500"
                  : "border-slate-300 focus-within:border-[#007185] dark:border-white/10"
              }`}
            >
              <MessageCircle
                size={20}
                className={`absolute left-5 top-5 ${
                  fieldErrors.message
                    ? "text-red-500"
                    : "text-slate-500 dark:text-white/50"
                }`}
              />

              <textarea
                name="message"
                placeholder="Tell us about your project or query..."
                value={form.message}
                onChange={(event) => updateField("message")(event.target.value)}
                maxLength={1200}
                required
                className="h-52 w-full resize-none rounded-xl bg-transparent py-5 pl-14 pr-5 text-slate-900 outline-none placeholder:text-slate-500 dark:text-white dark:placeholder:text-white/50"
              />
            </div>

            {fieldErrors.message && (
              <p className="mt-2 text-sm font-semibold text-red-500">
                {fieldErrors.message}
              </p>
            )}

            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-5 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-green-500/10 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
                    ✓
                  </div>

                  <div>
                    <p className="font-bold text-emerald-600 dark:text-emerald-400">
                      Message Sent Successfully
                    </p>

                    <p className="text-sm text-slate-600 dark:text-white/60">
                      Our team will contact you within 24 hours.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#ffd814] px-6 py-4 text-base font-bold text-[#111827] shadow-sm transition hover:bg-[#f7ca00] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={19} />
            </button>

            <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-slate-500 dark:text-white/60">
              <ShieldCheck size={18} className="text-[#007185]" />
              Your information is safe with us.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Input({
  icon: Icon,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  autoComplete,
  required = false,
  error,
}: {
  icon: ElementType;
  name: keyof ContactForm;
  placeholder: string;
  type?: "email" | "tel" | "text";
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div className="w-full">
      <div
        className={`flex w-full max-w-full items-center gap-3 rounded-xl border bg-white px-4 py-4 shadow-sm dark:bg-[#0f1111] sm:gap-4 sm:px-5 ${
          error
            ? "border-red-500 focus-within:border-red-500"
            : "border-slate-300 focus-within:border-[#007185] dark:border-white/10"
        }`}
      >
        <Icon
          size={20}
          className={
            error ? "text-red-500" : "text-slate-500 dark:text-white/50"
          }
        />

        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete={autoComplete}
          maxLength={name === "phone" ? 20 : 120}
          required={required}
          className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-500 dark:text-white dark:placeholder:text-white/50"
        />
      </div>

      {error && (
        <p className="mt-2 text-sm font-semibold text-red-500">{error}</p>
      )}
    </div>
  );
}
