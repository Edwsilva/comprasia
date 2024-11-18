import { ReactNode } from "react";
import styles from "./containerHome.module.css";

type Props = {
  children: ReactNode;
};

const ContainerHome = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContainerHome;
