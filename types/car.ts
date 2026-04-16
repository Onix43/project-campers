export type Car = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: CarForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: CarTransmission;
  engine: CarEngine;
  amenities: [CarAmenities];
  coverImage: string;
  totalReviews: number;
};

export type CarForm = "integrated" | "alcove" | "panel_van" | "semi_integrated";
export type CarTransmission = "automatic" | "manual";
export type CarEngine = "diesel" | "petrol" | "hybrid" | "electric";

export type CarGallery = {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
};

export type CarAmenities = string[];
