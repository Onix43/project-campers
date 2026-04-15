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

interface postBookingProps {
  camperId: string;
  name: string;
  email: string;
}

interface postBookingResponse {
  message: string;
}

export async function getCampers(
  params: GetCampersProps,
): Promise<CarResponse> {
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
export async function getCamperById(id: string): Promise<Car> {
  const response = await api.get<Car>(`/campers/${id}`);
  return response.data;
}

export async function postBooking(
  obj: postBookingProps,
): Promise<postBookingResponse> {
  const response = await api.post<postBookingResponse>(
    `/campers/${obj.camperId}/booking-requests`,
    {
      data: {
        name: obj.name,
        email: obj.email,
      },
    },
  );
  return response.data;
}
