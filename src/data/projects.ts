import type { ImageMetadata } from "astro";
// Portadas
import footerImage from "@/assets/footer-portada.png";
import cinevaImage from "@/assets/cineva-portada.png";
import buhlandcoImage from "@/assets/buhlandco-portada.png";

// Contenido Footer
import footerContent from "@/assets/footer-content.png";
import footerContent2 from "@/assets/footer-content-2.png";
import footerContent3 from "@/assets/footer-content-3.png";
import footerContent4 from "@/assets/footer-content-4.png";
import footerContent5 from "@/assets/footer-content-5.png";
import footerContent6 from "@/assets/footer-content-6.png";
import footerContent7 from "@/assets/footer-content-7.png";
import footerContent8 from "@/assets/footer-content-8.png";
import footerContent9 from "@/assets/footer-content-9.png";

// Contenido Cineva
import cinevaContent from "@/assets/cineva-content.png";
import cinevaContent2 from "@/assets/cineva-content-2.png";
import cinevaContent3 from "@/assets/cineva-content-3.png";
import cinevaContent4 from "@/assets/cineva-content-4.png";

// Contenido BuhlandCo
import buhlandcoContent from "@/assets/buhlandco-content.png";
import buhlandcoContent2 from "@/assets/buhlandco-content-2.png";
import buhlandcoContent3 from "@/assets/buhlandco-content-3.png";
import buhlandcoContent4 from "@/assets/buhlandco-content-4.png";

export interface Project {
  id: string;
  title: string;
  description: { es: string; en: string };
  tags: string[];
  image: ImageMetadata;
  contentImage: ImageMetadata;
  gallery?: ImageMetadata[];
  link?: string;
  repo?: string;
  repoBack?: string;
  // Campos extendidos para narrativa Senior
  features?: { es: string[]; en: string[] };
  challenges?: { es: string; en: string };
  learnings?: { es: string; en: string };
}

export const projects: Project[] = [
  {
    id: "footer-ecommerce",
    title: "Footer",
    description: {
      es: "Ecosistema de comercio electrónico completo con arquitectura desacoplada. Backend seguro en Node.js y Frontend reactivo en Angular, diseñado para escalar.",
      en: "Complete e-commerce ecosystem with decoupled architecture. Secure Node.js Backend and reactive Angular Frontend, designed for scalability.",
    },
    tags: ["Node.js", "MySQL", "Express", "Angular", "Tailwind", "JWT"],
    image: footerImage,
    contentImage: footerContent,
    gallery: [
      footerContent2,
      footerContent3,
      footerContent4,
      footerContent5,
      footerContent6,
      footerContent7,
      footerContent8,
      footerContent9,
    ],
    repo: "https://github.com/Juanpedrogomezespinosa/footer-front",
    repoBack: "https://github.com/Juanpedrogomezespinosa/footer-back",
    features: {
      es: [
        "Control de Acceso basado en Roles (RBAC: Admin/User)",
        "Dashboard Analítico (KPIs, Ventas, Stock)",
        "Notificaciones transaccionales por Email",
        "Variantes de productos complejas (Color/Precio/Stock)",
      ],
      en: [
        "Role-Based Access Control (RBAC: Admin/User)",
        "Analytical Dashboard (KPIs, Sales, Stock)",
        "Transactional Email Notifications",
        "Complex Product Variants (Color/Price/Stock)",
      ],
    },
    challenges: {
      es: "El mayor reto fue modelar la base de datos relacional para soportar 'Familias de Productos'. Necesitaba que un producto padre (ej: Zapatilla Modelo X) tuviera múltiples hijos variantes, cada uno con su propio precio y stock independiente, manteniendo la integridad referencial en los pedidos.",
      en: "The biggest challenge was modeling the relational database to support 'Product Families'. I needed a parent product (e.g., Shoe Model X) to have multiple variant children, each with its own independent price and stock, while maintaining referential integrity in orders.",
    },
    learnings: {
      es: "Consolidé mis conocimientos en seguridad (JWT, Hashing de contraseñas) y aprendí a orquestar flujos de negocio completos: desde el registro y validación por email hasta la gestión de estados de pedido (Enviado/Cancelado) en tiempo real.",
      en: "I solidified my knowledge in security (JWT, Password Hashing) and learned to orchestrate complete business flows: from registration and email validation to real-time order status management (Shipped/Cancelled).",
    },
  },
  {
    id: "cineva",
    title: "Cineva",
    description: {
      es: "Red social vertical para cinéfilos desarrollada con arquitectura PHP nativa y lógica asíncrona avanzada.",
      en: "Vertical social network for film buffs developed with native PHP architecture and advanced asynchronous logic.",
    },
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Vanilla JS"],
    image: cinevaImage,
    contentImage: cinevaContent,
    gallery: [cinevaContent2, cinevaContent3, cinevaContent4],
    link: "https://cineva.42web.io/",
    repo: "https://github.com/Juanpedrogomezespinosa/cineva",
    features: {
      es: [
        "Chat en tiempo real (Lógica JS personalizada)",
        "Feed Social (Likes, Comentarios, Amigos)",
        "Buscador dinámico de películas",
        "Diseño CSS puro sin frameworks",
      ],
      en: [
        "Real-time Chat (Custom JS Logic)",
        "Social Feed (Likes, Comments, Friends)",
        "Dynamic Movie Search",
        "Pure CSS Design without frameworks",
      ],
    },
    challenges: {
      es: "Implementar un sistema de chat en tiempo real funcional utilizando únicamente JavaScript Vanilla y PHP, gestionando el polling y el estado del DOM sin depender de librerías externas. Además, crear un diseño responsive complejo usando solo CSS puro.",
      en: "Implementing a functional real-time chat system using only Vanilla JavaScript and PHP, managing polling and DOM state without relying on external libraries. Also, creating a complex responsive design using only pure CSS.",
    },
    learnings: {
      es: "Dominio profundo de la manipulación asíncrona del DOM y optimización de consultas SQL complejas (JOINS) para las relaciones sociales (Amistades/Posts).",
      en: "Deep mastery of asynchronous DOM manipulation and optimization of complex SQL queries (JOINS) for social relationships (Friendships/Posts).",
    },
  },
  {
    id: "buhlandco",
    title: "Buhl And Co",
    description: {
      es: "Experiencia web corporativa de alto rendimiento con diseño suizo minimalista e internacionalización.",
      en: "High-performance corporate web experience with minimalist Swiss design and internationalization.",
    },
    tags: ["HTML5", "CSS3", "JavaScript", "i18n", "Animations"],
    image: buhlandcoImage,
    contentImage: buhlandcoContent,
    gallery: [buhlandcoContent2, buhlandcoContent3, buhlandcoContent4],
    link: "https://buhlandco.com/",
    repo: "https://github.com/CrankierDev/buhlandco-landing-page",
    features: {
      es: [
        "Internacionalización JSON (ES/EN/DE)",
        "Animaciones complejas por Keyframes",
        "Diseño UI/UX a medida del cliente",
      ],
      en: [
        "JSON Internationalization (ES/EN/DE)",
        "Complex Keyframe Animations",
        "Asset Optimization (Core Web Vitals)",
        "Custom Client UI/UX Design",
      ],
    },
    challenges: {
      es: "El desafío visual principal fue la animación del logotipo: debía transicionar fluidamente desde el cuerpo de la página hasta incrustarse en la barra de navegación al hacer scroll, requiriendo cálculos precisos de Keyframes y manejo de eventos de scroll.",
      en: "The main visual challenge was the logo animation: it had to transition fluidly from the page body to embed itself into the navigation bar upon scrolling, requiring precise Keyframe calculations and scroll event handling.",
    },
    learnings: {
      es: "Perfeccioné la arquitectura CSS para animaciones de alto rendimiento y desarrollé un sistema ligero de gestión de idiomas basado en JSON para evitar sobrecarga en el servidor.",
      en: "I perfected CSS architecture for high-performance animations and developed a lightweight JSON-based language management system to avoid server overhead.",
    },
  },
];
