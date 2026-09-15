import { Experience } from "./experience";
import { PersonalInfo } from "./personal";
import { Education } from "./education";
import { SocialLink } from "./social";
import { Project } from "./project";
import { Skill } from "./skill";

export interface Portfolio {
  personal: PersonalInfo;
  social: SocialLink[];
  skill: Skill[];
  experience: Experience[];
  education: Education[];
  project: Project[];
}
