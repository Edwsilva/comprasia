import React, { FC } from "react";
import { IconType } from "react-icons";
import styles from "./custombutton.module.css";

interface ButtonProps {
  title: string;
  icon: IconType; // Tipo do ícone do react-icons
  backgroundColor?: string;
  textColor?: string;
  size: number;
  onClick: () => void;
}

const CustomButton: FC<ButtonProps> = ({
  title,
  icon: Icon,
  backgroundColor = "var(--blue-200)",
  textColor = "var(--background)",
  size,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={{ backgroundColor, color: textColor }}
    >
      {title}
      <Icon size={size} color={textColor} />
    </button>
  );
};

export default CustomButton;
