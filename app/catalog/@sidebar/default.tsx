"use client";
import { useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Location from "@/components/Sidebar/Location/Location";
import Filter from "@/components/Sidebar/Filters/Filter";
import css from "./Sidebar.module.css";

export default function SideBar() {
  const router = useRouter();
  const pathname = usePathname();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();

    formData.forEach((value, key) => {
      if (value === "panel van") {
        params.append(key, "panelTruck");
        return;
      }
      if (value === "semi integrated") {
        params.append(key, "semiIntegrated");
        return;
      }
      if (value === "integrated") {
        params.append(key, "fullyIntegrated");
        return;
      }
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
        <Filter onClear={handleClear} />
      </div>
    </form>
  );
}
