import Link from "next/link";
import css from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  color?: "green" | "white";
  onClick?: () => void;
  disabled?: boolean;
  isNewPage?: boolean;
}

export default function Button({
  onClick,
  children,
  href,
  type,
  color,
  className,
  disabled,
  isNewPage,
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={`${css.button} ${css.green} ${className}`}
        target={isNewPage ? "_blank" : "_self"}
        rel={isNewPage ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${css.button} ${color === "white" ? css.white : css.green} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled ?? false}
    >
      {children}
    </button>
  );
}
