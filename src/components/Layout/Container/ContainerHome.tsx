import { ReactNode } from "react";
import style from "./containerHome.module.css";

type Props = {
  children: ReactNode;
};

const ContainerHome = ({ children }: Props) => {
  return <main className={style.container}>{children}</main>;
};

export default ContainerHome;
