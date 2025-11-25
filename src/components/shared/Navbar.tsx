import React, { useState, useEffect } from "react";

interface Props {
  lang: string;
  // En lugar de una función 't', recibimos los textos ya traducidos
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
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    }
  };

  const navLinks = [
    { name: labels.home, href: `/${lang}#home` },
    { name: labels.about, href: `/${lang}#about` },
    { name: labels.skills, href: `/${lang}#skills` },
    { name: labels.experience, href: `/${lang}#qualification` },
    { name: labels.projects, href: `/${lang}#projects` },
  ];

  const switchLangHref = lang === "es" ? "/en" : "/es";
  const switchLangLabel = lang === "es" ? "EN" : "ES";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 px-4 py-3 backdrop-blur-sm dark:bg-[#101922]/80 dark:border-slate-800 transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white">
          <div className="size-8 text-blue-600 dark:text-blue-500">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v2h-2zm0 4h2v6h-2z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Portfolio</h2>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center gap-4 border-l border-slate-200 pl-4 dark:border-slate-700">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <a
              href={switchLangHref}
              className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600"
            >
              {switchLangLabel}
            </a>
          </div>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
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

      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white dark:bg-[#101922] border-b border-slate-200 dark:border-slate-800 p-4 md:hidden flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-slate-600 dark:text-slate-300"
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-700">
            <button
              onClick={toggleTheme}
              className="text-sm font-medium dark:text-white"
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
            <a
              href={switchLangHref}
              className="text-sm font-bold dark:text-white"
            >
              {switchLangLabel}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
