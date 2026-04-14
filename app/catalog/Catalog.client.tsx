"use client";
import CarArticle from "@/components/CarArticle/CarArticle";
import { getCampers } from "@/lib/api/campresApi";
import { useQuery } from "@tanstack/react-query";
import css from "./Catalog.module.css";
import { useSearchParams } from "next/navigation";

export default function CatalogClient() {
  const searchParams = useSearchParams();

  const filters = {
    location: searchParams.get("location") || undefined,
    form: searchParams.get("form") || undefined,
    engine: searchParams.get("engine") || undefined,
    transmission: searchParams.get("transmission") || undefined,
  };

  const { data, isError } = useQuery({
    queryFn: () => getCampers(filters),
    queryKey: ["campers", filters],
    refetchOnMount: false,
  });

  return (
    <ul className={css.grid}>
      {data &&
        data.items.map((item) => <CarArticle key={item.id} car={item} />)}
      {isError && !data && (
        <p>Sorry, there is no campers matching your filter settings!</p>
      )}
    </ul>
  );
}
