import { Experience } from "./experience";
import { PersonalInfo } from "./personal";
import { Education } from "./education";
import { SkillCategory } from "./skill";
import { SocialLink } from "./social";
import { Project } from "./project";

export interface Portfolio {
  personal: PersonalInfo;
  social: SocialLink[];
  skillCategory: SkillCategory[];
  experience: Experience[];
  education: Education[];
  project: Project[];
}
