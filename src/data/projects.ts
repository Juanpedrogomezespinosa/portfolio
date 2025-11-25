export interface Project {
  id: string; // Slug único (ej: 'ecommerce-app')
  title: string;
  description: {
    es: string;
    en: string;
  };
  tags: string[]; // React, Node.js, etc.
  image: string; // Ruta de la imagen
  link?: string; // Link a producción
  repo?: string; // Link a GitHub
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: {
      es: "Una plataforma de comercio electrónico completa con carrito, pasarela de pagos y panel de administración.",
      en: "A full-stack e-commerce solution with shopping cart, payment gateway, and admin dashboard.",
    },
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    link: "https://mi-ecommerce.com",
    repo: "https://github.com/juanpe/ecommerce",
  },
  {
    id: "qa-dashboard",
    title: "QA Automation Dashboard",
    description: {
      es: "Dashboard para visualizar resultados de pruebas automatizadas en tiempo real con métricas de cobertura.",
      en: "Real-time dashboard for visualizing automated test results with coverage metrics.",
    },
    tags: ["Vue.js", "Firebase", "D3.js", "Cypress"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "https://qa-dash.com",
    repo: "https://github.com/juanpe/qa-dashboard",
  },
  {
    id: "portfolio-v1",
    title: "Modern Portfolio",
    description: {
      es: "Este mismo portafolio, construido con rendimiento y accesibilidad en mente.",
      en: "This portfolio itself, built with performance and accessibility in mind.",
    },
    tags: ["Astro", "React", "Tailwind", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    repo: "https://github.com/juanpe/portfolio",
  },
];
