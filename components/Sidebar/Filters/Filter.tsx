"use client";

import Button from "@/components/Button/Button";
import css from "./Filter.module.css";
import { IoMdClose } from "react-icons/io";

const filters = [
  {
    title: "Camper form",
    name: "form",
    options: ["Alcove", "Panel Van", "Integrated", "Semi Integrated"],
  },
  {
    title: "Engine",
    name: "engine",
    options: ["Diesel", "Petrol", "Hybrid", "Electric"],
  },
  {
    title: "Transmission",
    name: "transmission",
    options: ["Automatic", "Manual"],
  },
];

interface FilterProps {
  onClear: () => void;
}

export default function Filter({ onClear }: FilterProps) {
  return (
    <>
      {filters.map((group) => (
        <fieldset key={group.name} className={css.filterGroup}>
          <legend className={css.text}>{group.title}</legend>

          <div className={css.optionsList}>
            {group.options.map((option) => (
              <label key={option} className={css.radioLabel}>
                <input
                  type="radio"
                  name={group.name}
                  value={option.toLowerCase()}
                  className={css.hiddenInput}
                />
                <span className={css.customRadio}></span>
                <span className={css.labelContent}>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}

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
