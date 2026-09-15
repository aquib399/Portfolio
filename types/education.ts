import { Media } from "./media";

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string; // e.g., '2020 - 2024'
  location: string;
  achievements?: string[];
  badge?: string;
  media?: Media;
}
