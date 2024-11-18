import React from "react";
import styles from "./TitleValue.module.css";

interface TitleValueProps {
  title: string;
  value: React.ReactNode;
}

const TitleValue: React.FC<TitleValueProps> = ({ title, value }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default TitleValue;
