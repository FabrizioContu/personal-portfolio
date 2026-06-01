export const en = {
  lang: "en",
  title: "Portfolio by Fabrizio Contu - FrontEnd Developer",
  description:
    "Accessible, multilingual frontend development — React/Next & headless WordPress — for cooperatives, clubs and SMEs in Barcelona.",
  nav: {
    projects: "Projects",
    aboutMe: "About me",
    contact: "Contact",
  },
  hero: {
    profileAlt: "Profile photo of Fabrizio Contu",
    greeting: "Hey, I'm Fabrizio",
    badge: "Available for projects",
    descriptionHtml:
      '<span class="text-teal-600 dark:text-teal-400 font-semibold">Accessible, multilingual</span> frontend development for cooperatives, clubs and SMEs in Barcelona. <span class="text-teal-600 dark:text-teal-400 font-semibold">React/Next + headless WordPress</span>.',
    copyTitle: "Copy fab.contu@gmail.com",
    copyAriaLabel: "Copy email address",
    cvFile: "CV_EN.pdf",
    downloadCV: "Download CV",
    downloadAriaLabel: "Download CV",
    emailCopiedLabel: "Email",
    emailCopiedSuffix: "copied",
  },
  sections: {
    projects: "Projects",
    featuredWork: "Featured work",
    otherProjects: "Other projects",
    testimonials: "Testimonials",
    aboutMe: "About me",
  },
  projects: {
    viewCode: "View code",
    visitSite: "Go to website",
    viewCase: "View case",
    poolift: "Web app for organizing group birthday gifts.",
    igualitaria: "Creation of a website for a Barcelona Cooperative.",
       acargo:
      "Newsletter for family caregivers with practical guides on public assistance, useful tools, and caregiver wellness.",
    libriInGiro:
      "Book-sharing platform for the Italian community in Barcelona. Browse and borrow books by neighbourhood.",
    hir3d: "Creation of an AI-powered interview simulator.",
    comunidadSolar:
      "Development of a web interface for a solar energy simulator.",
    starWars:
      "Web app with Register and Login. Fetching and displaying data from an external API.",
    studioSlow4: "Website prototype created entirely with HTML and Bootstrap.",
  },
  // UI labels for the case study detail pages.
  caseStudy: {
    back: "Back to projects",
    problem: "The challenge",
    solution: "The solution",
    result: "The result",
    stack: "Stack",
  },
  // Long-form content per project slug. TODO: replace [...] placeholders with real
  // content, then flip `hasContent: true` in src/data/projects.ts to publish the page.
  caseStudies: {
    poolift: { problem: "[...]", solution: "[...]", result: "[...]" },
    "la-igualitaria": { problem: "[...]", solution: "[...]", result: "[...]" },
    acargo: { problem: "[...]", solution: "[...]", result: "[...]" },
    "libri-in-giro": { problem: "[...]", solution: "[...]", result: "[...]" },
    hir3d: { problem: "[...]", solution: "[...]", result: "[...]" },
    "comunidad-solar": { problem: "[...]", solution: "[...]", result: "[...]" },
    "star-wars": { problem: "[...]", solution: "[...]", result: "[...]" },
    "studio-slow4": { problem: "[...]", solution: "[...]", result: "[...]" },
  },
  about: {
    p1Html:
      '<span class="text-teal-600 dark:text-teal-400 font-mono">From WordPress to programming</span>. What started as an interest in designing websites turned into a journey through the world of development.',
    p2Html:
      'My goal is to keep growing as a Front-End Developer, combining my <span class="text-teal-600 dark:text-teal-400 font-mono">passion for design and web accessibility</span> with the latest technologies like <span class="text-teal-600 dark:text-teal-400 font-mono">Astro and Next.js.</span>',
    p3: "I aspire to build inclusive, sustainable, and dynamic digital experiences, working with teams committed to innovation and positive impact.",
  },
  contact: {
    hasProject: "Do you have a project?",
    letWork: "Let's work together",
    contactMe: "Contact me!",
    ariaLabel: "contact",
  },
  footer: {
    aboutMe: "About me",
    contact: "Contact",
    inspired: "Inspired by Midudev",
  },
};

export type Translations = typeof en;
