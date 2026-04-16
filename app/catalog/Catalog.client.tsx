"use client";
import CarArticle from "@/components/CarArticle/CarArticle";
import { getCampers } from "@/lib/api/campresApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import css from "./Catalog.module.css";
import { useSearchParams } from "next/navigation";
import Button from "@/components/Button/Button";
import React from "react";
import FullPageLoader from "@/components/FullPageLoader/FullPageLoader";

export default function CatalogClient() {
  const searchParams = useSearchParams();

  const filters = {
    location: searchParams.get("location") || undefined,
    form: searchParams.get("form") || undefined,
    engine: searchParams.get("engine") || undefined,
    transmission: searchParams.get("transmission") || undefined,
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryFn: ({ pageParam = 1 }) =>
        getCampers({ ...filters, page: pageParam }),
      queryKey: ["campers", filters],
      initialPageParam: 1,
      getNextPageParam: ({ totalPages, page }) => {
        const nextPage = page + 1;
        return nextPage <= totalPages ? nextPage : undefined;
      },
      refetchOnMount: false,
    });

  const isEmpty = data?.pages[0]?.campers?.length === 0;

  return (
    <section>
      {status === "pending" && <FullPageLoader />}
      <div className={css.grid}>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.campers.map((item) => (
              <CarArticle key={item.id} car={item} />
            ))}
          </React.Fragment>
        ))}
      </div>
      {isEmpty && status !== "pending" && (
        <p className={css.emptyMessage}>
          Sorry, there are no campers matching your filter settings!
        </p>
      )}
      {hasNextPage && (
        <Button
          color="white"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className={css.paginateButton}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </Button>
      )}
    </section>
  );
}
