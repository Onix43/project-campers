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
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: CarGallery[];
  reviews: CarReview[];
};

export type CarForm = "fullyIntegrated" | "alcove" | "panelTruck";
export type CarTransmission = "automatic" | "manual";
export type CarEngine = "diesel" | "petrol" | "hybrid";

export type CarReview = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};
export type CarGallery = {
  thumb: string;
  original: string;
};
