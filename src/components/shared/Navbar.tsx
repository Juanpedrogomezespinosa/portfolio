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
  const [languageSwitchHref, setLanguageSwitchHref] = useState("/");

  useEffect(() => {
    // Obtener la ruta actual del navegador
    const currentPath = window.location.pathname;

    // Detectar si estamos en una página de proyecto: /es/projects/id o /en/projects/id
    const projectMatch = currentPath.match(/^\/(es|en)\/projects\/(.+)$/);

    if (projectMatch) {
      // Estamos en un proyecto, cambiar solo el idioma pero mantener el ID
      const projectId = projectMatch[2];
      const newLang = lang === "es" ? "en" : "es";
      setLanguageSwitchHref(`/${newLang}/projects/${projectId}`);
    } else {
      // Estamos en la homepage u otra página, cambiar solo el idioma base
      const newLang = lang === "es" ? "en" : "es";

      // Mantener el hash si existe (por ejemplo #about, #projects)
      const hash = window.location.hash;
      setLanguageSwitchHref(`/${newLang}${hash}`);
    }
  }, [lang]);

  const navigationLinks = [
    { name: labels.home, href: `/${lang}#home` },
    { name: labels.about, href: `/${lang}#about` },
    { name: labels.skills, href: `/${lang}#skills` },
    { name: labels.experience, href: `/${lang}#qualification` },
    { name: labels.projects, href: `/${lang}#projects` },
  ];

  const languageSwitchLabel = lang === "es" ? "EN" : "ES";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/90 px-4 py-4 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a href={`/${lang}`} className="flex items-center gap-2 group">
          <div className="flex items-center justify-center size-10 rounded-xl bg-linear-to-br from-purple-600 to-blue-500 text-white font-bold text-lg shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-105">
            JP
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white leading-none tracking-tight group-hover:text-blue-400 transition-colors">
              Juanpe
            </span>
            <span className="text-[10px] font-medium text-slate-400 tracking-widest uppercase">
              Portfolio
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          ))}

          <div className="h-6 w-px bg-slate-800 mx-2"></div>

          <div className="flex items-center gap-4">
            <a
              href={languageSwitchHref}
              className="text-xs font-bold px-3 py-1.5 rounded-md border border-slate-700 text-slate-200 hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              {languageSwitchLabel}
            </a>
          </div>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
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

      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 p-4 lg:hidden flex flex-col gap-2 shadow-xl">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-all"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-4 border-t border-slate-800 mt-2 flex justify-between items-center px-4">
            <a
              href={languageSwitchHref}
              className="text-sm font-bold px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              {languageSwitchLabel}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
