import type { Translations } from "./en";

export const es: Translations = {
  lang: "es",
  title: "Portfolio de Fabrizio Contu - Programador y Desarrollador FrontEnd",
  description:
    "Desarrollo frontend accesible y multilingüe — React/Next y WordPress headless — para cooperativas, clubes y pymes en Barcelona.",
  nav: {
    projects: "Proyectos",
    aboutMe: "Sobre mí",
    contact: "Contacto",
  },
  hero: {
    profileAlt: "Foto de perfil de Fabrizio Contu",
    greeting: "Ciao, soy Fabrizio",
    badge: "Disponible para proyectos",
    descriptionHtml:
      'Desarrollo frontend <span class="text-teal-600 dark:text-teal-400 font-semibold">accesible y multilingüe</span> para cooperativas, clubes y pymes de Barcelona. <span class="text-teal-600 dark:text-teal-400 font-semibold">React/Next + WordPress headless</span>.',
    copyTitle: "Copiar fab.contu@gmail.com",
    copyAriaLabel: "Copiar correo electrónico",
    cvFile: "CV_ES.pdf",
    downloadCV: "Descargar CV",
    downloadAriaLabel: "Descargar CV",
    emailCopiedLabel: "Correo",
    emailCopiedSuffix: "copiado",
  },
  sections: {
    projects: "Proyectos",
    featuredWork: "Trabajos destacados",
    otherProjects: "Otros proyectos",
    testimonials: "Testimonios",
    aboutMe: "Sobre mí",
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
      '<span class="text-teal-600 dark:text-teal-400 font-mono">De WordPress a la programación</span>. Lo que comenzó como un interés por diseñar sitios web se transformó en un viaje por el mundo del desarrollo.',
    p2Html:
      'Mi objetivo es seguir desarrollándome como Front-End Developer, integrando mi <span class="text-teal-600 dark:text-teal-400 font-mono">pasión por el diseño y la accesibilidad web</span> con las últimas tecnologías como <span class="text-teal-600 dark:text-teal-400 font-mono">Astro y Next.js.</span>',
    p3: "Aspiro a construir experiencias digitales inclusivas, sostenibles y dinámicas, trabajando con equipos comprometidos con la innovación y el impacto positivo.",
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
    inspired: "Inspirado en Midudev",
  },
};
