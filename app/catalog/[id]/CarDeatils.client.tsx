"use client";

import { getCamperById } from "@/lib/api/campresApi";
import { useQuery } from "@tanstack/react-query";
import css from "./CarDetaild.module.css";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import CarDetails from "@/components/CarDetails/CarDetails";
import CarReviews from "@/components/CarReviews/CarReviews";

export default function CarClientClient() {
  const searchParams = useParams();
  const router = useRouter();

  if (!searchParams) {
    router.push("/catalog");
  }
  const id = searchParams?.id as unknown as string;

  const { data, isError } = useQuery({
    queryFn: () => getCamperById(id),
    queryKey: ["campers", id],
    refetchOnMount: false,
  });

  return (
    <div className={css.grid}>
      {data && <CarDetails car={data} />}
      {data && <CarReviews car={data} />}
    </div>
  );
}
