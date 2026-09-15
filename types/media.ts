export interface Media {
  id: string;
  type: MediaType;
  orientation: MediaOrientation;
  url: string;
  thumbnailUrl?: string;
  alt: string;
  caption: string;
  aspectRatio?: string; // e.g. "16/9", "4/5", "1/1", "9/16"
}

export type MediaType = "image" | "video";
export type MediaOrientation = "portrait" | "landscape";

export type MediaByOrientation = Record<MediaOrientation, Media[]>;
