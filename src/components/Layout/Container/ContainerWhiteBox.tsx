import { ReactNode } from "react";
import style from "./containerWhiteBox.module.css";

type Props = {
  children: ReactNode;
};

const ContainerWhiteBox = ({ children }: Props) => {
  return <div className={style.container}>{children}</div>;
};

export default ContainerWhiteBox;
