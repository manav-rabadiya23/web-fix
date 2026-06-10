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
    <>
      <header className="fixed left-0 top-0 z-[999] w-full border-b border-slate-200/80 bg-white/95 pt-[env(safe-area-inset-top)] text-slate-950 shadow-sm backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-[#030712]/95 dark:text-white">
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
                <span className="text-[#135CFF] dark:text-[#60A5FA]">
                  Solutions
                </span>
              </h1>

              <p
                className="mt-1 hidden text-center text-[12px] font-semibold tracking-[0.08em] text-[#061B46]/75 sm:block xl:text-[11px] dark:text-white/55"
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
                      ? "text-[#135CFF] dark:text-[#60A5FA]"
                      : "text-slate-700 hover:-translate-y-0.5 hover:text-[#135CFF] dark:text-zinc-300 dark:hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-[#135CFF] transition-all duration-300 dark:bg-[#60A5FA] ${
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
              className="group inline-flex items-center gap-2 rounded-xl bg-[#061B46] px-4 py-2.5 text-[13px] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#135CFF] hover:shadow-lg active:scale-95 xl:px-5 xl:text-[14px]"
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
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-[#135CFF]/30 hover:text-[#135CFF] active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-[#60A5FA]/30 dark:hover:text-[#60A5FA]"
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
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-white"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[1000] xl:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/45 backdrop-blur-sm"
            aria-label="Close menu overlay"
          />

          <aside className="absolute right-0 top-0 h-full w-[86%] max-w-[340px] overflow-y-auto border-l border-slate-200 bg-white px-4 py-5 shadow-2xl dark:border-white/10 dark:bg-[#030712]">
            <div className="mb-7 flex items-start justify-between gap-4">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <img
                  src={logo}
                  alt="TechNova Solutions"
                  className="h-12 w-12 rounded-full bg-white object-cover p-0.5 shadow-md ring-1 ring-slate-200 dark:ring-white/20"
                />

                <div>
                  <h2
                    className="text-[18px] font-bold leading-none"
                    style={{
                      fontFamily: "'Georgia', 'Times New Roman', serif",
                    }}
                  >
                    <span className="text-[#061B46] dark:text-white">
                      TechNova
                    </span>{" "}
                    <span className="text-[#135CFF] dark:text-[#60A5FA]">
                      Solutions
                    </span>
                  </h2>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[#061B46]/60 dark:text-white/45">
                    AI Powered
                  </p>
                </div>
              </NavLink>

              <button
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-white"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="grid grid-cols-2 gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `group flex min-h-[88px] flex-col items-center justify-center rounded-2xl border p-3 text-center transition-all duration-300 active:scale-[0.97] ${
                        isActive
                          ? "border-[#061B46] bg-[#061B46] text-white shadow-lg shadow-[#061B46]/20 dark:border-[#60A5FA] dark:bg-[#135CFF]/15 dark:text-[#60A5FA]"
                          : "border-slate-200 bg-white text-slate-700 hover:border-[#135CFF]/30 hover:bg-[#EEF4FF] hover:text-[#135CFF] dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-[#135CFF]/40 dark:hover:bg-[#135CFF]/10 dark:hover:text-[#60A5FA]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 ${
                            isActive
                              ? "bg-white/20 text-white dark:bg-[#135CFF]/20 dark:text-[#60A5FA]"
                              : "bg-[#EEF4FF] text-[#135CFF] dark:bg-[#135CFF]/10 dark:text-[#60A5FA]"
                          }`}
                        >
                          <Icon size={17} />
                        </span>

                        <span className="text-[11px] font-black uppercase tracking-[0.08em]">
                          {item.name}
                        </span>
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-[#061B46] px-5 py-3.5 text-[13px] font-black uppercase tracking-[0.04em] text-white shadow-lg transition-all duration-300 hover:bg-[#135CFF] active:scale-[0.98] dark:bg-[#135CFF] dark:hover:bg-[#60A5FA]"
            >
              Get In Touch
              <ArrowRight size={17} />
            </NavLink>
          </aside>
        </div>
      )}
    </>
  );
}
