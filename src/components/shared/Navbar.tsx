import React, { useState, useEffect } from "react";

interface Props {
  lang: string;
  labels: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
  };
}

export default function Navbar({ lang, labels }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || (!storedTheme && prefersDarkMode)) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setTheme(newTheme);
  };

  const navigationLinks = [
    { name: labels.home, href: `/${lang}#home` },
    { name: labels.about, href: `/${lang}#about` },
    { name: labels.skills, href: `/${lang}#skills` },
    { name: labels.experience, href: `/${lang}#qualification` },
    { name: labels.projects, href: `/${lang}#projects` },
  ];

  const languageSwitchHref = lang === "es" ? "/en" : "/es";
  const languageSwitchLabel = lang === "es" ? "EN" : "ES";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/95 px-4 py-4 backdrop-blur-xl dark:bg-slate-950/95 dark:border-white/5 transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a href={`/${lang}`} className="flex items-center gap-2 group">
          <div className="flex items-center justify-center size-10 rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-105">
            JP
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-slate-900 dark:text-white leading-none tracking-tight group-hover:text-blue-500 transition-colors">
              Juanpe
            </span>
            <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-widest uppercase">
              Portfolio
            </span>
          </div>
        </a>

        {/* Menú en escritorio */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}

          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <a
              href={languageSwitchHref}
              className="text-xs font-bold px-2 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              {languageSwitchLabel}
            </a>
          </div>
        </nav>

        {/* Botón móvil (hamburguesa) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-4 md:hidden flex flex-col gap-2 shadow-xl animate-fade-in-down">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-blue-600 dark:hover:text-white transition-all"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 mt-2 flex justify-between items-center px-4">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              {theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
            </button>

            <a
              href={languageSwitchHref}
              className="text-sm font-bold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white"
            >
              {languageSwitchLabel}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
