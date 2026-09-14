export type MediaType = "image" | "video";
export type MediaOrientation = "portrait" | "landscape";

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

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string; // e.g., '2020 - 2024'
  location: string;
  achievements?: string[];
  badge?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string; // e.g., '2024 - PRESENT'
  location: string;
  type: "Full-time" | "Contract" | "Freelance" | "Open Source";
  description: string;
  highlights: string[];
  skillsUsed: string[];
  badge?: string;
}

export interface SkillCategory {
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

export interface SocialLink {
  id: string;
  platform: "github" | "linkedin" | "email" | "twitter" | "resume" | "other";
  label: string;
  url: string;
  handle?: string;
}

export interface PersonalMedia {
  id: string;
  orientation: MediaOrientation;
  url: string;
  caption?: string;
  alt: string;
  title?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  query: string;
}
