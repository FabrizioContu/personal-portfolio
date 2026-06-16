/** Keys under the `experience` block of the i18n files (short role description). */
export type ExperienceKey =
  | "igualitaria"
  | "itAcademy"
  | "cervezartesana"
  | "slow4";

export interface WorkExperience {
  /** Company / project name (language-neutral). */
  company: string;
  /** Job title — kept in English in both languages, as on the CV. */
  role: string;
  /** City (language-neutral). */
  location: string;
  /** Start date, e.g. "02/2024". */
  start: string;
  /** End date. Omitted = still ongoing → renders t.experience.present. */
  end?: string;
  /** i18n key (under `experience`) for the short description shown on the card. */
  descriptionKey: ExperienceKey;
  /** Company link. Button only renders when present (same as Projects). */
  link?: string;
  /** Plain-text technology pills (no icons, unlike project TagKey). */
  tags: string[];
  /**
   * Real frontend roles (true) vs earlier web/product roles (false).
   * Drives the "Current & recent roles" / "Earlier roles" split.
   */
  featured: boolean;
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "La Igualitaria",
    role: "Frontend Developer",
    location: "Barcelona",
    start: "02/2024",
    descriptionKey: "igualitaria",
    link: "https://laigualitaria.coop",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WordPress Headless", "PHP"],
    featured: true,
  },
  {
    company: "IT Academy",
    role: "Frontend Developer",
    location: "Barcelona",
    start: "02/2024",
    end: "09/2024",
    descriptionKey: "itAcademy",
    tags: ["React", "TypeScript", "Redux", "Vitest", "React Testing Library", "Material UI", "CI/CD"],
    featured: true,
  },
  {
    company: "Cervezartesana.es",
    role: "Web Master",
    location: "Barcelona",
    start: "03/2021",
    end: "03/2023",
    descriptionKey: "cervezartesana",
    link: "https://cervezartesana.es",
    tags: ["WordPress", "WooCommerce", "PHP", "SEO"],
    featured: false,
  },
  {
    company: "Slow4",
    role: "Co-Founder",
    location: "Barcelona",
    start: "05/2017",
    end: "01/2022",
    descriptionKey: "slow4",
    tags: ["WordPress", "Product", "SEO"],
    featured: false,
  },
];
