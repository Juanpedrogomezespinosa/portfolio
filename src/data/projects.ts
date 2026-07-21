import type { ImageMetadata } from "astro";

// Portadas
import quarkTechieImage from "@/assets/quark-techie.png";
import qualisophyPortada from "@/assets/qualisophy-portada.jpeg";
import footerImage from "@/assets/footer-portada.jpeg";
import cinevaImage from "@/assets/cineva-portada.jpeg";
import buhlandcoImage from "@/assets/buhlandco-portada.jpeg";
import cdjPortada from "@/assets/cdj-portada.jpeg";

// Contenido Quark Techie
import quarkTechieContent from "@/assets/quark-techie-content.png";
import quarkTechieContent2 from "@/assets/quark-techie-content-2.png";
import quarkTechieContent4 from "@/assets/quark-techie-content-4.png";
import quarkTechieContent5 from "@/assets/quark-techie-content-5.png";
import quarkTechieContent6 from "@/assets/quark-techie-content-6.png";

// Contenido Qualisophy
import qualisophyContent from "@/assets/qualisophy-content.png";
import qualisophyContent2 from "@/assets/qualisophy-content-2.png";
import qualisophyContent3 from "@/assets/qualisophy-content-3.png";
import qualisophyContent4 from "@/assets/qualisophy-content-4.png";

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
  role?: { es: string[]; en: string[] }; // Añadido el nuevo campo
}

export const projects: Project[] = [
  {
    id: "quark-techie",
    title: "Quark Techie",
    description: {
      es: "Landing corporativa de alto impacto para Quark Techie, consultora tecnológica especializada en desarrollo de software, talento IT y consultoría. Identidad visual premium inspirada en el ecosistema Apple, combinando glassmorphism y microinteracciones.",
      en: "High-impact corporate landing page for Quark Techie, a tech consultancy specializing in software development, IT talent, and consulting. Premium visual identity inspired by the Apple ecosystem, combining glassmorphism and micro-interactions.",
    },
    tags: [
      "Astro",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Make",
    ],
    image: quarkTechieImage,
    contentImage: quarkTechieContent,
    gallery: [
      quarkTechieContent2,
      quarkTechieContent4,
      quarkTechieContent5,
      quarkTechieContent6,
    ],
    link: "https://quark-techie.com/",
    features: {
      es: [
        "Diseño y desarrollo web integral (UI/UX personalizada)",
        "Estética Glassmorphism con inspiración en Apple",
        "Landing multipágina optimizada para conversión",
        "Catálogo de soluciones con búsqueda y filtros dinámicos",
        "Formularios de contacto automatizados mediante Make",
        "Gestión del consentimiento de cookies con CookieYes",
        "Arquitectura responsive optimizada para escritorio, tablet y móvil",
      ],
      en: [
        "End-to-end web design and development (Custom UI/UX)",
        "Apple-inspired Glassmorphism aesthetics",
        "Conversion-optimized multi-page landing",
        "Solutions catalog with dynamic search and filters",
        "Automated contact forms via Make",
        "Cookie consent management with CookieYes",
        "Responsive architecture optimized for desktop, tablet, and mobile",
      ],
    },
    challenges: {
      es: "El mayor reto fue trasladar una identidad visual muy cuidada a una aplicación web manteniendo un excelente rendimiento. Desarrollé una arquitectura basada en componentes reutilizables, optimizando efectos visuales (transparencias, desenfoques, animaciones) sin comprometer la carga. Además, automaticé el flujo de contacto mediante Make para centralizar solicitudes sin necesidad de un backend tradicional. A nivel de dinámica de trabajo, el reto fue colaborar y organizar a un grupo de desarrollo en prácticas, asegurando la coherencia técnica del producto.",
      en: "The biggest challenge was translating a highly refined visual identity into a web app while maintaining excellent performance. I developed a reusable component architecture, optimizing visual effects without compromising load speed. I also automated the contact flow using Make to centralize requests without a traditional backend. On a workflow level, the challenge was collaborating with and organizing an intern development group, ensuring the technical consistency of the product.",
    },
    learnings: {
      es: "Este proyecto supuso un paso importante en mi evolución como desarrollador. Descubrí que enseñar y acompañar a otros desarrolladores no solo mejora el resultado conjunto, sino que también refuerza enormemente el propio conocimiento al explicar decisiones de arquitectura y revisar código. También perfeccioné la construcción de interfaces premium, equilibrando diseño, rendimiento y UX.",
      en: "This project was a significant step in my evolution as a developer. I discovered that teaching and supporting other developers not only improves the overall result but also greatly reinforces one's own knowledge when explaining architectural decisions and reviewing code. I also perfected building premium interfaces, balancing design, performance, and UX.",
    },
    role: {
      es: [
        "Diseño de la arquitectura Frontend.",
        "Desarrollo de la interfaz completa.",
        "Apoyo y mentoría a desarrolladores en prácticas.",
        "Revisión de código (Code Review).",
        "Organización y reparto de tareas.",
        "Integración de automatizaciones con Make.",
        "Despliegue y puesta en producción.",
      ],
      en: [
        "Frontend architecture design.",
        "Full interface development.",
        "Support and mentoring for intern developers.",
        "Code Review.",
        "Task organization and distribution.",
        "Make automation integration.",
        "Deployment and production setup.",
      ],
    },
  },
  {
    id: "qualisophy-web",
    title: "Qualisophy",
    description: {
      es: "Sitio web corporativo e-learning para centro de formación tecnológica en Málaga. Plataforma orientada a la empleabilidad con catálogo dinámico y automatizaciones avanzadas.",
      en: "Corporate e-learning website for a tech training center in Malaga. An employability-focused platform with a dynamic catalog and advanced automations.",
    },
    tags: ["Astro", "React", "Tailwind CSS", "Make", "Abstract API", "Brevo"],
    image: qualisophyPortada,
    contentImage: qualisophyContent,
    gallery: [qualisophyContent2, qualisophyContent3, qualisophyContent4],
    link: "https://www.qualisophy.com/",
    features: {
      es: [
        "Diseño y desarrollo web integral (UI/UX a medida)",
        "Catálogo de cursos y Blog con barra de búsqueda y filtros dinámicos",
        "Validación de emails en tiempo real anti-spam (Abstract API)",
        "Enrutamiento dinámico de formularios (Contacto, Partners, Cursos)",
        "Automatización de base de datos en Excel y Newsletter (Make + Brevo)",
      ],
      en: [
        "End-to-end web design and development (Custom UI/UX)",
        "Course catalog and Blog with search bar and dynamic filters",
        "Real-time anti-spam email validation (Abstract API)",
        "Dynamic form routing (Contact, Partners, Courses)",
        "Excel database automation and Newsletter integration (Make + Brevo)",
      ],
    },
    challenges: {
      es: "El principal reto técnico fue orquestar toda la lógica de negocio sin un servidor backend tradicional. Diseñé un flujo automatizado complejo con Make que intercepta los envíos, valida la veracidad del correo mediante Abstract API, detecta la URL de origen para clasificar la solicitud y registra los datos organizados automáticamente en una base de datos de Excel.",
      en: "The main technical challenge was orchestrating all business logic without a traditional backend server. I designed a complex automated workflow with Make that intercepts submissions, validates email authenticity via Abstract API, detects the origin URL to categorize the request, and automatically logs organized data into an Excel database.",
    },
    learnings: {
      es: "Perfeccioné la arquitectura de sitios estáticos integrando servicios BaaS (Backend as a Service). Aprendí a construir flujos de trabajo (Webhooks) robustos y a implementar lógica de filtrado compleja en el lado del cliente usando React dentro del ecosistema de Astro.",
      en: "I perfected static site architecture by integrating BaaS (Backend as a Service) solutions. I learned to build robust workflows (Webhooks) and implement complex client-side filtering logic using React within the Astro ecosystem.",
    },
  },
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
