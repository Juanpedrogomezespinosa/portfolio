import type { ImageMetadata } from "astro";

// Portadas
import footerImage from "@/assets/footer-portada.png";
import cinevaImage from "@/assets/cineva-portada.png";
import buhlandcoImage from "@/assets/buhlandco-portada.png";
import cdjPortada from "@/assets/cdj-portada.jpeg";

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

// Contenido Camel & DJ Juanpe
import cdjContent from "@/assets/cdj-content-1.png";
import cdjContent2 from "@/assets/cdj-content-2.png";
import cdjContent3 from "@/assets/cdj-content-3.png";
import cdjContent4 from "@/assets/cdj-content-4.png";
import cdjContent5 from "@/assets/cdj-content-5.png";
import cdjContent6 from "@/assets/cdj-content-6.png";

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
    link: "https://footer-shop.vercel.app",
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
    id: "camel-dj-juanpe",
    title: "Camel & DJ Juanpe",
    description: {
      es: "Sitio web oficial para el dúo musical Camel & DJ Juanpe. Una experiencia inmersiva con estética urbana que centraliza discografía, videoclips y gestión de eventos.",
      en: "Official website for the musical duo Camel & DJ Juanpe. An immersive experience with urban aesthetics that centralizes discography, music videos, and event management.",
    },
    tags: ["Astro", "React", "Tailwind CSS", "Cloudflare", "Brevo"],
    image: cdjPortada,
    contentImage: cdjContent,
    gallery: [cdjContent2, cdjContent3, cdjContent4, cdjContent5, cdjContent6],
    link: "https://camel-dj-juanpe.vercel.app",
    repo: "https://github.com/Juanpedrogomezespinosa/camel-dj-juanpe",
    features: {
      es: [
        "Streaming y descarga de audio optimizada (Cloudflare)",
        "Reproductores de Audio/Video propios (Custom Hooks)",
        "Newsletter (Brevo) y Contacto automático (EmailJS)",
        "Sistema de Gira con fechas y enlaces a plataformas",
      ],
      en: [
        "Optimized audio streaming & download (Cloudflare)",
        "Custom-built Audio/Video players (Custom Hooks)",
        "Newsletter (Brevo) & Auto-contact (EmailJS)",
        "Tour System with dates and platform links",
      ],
    },
    challenges: {
      es: "El reto técnico principal fue desarrollar reproductores multimedia personalizados desde cero para tener control total sobre la UI y el estado, sin depender de librerías externas. Además, integrar la entrega de contenido pesado (música/vídeo) mediante Cloudflare garantizando una latencia mínima y una experiencia fluida en cualquier dispositivo.",
      en: "The main technical challenge was developing custom media players from scratch to have full control over UI and state, without relying on external libraries. Additionally, integrating heavy content delivery (music/video) via Cloudflare while ensuring minimal latency and a smooth experience on any device.",
    },
    learnings: {
      es: "Profundicé en el manejo de la API HTMLMediaElement y la gestión de streams de datos. Aprendí a orquestar servicios de terceros (BaaS) como Brevo y EmailJS dentro de una arquitectura estática, logrando una web totalmente funcional e interactiva sin necesidad de mantener un backend complejo.",
      en: "I deepened my understanding of the HTMLMediaElement API and data stream management. I learned to orchestrate third-party services (BaaS) like Brevo and EmailJS within a static architecture, achieving a fully functional and interactive website without the need to maintain a complex backend.",
    },
  },
  {
    id: "cineva",
    title: "Cineva",
    description: {
      es: "Red social vertical para cinéfilos desarrollada con arquitectura PHP nativa y lógica asíncrona avanzada.",
      en: "Vertical social network for film buffs developed with native PHP architecture and advanced asynchronous logic.",
    },
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    image: cinevaImage,
    contentImage: cinevaContent,
    gallery: [cinevaContent2, cinevaContent3, cinevaContent4],
    link: "https://cineva.42web.io/",
    repo: "https://github.com/Juanpedrogomezespinosa/cineva",
    features: {
      es: [
        "Chat en tiempo real (Lógica JavaScript personalizada)",
        "Feed Social (Likes, Comentarios, Amigos)",
        "Buscador dinámico de películas",
        "Diseño CSS puro sin frameworks",
      ],
      en: [
        "Real-time Chat (Custom JavaScript Logic)",
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
        "Optimización de activos (Core Web Vitals)",
      ],
      en: [
        "JSON Internationalization (ES/EN/DE)",
        "Complex Keyframe Animations",
        "Custom Client UI/UX Design",
        "Asset Optimization (Core Web Vitals)",
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
