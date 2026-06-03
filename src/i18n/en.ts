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
      '<span class="text-terracotta-700 font-semibold">Accessible, multilingual</span> frontend development for cooperatives, clubs and SMEs in Barcelona. <span class="text-terracotta-700 font-semibold">React/Next + headless WordPress</span>.',
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
    gallery: "Screenshots",
    problem: "The challenge",
    solution: "The solution",
    metrics: "Key results",
    result: "The result",
    stack: "Stack",
    galleryPlaceholder: "[ Screenshots of the site — add to /public/projects/case-studies/<slug>/ ]",
  },
  // Long-form content per project slug. TODO: replace [...] placeholders with real
  // content (never invent metrics), then flip `hasContent: true` in
  // src/data/projects.ts to publish the page.
  caseStudies: {
    poolift: {
      problem: "[...]",
      solution: "[...]",
      result: "[...]",
      metrics: [
        { value: "[data]", label: "[what it measures]" },
        { value: "[data]", label: "[what it measures]" },
        { value: "[data]", label: "[what it measures]" },
      ],
    },
    "la-igualitaria": {
      problem: "[...]",
      solution: "[...]",
      result: "[...]",
      metrics: [
        { value: "[data]", label: "[what it measures]" },
        { value: "[data]", label: "[what it measures]" },
        { value: "[data]", label: "[what it measures]" },
      ],
    },
    acargo: {
      problem: "[...]",
      solution: "[...]",
      result: "[...]",
      metrics: [
        { value: "[data]", label: "[what it measures]" },
        { value: "[data]", label: "[what it measures]" },
        { value: "[data]", label: "[what it measures]" },
      ],
    },
    "libri-in-giro": {
      problem: "[...]",
      solution: "[...]",
      result: "[...]",
      metrics: [
        { value: "[data]", label: "[what it measures]" },
        { value: "[data]", label: "[what it measures]" },
        { value: "[data]", label: "[what it measures]" },
      ],
    },
    hir3d: {
      problem: "[...]",
      solution: "[...]",
      result: "[...]",
      metrics: [
        { value: "[data]", label: "[what it measures]" },
        { value: "[data]", label: "[what it measures]" },
        { value: "[data]", label: "[what it measures]" },
      ],
    },
    "comunidad-solar": {
      problem: "[...]",
      solution: "[...]",
      result: "[...]",
      metrics: [
        { value: "[data]", label: "[what it measures]" },
        { value: "[data]", label: "[what it measures]" },
        { value: "[data]", label: "[what it measures]" },
      ],
    },
    "star-wars": {
      problem: "[...]",
      solution: "[...]",
      result: "[...]",
      metrics: [
        { value: "[data]", label: "[what it measures]" },
        { value: "[data]", label: "[what it measures]" },
        { value: "[data]", label: "[what it measures]" },
      ],
    },
    "studio-slow4": {
      problem: "[...]",
      solution: "[...]",
      result: "[...]",
      metrics: [
        { value: "[data]", label: "[what it measures]" },
        { value: "[data]", label: "[what it measures]" },
        { value: "[data]", label: "[what it measures]" },
      ],
    },
  },
 about: {
  p1Html:
    '<span class="text-terracotta-700 font-semibold">From WordPress to modern development</span>. What began as a passion for designing websites became a path into building them properly — accessible, fast, and multilingual.',
  p2Html:
    'Today I help <span class="text-terracotta-700 font-semibold">cooperatives, clubs and SMEs in Barcelona</span> build inclusive, bilingual websites with <span class="text-terracotta-700 font-semibold">React/Next and headless WordPress</span>.',
  p3: "I care about sites that work for everyone: standards-compliant accessibility, real multilingual support, and code your team can maintain.",
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
    inspired: "Fabrizio Contu",
  },
};

export type Translations = typeof en;
