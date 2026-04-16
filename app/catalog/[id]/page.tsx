import { getCamperById } from "@/lib/api/campresApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CarClientClient from "./CarDeatils.client";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const query = await params;
  const id = query.id;

  const camper = await getCamperById(id);

  if (!camper) {
    return {
      title: "Camper Not Found | TravelTrucks",
    };
  }

  return {
    title: camper?.name || "Camper Details",
    description:
      camper?.description?.slice(0, 160) || "Explore this amazing camper.",
    openGraph: {
      images: [camper?.gallery[0]?.original || ""],
    },
  };
}

export default async function Catalog({ params }: Props) {
  const query = await params;
  const id = query.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryFn: () => getCamperById(id),
    queryKey: ["campers", id],
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CarClientClient />
    </HydrationBoundary>
  );
}
