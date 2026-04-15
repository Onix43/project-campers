import { Car } from "@/types/car";

export const getCarFeaturesArray = (car: Car): string[] => {
  const boolean: Record<string, string> = {
    AC: "AC",
    bathroom: "Bathroom",
    kitchen: "Kitchen",
    TV: "TV",
    radio: "Radio",
    refrigerator: "Refrigerator",
    microwave: "Microwave",
    gas: "Gas",
    water: "Water",
  };

  const features: string[] = [
    car.transmission.charAt(0).toUpperCase() + car.transmission.slice(1),
    car.engine.charAt(0).toUpperCase() + car.engine.slice(1),
  ];

  Object.keys(boolean).forEach((key) => {
    if (car[key as keyof Car] === true) {
      features.push(boolean[key]);
    }
  });

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
