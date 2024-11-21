import { ReactNode } from "react";
import style from "./container.module.css";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;
