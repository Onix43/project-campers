import { getCamperById } from "@/lib/api/campresApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CarClientClient from "./CarDeatils.client";

export default async function Catalog({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  const query = await params;
  const id = query.id[0];
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
