export interface SocialLink {
  id: string;
  platform: "github" | "linkedin" | "email" | "twitter" | "resume" | "other";
  label: string;
  url: string;
  handle?: string;
}
