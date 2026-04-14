import css from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button className={css.button} onClick={onClick}>
      {children}
    </button>
  );
}
