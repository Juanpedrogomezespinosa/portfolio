// src/i18n/ui.ts

// Define languages
export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

// UI Dictionary (Textos fijos de la interfaz)
export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.studies": "Estudios",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "hero.badge": "Disponible para trabajar",
    "btn.downloadCV": "Descargar CV",
    "btn.contact": "Hablemos",
  },
  en: {
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.studies": "Studies",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.badge": "Available for work",
    "btn.downloadCV": "Download CV",
    "btn.contact": "Let's Talk",
  },
} as const;
