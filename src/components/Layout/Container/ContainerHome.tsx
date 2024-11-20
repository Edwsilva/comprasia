import { ReactNode } from "react";
import styles from "./containerHome.module.css";

type Props = {
  children: ReactNode;
};

const ContainerHome = ({ children }: Props) => {
  return <main className={styles.container}>{children}</main>;
};

export default ContainerHome;
