export type TagKey =
  | "REACT"
  | "TAILWIND"
  | "TYPESCRIPT"
  | "BOOTSTRAP"
  | "HTML"
  | "ASTRO"
  | "NEXTJS"
  | "WORDPRESS"
  | "PHP";

/** Keys under the `projects` block of the i18n files (short card description). */
export type ProjectDescriptionKey =
  | "poolift"
  | "igualitaria"
  | "acargo"
  | "libriInGiro"
  | "hir3d"
  | "comunidadSolar"
  | "starWars"
  | "studioSlow4";

export interface Project {
  /** URL-safe id for the case study detail route: /[lang]/projects/[slug]. */
  slug: string;
  title: string;
  /** i18n key (under `projects`) for the short description shown on the card. */
  descriptionKey: ProjectDescriptionKey;
  link: string;
  github: string;
  image: string;
  tags: TagKey[];
  /**
   * Real client/professional work (true) vs bootcamp practice (false).
   * Drives the "Featured work" / "Other projects" split in Projects.astro.
   */
  featured: boolean;
  /**
   * Set to true ONLY when the case study has real content.
   * While false (default): (1) the "View case" link is hidden on the card, and
   * (2) getStaticPaths skips the detail route entirely — so no placeholder page
   * is ever reachable/indexable in production. Flip to true once the i18n
   * `caseStudies[slug]` placeholders are replaced with real content.
   */
  hasContent?: boolean;
  /**
   * Screenshots of the live site for the case study gallery (language-neutral).
   * Drop the files in /public/projects/case-studies/<slug>/ and list them here,
   * e.g. ["/projects/case-studies/poolift/home.webp"]. While empty/undefined the
   * CaseStudy renders a placeholder box. TODO: add real screenshots.
   */
  gallery?: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "poolift",
    title: "Poolift",
    descriptionKey: "poolift",
    link: "https://poolift.app/",
    github: "https://github.com/FabrizioContu/poolift",
    image: "/projects/poolift.webp",
    tags: ["NEXTJS", "TYPESCRIPT", "TAILWIND"],
    featured: true,
  },
  {
    slug: "la-igualitaria",
    title: "La Igualitaria",
    descriptionKey: "igualitaria",
    link: "https://laigualitaria.coop",
    github: "https://github.com/FabrizioContu/igualitaria-nextjs",
    image: "/projects/igualitaria.webp",
    tags: ["NEXTJS", "TAILWIND", "WORDPRESS"],
    featured: true,
  },
  {
    slug: "acargo",
    title: "Acargo",
    descriptionKey: "acargo",
    link: "https://acargo.org/",
    github: "https://github.com/FabrizioContu/acargo",
    image: "/projects/acargo.webp",
    tags: ["PHP", "HTML"],
    featured: true,
  },
  {
    slug: "libri-in-giro",
    title: "Libri in Giro BCN",
    descriptionKey: "libriInGiro",
    link: "https://libri-in-giro-bcn.vercel.app/",
    github: "https://github.com/FabrizioContu/libri-in-giro-bcn",
    image: "/projects/libriInGiro.webp",
    tags: ["NEXTJS", "TAILWIND"],
    featured: true,
  },
  {
    slug: "hir3d",
    title: "Hir3d",
    descriptionKey: "hir3d",
    link: "https://hir3d.netlify.app/",
    github: "https://github.com/FabrizioContu/HIR3D",
    image: "/projects/hir3d.webp",
    tags: ["REACT", "TAILWIND"],
    featured: false,
  },
  {
    slug: "comunidad-solar",
    title: "Comunidad Solar Poble Sec",
    descriptionKey: "comunidadSolar",
    link: "https://comunidadenergeticapoblesec.netlify.app/",
    github: "https://github.com/FabrizioContu/ComunidadPobleSec",
    image: "/projects/comunidadSolar.webp",
    tags: ["REACT", "TAILWIND", "TYPESCRIPT"],
    featured: true,
  },
  {
    slug: "star-wars",
    title: "Star Wars",
    descriptionKey: "starWars",
    link: "https://sprint-7-fabco.vercel.app/",
    github: "https://github.com/FabrizioContu/STAR-WARS",
    image: "/projects/starWars.webp",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND"],
    featured: false,
  },
  {
    slug: "studio-slow4",
    title: "Studio Slow4",
    descriptionKey: "studioSlow4",
    link: "https://678bb070733ca481fbf8392f--tiny-stroopwafel-34e9e2.netlify.app/",
    github: "",
    image: "/projects/studioSlow4.webp",
    tags: ["HTML", "BOOTSTRAP"],
    featured: false,
  },
];
