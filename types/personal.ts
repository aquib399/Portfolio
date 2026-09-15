import { MediaByOrientation } from "./media";

export interface Pillar {
  title: string;
  description: string;
  icon?: "code" | "sparkles" | "briefcase" | string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  subRole: string;
  location: string;
  locationCode: string;
  status: string;
  email: string;
  shortBio: string;
  detailedBio: string[];
  quote: string;
  metadataTags: string[];
  media: MediaByOrientation;
  aboutHeading?: string;
  aboutSectionTag?: string;
  pillars?: Pillar[];
  heroBadge?: string;
  overviewEdition?: string;
  experiencePhilosophy?: {
    title: string;
    quote: string;
  };
  contactPitch?: string;
  contactMeta?: {
    security?: string;
    responseTime?: string;
  };
}
