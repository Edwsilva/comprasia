import { ReactNode } from "react";
import style from "./containerDashboard.module.css";

type Props = {
  children: ReactNode;
};

const ContainerDashboard = ({ children }: Props) => {
  return <main className={style.container}>{children}</main>;
};

export default ContainerDashboard;
