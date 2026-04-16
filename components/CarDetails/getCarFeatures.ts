import { CamperResponse } from "@/lib/api/campresApi";

export const formatString = (str: string) =>
  str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const getCarFeaturesArray = (car: CamperResponse): string[] => {
  const features: string[] = [
    formatString(car.transmission),
    formatString(car.engine),
    formatString(car.form),
    formatString(car.amenities[0]),
    formatString(car.amenities[1]),
  ];

  return features;
};

export const formatCarValue = (value: string, key: string): string => {
  const formLabels: Record<string, string> = {
    fullyIntegrated: "Full Truck",
    alcove: "Alcove",
    panelTruck: "Panel Truck",
  };

  if (key === "form" && formLabels[value]) {
    return formLabels[value];
  }

  return value.replace(/(\d+(?:\.\d+)?)([a-zA-Z]+)/, "$1 $2");
};
