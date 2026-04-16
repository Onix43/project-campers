"use client";
import { useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Location from "@/components/Sidebar/Location/Location";
import Filter from "@/components/Sidebar/Filters/Filter";
import css from "./Sidebar.module.css";
import { getFilters } from "@/lib/api/campresApi";
import { useQuery } from "@tanstack/react-query";

export default function SideBar() {
  const router = useRouter();
  const pathname = usePathname();
  const formRef = useRef<HTMLFormElement>(null);

  const { data: filters } = useQuery({
    queryFn: () => getFilters(),
    queryKey: ["filters"],
    refetchOnMount: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();

    formData.forEach((value, key) => {
      if (value) params.append(key, value.toString());
    });

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleClear = () => {
    formRef.current?.reset();
    router.push(pathname);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={css.form}>
      <Location />
      <div className={css.filters}>
        <p className={css.filterText}>Filters</p>
        {filters && <Filter onClear={handleClear} filters={filters} />}
      </div>
    </form>
  );
}
