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
  // ✅ NUEVOS CAMPOS
  features?: { es: string[]; en: string[] };
  challenges?: { es: string; en: string };
  learnings?: { es: string; en: string };
}

export const projects: Project[] = [
  {
    id: "footer-ecommerce",
    title: "Footer Ecommerce",
    description: {
      es: "Una plataforma de comercio electrónico robusta con arquitectura desacoplada. Frontend en Angular y Backend en Node.js.",
      en: "A robust decoupled e-commerce platform. Angular Frontend and Node.js Backend.",
    },
    tags: ["Node.js", "Express", "Angular", "Tailwind"],
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
        "Carrito de compras",
        "Pasarela de pagos",
        "Panel de administración",
        "Gestión de usuarios",
      ],
      en: [
        "Shopping Cart",
        "Payment Gateway",
        "Admin Dashboard",
        "User Management",
      ],
    },
    challenges: {
      es: "La sincronización entre el estado del frontend y la base de datos en tiempo real fue compleja.",
      en: "Synchronizing frontend state with the database in real-time was complex.",
    },
    learnings: {
      es: "Aprendí a estructurar una API REST escalable y a manejar estados complejos en Angular.",
      en: "I learned how to structure a scalable REST API and handle complex states in Angular.",
    },
  },
  {
    id: "cineva",
    title: "Cineva Social Network",
    description: {
      es: "Red social vertical para amantes del cine con chat en tiempo real.",
      en: "Vertical social network for movie lovers with real-time chat.",
    },
    tags: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL"],
    image: cinevaImage,
    contentImage: cinevaContent,
    gallery: [cinevaContent2, cinevaContent3, cinevaContent4],
    link: "https://cineva.42web.io/",
    repo: "https://github.com/Juanpedrogomezespinosa/cineva",
    features: {
      es: [
        "Chat en tiempo real",
        "Perfiles de usuario",
        "Comentarios y valoraciones",
        "Buscador de películas",
      ],
      en: [
        "Real-time chat",
        "User profiles",
        "Comments and ratings",
        "Movie search",
      ],
    },
    challenges: {
      es: "Implementar el chat en tiempo real utilizando tecnologías estándar sin frameworks modernos.",
      en: "Implementing real-time chat using standard technologies without modern frameworks.",
    },
    learnings: {
      es: "Profundicé en el ciclo de vida de las peticiones HTTP y la gestión de sesiones en PHP.",
      en: "Deepened my understanding of HTTP request lifecycles and PHP session management.",
    },
  },
  {
    id: "buhlandco",
    title: "BuhlandCo Swiss Rentals",
    description: {
      es: "Landing page corporativa para gestión de alquileres vacacionales en Suiza.",
      en: "Corporate landing page for vacation rental management in Switzerland.",
    },
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: buhlandcoImage,
    contentImage: buhlandcoContent,
    gallery: [buhlandcoContent2, buhlandcoContent3, buhlandcoContent4],
    link: "https://buhlandco.com/",
    repo: "https://github.com/CrankierDev/buhlandco-landing-page",
    features: {
      es: [
        "Diseño Responsive",
        "Multi-idioma",
        "Animaciones CSS",
        "Formulario de contacto",
      ],
      en: [
        "Responsive Design",
        "Multi-language",
        "CSS Animations",
        "Contact Form",
      ],
    },
    challenges: {
      es: "Asegurar la compatibilidad perfecta y el rendimiento en todos los dispositivos móviles.",
      en: "Ensuring perfect compatibility and performance across all mobile devices.",
    },
    learnings: {
      es: "Mejoré mis habilidades en CSS avanzado y optimización de assets para web.",
      en: "Improved my skills in advanced CSS and web asset optimization.",
    },
  },
];
