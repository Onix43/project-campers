import { getCampers } from "@/lib/api/campresApi";
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
  const id = await params;
  console.log(id);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryFn: () => getCampers({}),
    queryKey: ["campers"],
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CarClientClient />
    </HydrationBoundary>
  );
}
