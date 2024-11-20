import { ReactNode } from "react";
import styles from "./containerWhiteBox.module.css";

type Props = {
  children: ReactNode;
};

const ContainerWhiteBox = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContainerWhiteBox;
