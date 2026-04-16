import { LogoTT } from "./Logo";
import css from "./FullPageLoader.module.css";

export default function FullPageLoader() {
  return (
    <div className={css.backdrop}>
      <div className={css.loaderContainer}>
        <LogoTT className={css.pulsatingLogo} />
      </div>
    </div>
  );
}
