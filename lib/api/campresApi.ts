import {
  Car,
  CarAmenities,
  CarEngine,
  CarForm,
  CarGallery,
  CarTransmission,
} from "@/types/car";
import { api } from "./api";

export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Car[];
}

export interface FilterResponse {
  forms: string[];
  transmissions: string[];
  engines: string[];
}

export interface CamperResponse {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
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
  amenities: CarAmenities;
  gallery: CarGallery[];
  createdAt: string;
  updatedAt: string;
}
export interface ReviewResponse {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}

interface postBookingResponse {
  message: string;
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

export async function getCampers(
  params: GetCampersProps,
): Promise<CampersResponse> {
  const searchParams = Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value !== undefined && value !== "",
    ),
  );
  const response = await api.get<CampersResponse>("/campers", {
    params: searchParams,
  });
  return response.data;
}

export async function getCamperById(id: string): Promise<CamperResponse> {
  const response = await api.get<CamperResponse>(`/campers/${id}`);
  return response.data;
}

export async function getFilters(): Promise<FilterResponse> {
  const response = await api.get<FilterResponse>("/campers/filters");
  return response.data;
}

export async function getReviewsById(id: string): Promise<ReviewResponse[]> {
  const response = await api.get<ReviewResponse[]>(`/campers/${id}/reviews`);
  return response.data;
}

export async function postBooking(
  obj: postBookingProps,
): Promise<postBookingResponse> {
  const response = await api.post<postBookingResponse>(
    `/campers/${obj.camperId}/booking-requests`,
    {
      name: obj.name,
      email: obj.email,
    },
  );
  return response.data;
}
