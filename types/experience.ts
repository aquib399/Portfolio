export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string; // e.g., '2024 - PRESENT'
  location: string;
  type:
    | "Full-time"
    | "Part-time"
    | "Internship"
    | "Contract"
    | "Freelance"
    | "Open Source";
  description: string;
  highlights: string[];
  skillsUsed: string[];
  badge: string;
}
