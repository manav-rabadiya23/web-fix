import { NavLink } from "react-router-dom";
import {
  Moon,
  Sun,
  Menu,
  X,
  Home,
  Info,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Phone,
  Users,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

type Props = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const logo = `${import.meta.env.BASE_URL}logo.jpeg`;
const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Internship", href: "/internship", icon: GraduationCap },
  { name: "Portfolio", href: "/portfolio", icon: FolderKanban },
  { name: "Our Team", href: "/team", icon: Users },
  { name: "Contact", href: "/contact", icon: Phone },
];

export default function Header({ dark, setDark }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-[999] w-full border-b border-slate-200/80 bg-white/95 pt-[env(safe-area-inset-top)] text-slate-950 shadow-sm backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-[#030712]/95 dark:text-white">
      {" "}
      <div className="mx-auto flex h-[56px] w-full max-w-[1500px] items-center justify-between gap-2 px-3 sm:h-[64px] sm:px-6 lg:h-[72px] lg:px-8 xl:px-10">
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="group flex min-w-0 max-w-[calc(100%-132px)] shrink items-center gap-2 sm:max-w-none sm:gap-3"
        >
          <img
            src={logo}
            alt="TechNova Solutions"
            className="h-9 w-9 shrink-0 rounded-full bg-white object-cover p-0.5 shadow-md ring-1 ring-slate-200 transition-all duration-300 group-hover:scale-105 sm:h-11 sm:w-11 dark:ring-white/20"
          />

          <div className="min-w-0 leading-none">
            <h1
              className="truncate text-[16px] font-semibold sm:text-[22px] xl:text-[26px]"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              <span className="text-[#061B46] dark:text-white">TechNova</span>{" "}
              <span className="text-[#135CFF] dark:text-[#38BDF8]">
                Solutions
              </span>
            </h1>

            <p
              className="hidden mt-1 text-center text-[12px] font-semibold tracking-[0.08em] text-[#061B46]/75 sm:block xl:text-[11px] dark:text-white/55"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              AI Powered ~ Smart Digital Solutions
            </p>
          </div>
        </NavLink>

        <nav className="hidden min-w-0 items-center justify-center gap-3 xl:flex xl:gap-5">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `group relative whitespace-nowrap rounded-full px-1 py-2 text-[13px] font-bold transition-all duration-300 xl:text-[14px] ${
                  isActive
                    ? "text-blue-600 dark:text-cyan-400"
                    : "text-slate-700 hover:-translate-y-0.5 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300 dark:bg-cyan-400 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <button
            onClick={() => setDark((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-white"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <NavLink
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#08153d] px-4 py-2.5 text-[13px] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg active:scale-95 xl:px-5 xl:text-[14px]"
          >
            Get In Touch
            <ArrowRight
              size={16}
              className="transition duration-300 group-hover:translate-x-1"
            />
          </NavLink>
        </div>

        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <NavLink
            to="/team"
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 shadow-sm transition-all duration-300 active:scale-95 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300"
            aria-label="Our Team"
          >
            <Users size={17} />
          </NavLink>

          <button
            onClick={() => setDark((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-white"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-white"
            aria-label="Open menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl transition-all duration-500 ease-in-out dark:border-white/10 dark:bg-[#030712]/95 xl:hidden ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 rounded-2xl px-4 py-3.5 text-[15px] font-bold transition-all duration-300 active:scale-[0.98] ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-700 hover:bg-slate-100 dark:text-zinc-300 dark:hover:bg-white/10"
                  }`
                }
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            );
          })}

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-[#08153d] px-5 py-3.5 text-[15px] font-bold text-white shadow-md transition-all duration-300 active:scale-[0.98]"
          >
            Get In Touch
            <ArrowRight size={17} />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
