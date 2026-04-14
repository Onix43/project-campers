import Location from "@/components/Sidebar/Location/Location";
import css from "./Sidebar.module.css";
import Filter from "@/components/Sidebar/Filters/Filter";

export default function SideBar() {
  return (
    <>
      <Location />
      <div className={css.filters}>
        <p className={css.filterText}>Filters</p>
        <Filter />
      </div>
    </>
  );
}
