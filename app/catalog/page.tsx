import { getCampers, getFilters } from "@/lib/api/campresApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CatalogClient from "./Catalog.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog",
  description:
    "Browse our extensive collection of campers. Find the perfect one for your journey.",
};

export default async function Catalog() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryFn: ({ pageParam = 1 }) => getCampers({ page: pageParam }),
    queryKey: ["campers"],
    initialPageParam: 1,
  });
  await queryClient.prefetchQuery({
    queryFn: () => getFilters(),
    queryKey: ["filters"],
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
}
