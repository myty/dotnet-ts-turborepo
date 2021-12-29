import * as React from "react";
import "./button.css";

export enum ButtonSize {
  Small = "small",
  Base = "base",
  Large = "large",
}

interface ButtonProps {
  className?: string;
  size?: ButtonSize;
  text?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  size = ButtonSize.Base,
  text = "Button",
  onClick,
}) => {
  return (
    <button
      className={classNames(className, calculateSizeClass(size))}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

function classNames(...args: (string | undefined)[]): string {
  return args.filter((a) => !!a).join(" ");
}

function calculateSizeClass(size: ButtonSize): string {
  if (size === ButtonSize.Small) {
    return "btn-sm";
  }

  if (size === ButtonSize.Large) {
    return "btn-lg";
  }

  return "btn";
}
