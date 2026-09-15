import { SkillCategory } from "./skillCategory";
import { PersonalInfo } from "./personal";
import { Experience } from "./experience";
import { Education } from "./education";
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
