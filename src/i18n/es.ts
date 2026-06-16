import type { Translations } from "./en";

export const es: Translations = {
  lang: "es",
  title: "Portfolio de Fabrizio Contu - Programador y Desarrollador FrontEnd",
  description:
    "Desarrollo frontend accesible y multilingüe — React/Next y WordPress headless — para cooperativas, clubes y pymes en Barcelona.",
  nav: {
    experience: "Experiencia",
    projects: "Proyectos",
    aboutMe: "Sobre mí",
    contact: "Contacto",
  },
  hero: {
    profileAlt: "Foto de perfil de Fabrizio Contu",
    greeting: "Ciao, soy Fabrizio",
    badge: "Disponible para proyectos",
    descriptionHtml:
      'Desarrollo frontend <span class="text-terracotta-700 font-semibold">accesible y multilingüe</span> para cooperativas, clubes y pymes de Barcelona. <span class="text-terracotta-700 font-semibold">React/Next + WordPress headless</span>.',
    copyTitle: "Copiar fab.contu@gmail.com",
    copyAriaLabel: "Copiar correo electrónico",
    cvFile: "CV_ES.pdf",
    downloadCV: "Descargar CV",
    downloadAriaLabel: "Descargar CV",
    emailCopiedLabel: "Correo",
    emailCopiedSuffix: "copiado",
  },
  sections: {
    experience: "Experiencia Laboral",
    featuredExperience: "Roles actuales y recientes",
    otherExperience: "Roles anteriores",
    projects: "Proyectos",
    featuredWork: "Trabajos destacados",
    otherProjects: "Otros proyectos",
    testimonials: "Testimonios",
    aboutMe: "Sobre mí",
  },
  experience: {
    present: "Actualidad",
    visitCompany: "Visitar empresa",
    igualitaria:
      "Desarrollo y mantenimiento de una aplicación web accesible y escalable para una cooperativa de Barcelona. Funcionalidades con React y TypeScript sobre una arquitectura frontend desacoplada, con mejora continua de UX, rendimiento y accesibilidad WCAG.",
    itAcademy:
      "Revisión de código, refactorización y desarrollo de nuevas funcionalidades en un proyecto frontend colaborativo en entorno Agile (Scrum), aplicando principios SOLID, código limpio, integración con APIs REST y pruebas unitarias.",
    cervezartesana:
      "Gestión y evolución de la plataforma tras la migración de Magento a WordPress. Configuración de WooCommerce con más de 1.000 productos, integración de dropshipping y optimización SEO que incrementó el tráfico orgánico.",
    slow4:
      "Cofundador de una plataforma de turismo responsable y sostenible. Lideré el desarrollo y la gestión con WordPress, coordinando producto, contenido y tecnología.",
  },
  projects: {
    viewCode: "Ver código",
    visitSite: "Ir a sitio web",
    viewCase: "Ver caso",
    poolift: "Aplicación web para organizar regalos de cumpleaños en grupo.",
    igualitaria: "Creación de una página web para una Cooperativa de Barcelona.",
      acargo:
      "Newsletter para cuidadores familiares con guías prácticas sobre ayudas públicas, herramientas útiles y bienestar del cuidador.",
    libriInGiro:
      "Plataforma de intercambio de libros para la comunidad italiana en Barcelona. Explora y pides libros prestados por barrio.",
    hir3d: "Creación de un simulador de entrevistas con IA.",
    comunidadSolar:
      "Desarrollo de una interfaz web para un simulador de energía solar.",
    starWars:
      "Aplicación web con Registro y Login. Consumo y visualización de los datos de una API externa.",
    studioSlow4: "Prototipo Website creado integralmente con Html y Bootstrap.",
  },
  // Etiquetas de UI para las páginas de detalle de case study.
  caseStudy: {
    back: "Volver a proyectos",
    gallery: "Capturas",
    problem: "El desafío",
    solution: "La solución",
    metrics: "Resultados clave",
    result: "El resultado",
    stack: "Stack",
    galleryPlaceholder: "[ Capturas del sitio — agregar en /public/projects/case-studies/<slug>/ ]",
  },
  // Contenido por slug de proyecto. TODO: reemplazar los placeholders [...] con
  // contenido real (nunca inventar métricas) y luego poner `hasContent: true` en
  // src/data/projects.ts para publicar.
  caseStudies: {
    poolift: {
      problem: "[...]",
      solution: "[...]",
      result: "[...]",
      metrics: [
        { value: "[dato]", label: "[qué mide]" },
        { value: "[dato]", label: "[qué mide]" },
        { value: "[dato]", label: "[qué mide]" },
      ],
    },
    "la-igualitaria": {
      problem: "[...]",
      solution: "[...]",
      result: "[...]",
      metrics: [
        { value: "[dato]", label: "[qué mide]" },
        { value: "[dato]", label: "[qué mide]" },
        { value: "[dato]", label: "[qué mide]" },
      ],
    },
    acargo: {
      problem: "[...]",
      solution: "[...]",
      result: "[...]",
      metrics: [
        { value: "[dato]", label: "[qué mide]" },
        { value: "[dato]", label: "[qué mide]" },
        { value: "[dato]", label: "[qué mide]" },
      ],
    },
    "libri-in-giro": {
      problem: "[...]",
      solution: "[...]",
      result: "[...]",
      metrics: [
        { value: "[dato]", label: "[qué mide]" },
        { value: "[dato]", label: "[qué mide]" },
        { value: "[dato]", label: "[qué mide]" },
      ],
    },
    hir3d: {
      problem: "[...]",
      solution: "[...]",
      result: "[...]",
      metrics: [
        { value: "[dato]", label: "[qué mide]" },
        { value: "[dato]", label: "[qué mide]" },
        { value: "[dato]", label: "[qué mide]" },
      ],
    },
    "comunidad-solar": {
      problem: "[...]",
      solution: "[...]",
      result: "[...]",
      metrics: [
        { value: "[dato]", label: "[qué mide]" },
        { value: "[dato]", label: "[qué mide]" },
        { value: "[dato]", label: "[qué mide]" },
      ],
    },
    "star-wars": {
      problem: "[...]",
      solution: "[...]",
      result: "[...]",
      metrics: [
        { value: "[dato]", label: "[qué mide]" },
        { value: "[dato]", label: "[qué mide]" },
        { value: "[dato]", label: "[qué mide]" },
      ],
    },
    "studio-slow4": {
      problem: "[...]",
      solution: "[...]",
      result: "[...]",
      metrics: [
        { value: "[dato]", label: "[qué mide]" },
        { value: "[dato]", label: "[qué mide]" },
        { value: "[dato]", label: "[qué mide]" },
      ],
    },
  },
 about: {
  p1Html:
    '<span class="text-terracotta-700 font-semibold">De WordPress a la programación moderna</span>. Lo que empezó como pasión por diseñar webs se convirtió en el camino de construirlas bien: accesibles, rápidas y multilingües.',
  p2Html:
    'Hoy ayudo a <span class="text-terracotta-700 font-semibold">cooperativas, clubes y pymes de Barcelona</span> a tener webs inclusivas y bilingües con <span class="text-terracotta-700 font-semibold">React/Next y WordPress headless</span>.',
  p3: "Me importan los sitios que funcionan para todo el mundo: accesibilidad según estándares, soporte multilingüe real y código que tu equipo pueda mantener.",
},
  contact: {
    hasProject: "¿Tienes algún proyecto?",
    letWork: "Trabajemos juntos",
    contactMe: "¡Contáctame!",
    ariaLabel: "contactar",
  },
  footer: {
    aboutMe: "Sobre mi",
    contact: "Contacto",
    inspired: "Fabrizio Contu",
  },
};
