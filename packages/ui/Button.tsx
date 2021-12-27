import * as React from "react";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text = "Button", onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
