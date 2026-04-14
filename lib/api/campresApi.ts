import { Car } from "@/types/car";
import { api } from "./api";

interface CarResponse {
  total: number;
  items: Car[];
}

interface GetCampersProps {
  location?: string;
  form?: string;
  engine?: string;
  transmission?: string;
}

export async function getCampers(params: GetCampersProps) {
  const searchParams = Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value !== undefined && value !== "",
    ),
  );
  const response = await api.get<CarResponse>("/campers", {
    params: searchParams,
  });
  return response.data;
}
