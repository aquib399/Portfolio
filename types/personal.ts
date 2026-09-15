import { MediaOrientation } from "./media";

export type Media = Record<MediaOrientation, PersonalMedia[]>;

export interface PersonalMedia {
  id: string;
  url: string;
  caption?: string;
  alt: string;
  title?: string;
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
  media: Media;
}
