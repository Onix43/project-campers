import { Car } from "@/types/car";
import { api } from "./api";

interface CarResponse {
  total: number;
  items: Car[];
}

export async function getCampers() {
  const response = await api.get<CarResponse>("/campers");
  return response.data;
}
