"use client";

import Button from "@/components/Button/Button";
import css from "./Filter.module.css";
import { IoMdClose } from "react-icons/io";
import { FilterResponse } from "@/lib/api/campresApi";
import { formatString } from "@/components/CarDetails/getCarFeatures";

interface FilterProps {
  filters: FilterResponse;
  onClear: () => void;
}

export default function Filter({ onClear, filters }: FilterProps) {
  const createMarkup = (filter: string[], filterName: string) => {
    const normalizedFilter =
      filterName === "Camper form"
        ? filterName.split(" ")[1]
        : filterName.toLowerCase();
    return (
      <fieldset className={css.filterGroup}>
        <legend className={css.text}>{filterName}</legend>
        <div className={css.optionsList}>
          {filter.map((name, index) => (
            <label key={index} className={css.radioLabel}>
              <input
                type="radio"
                name={normalizedFilter}
                value={name}
                className={css.hiddenInput}
              />
              <span className={css.customRadio}></span>
              <span className={css.labelContent}>{formatString(name)}</span>
            </label>
          ))}
        </div>
      </fieldset>
    );
  };
  return (
    <>
      {createMarkup(filters.forms, "Camper form")}
      {createMarkup(filters.engines, "Engine")}
      {createMarkup(filters.transmissions, "Transmission")}

      <div className={css.buttons}>
        <Button type="submit" className={css.fullWidth}>
          Search
        </Button>
        <Button
          type="reset"
          color="white"
          className={css.fullWidth}
          onClick={onClear}
        >
          <IoMdClose className={css.closeIcon} />
          Clear Filters
        </Button>
      </div>
    </>
  );
}
