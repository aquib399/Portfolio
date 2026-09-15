import { MediaOrientation, MediaType } from "./media";

export interface ProjectMedia {
  id: string;
  type: MediaType;
  orientation: MediaOrientation;
  url: string;
  thumbnailUrl?: string;
  alt: string;
  caption?: string;
  aspectRatio?: string; // e.g. "16/9", "4/5", "1/1", "9/16"
}

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
  media: ProjectMedia[];
  featured?: boolean;
}
