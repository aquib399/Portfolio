import { Media } from "./media";

export interface Project {
  id: string;
  slug: string;
  letterBadge: string; // e.g. 'A', 'B', 'C'
  title: string;
  subtitle?: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  tags: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  media: Media[];
  featured?: boolean;
}
