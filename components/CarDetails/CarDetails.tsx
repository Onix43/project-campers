import css from "./CarDetails.module.css";
import { FaStar } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import { Car } from "@/types/car";
import CarDetailsImages from "./CarDetailsImages";
import CarDetailsList from "./CarDetailsList";
import { formatCarValue } from "./getCarFeatures";

interface CarDetailsProps {
  car: Car;
}

export default function CarDetails({ car }: CarDetailsProps) {
  return (
    <div className={css.carDeatilsPage}>
      <div className={css.leftBlock}>
        <CarDetailsImages car={car} />
      </div>

      <div className={css.rightBlock}>
        <div className={css.descriptionBlock}>
          <h2 className={css.descriptionName}>{car.name}</h2>
          <div className={css.infoRow}>
            <div className={css.rating}>
              <FaStar className={css.starIcon} />
              <span>
                {car.rating} ({car.reviews.length} Reviews)
              </span>
            </div>
            <div className={css.location}>
              <CiMap className={css.mapIcon} />
              <span>{car.location}</span>
            </div>
          </div>
          <div className={css.priceWrapper}>
            <span className={css.price}>€{car.price}</span>
          </div>
          <p className={css.description}>{car.description}</p>
        </div>

        <div className={css.carDetails}>
          <h2 className={css.detailsHeader}>Vehicle details</h2>
          <CarDetailsList car={car} />
          <ul className={css.detailsDescriptionWrapper}>
            <li className={css.detailsItem}>
              <span>Form</span>
              <span>{formatCarValue(car.form, "form")}</span>
            </li>
            <li className={css.detailsItem}>
              <span>Length</span>
              <span>{formatCarValue(car.length, "length")}</span>
            </li>
            <li className={css.detailsItem}>
              <span>Width</span>
              <span>{formatCarValue(car.width, "width")}</span>
            </li>
            <li className={css.detailsItem}>
              <span>Height</span>
              <span>{formatCarValue(car.height, "height")}</span>
            </li>
            <li className={css.detailsItem}>
              <span>Tank</span>
              <span>{formatCarValue(car.tank, "tank")}</span>
            </li>
            <li className={css.detailsItem}>
              <span>Consumption</span>
              <span>{car.consumption}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
