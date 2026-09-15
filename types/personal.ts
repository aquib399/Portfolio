import { MediaByOrientation } from "./media";

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
}
