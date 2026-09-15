export interface Skill {
  id: string;
  title: string;
  subtitle: string;
  stackedTitle: string[]; // e.g. ["FRONT", "END"] for retro vertical stacking
  skills: Array<{
    name: string;
    level?: string;
    description?: string;
  }>;
}
