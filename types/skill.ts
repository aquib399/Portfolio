export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  stackedTitle: string[]; // e.g. ["FRONT", "END"] for retro vertical stacking
  skills: Array<Skill>;
}

export interface Skill {
  name: string;
  level?: string;
  description?: string;
}
