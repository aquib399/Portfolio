import { Media } from "./media";

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  stackedTitle: string[];
  skills: Skill[];
  media?: Media;
  statusBadge?: string;
}

export interface Skill {
  name: string;
  level: string;
  description: string;
}
