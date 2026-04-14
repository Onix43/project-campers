"use client";
import CarArticle from "@/components/CarArticle/CarArticle";
import { getCampers } from "@/lib/api/campresApi";
import { useQuery } from "@tanstack/react-query";
import css from './Catalog.module.css'

export default function CatalogClient() {
  const { data } = useQuery({
    queryFn: getCampers,
    queryKey: ["campers"],
    refetchOnMount: false,
  });

  return (
      <ul className={css.grid}>
      {data &&
        data.items.map((item) => <CarArticle key={item.id} car={item} />)}
    </ul>
  );
}
