"use client";

import { getCamperById, getReviewsById } from "@/lib/api/campresApi";
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

  const { data: camper } = useQuery({
    queryFn: () => getCamperById(id),
    queryKey: ["camper", id],
    refetchOnMount: false,
  });
  const { data: reviews } = useQuery({
    queryFn: () => getReviewsById(id),
    queryKey: ["reviews", id],
    refetchOnMount: false,
  });

  return (
    <section className={css.grid}>
      <h1 className={css.visuallyHidden}>{camper?.name}</h1>
      {camper && <CarDetails car={camper} />}
      {camper && reviews && (
        <CarReviews reviews={reviews} camperId={camper.id} />
      )}
    </section>
  );
}
