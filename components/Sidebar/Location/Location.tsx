import { CiMap } from "react-icons/ci";
import css from "./Location.module.css";

export default function Location() {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Location</h3>
      <div className={css.inputWrapper}>
        <CiMap className={css.icon} />
        <input type="text" placeholder="Kyiv, Ukraine" className={css.input} />
      </div>
    </div>
  );
}
