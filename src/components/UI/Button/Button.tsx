import { ComponentPropsWithoutRef, Dispatch, ReactNode, SetStateAction } from "react";
import styles from "./button.module.css";

type ButtonProps = {
    text: ReactNode;
    fn?: () => void | Dispatch<SetStateAction<boolean>> | Promise<boolean> | Promise<void>;
    p?: boolean;
    buttonModal?: boolean;
    hidden?: boolean;
    type?: "default" | "error";
    props?: ComponentPropsWithoutRef<"button">;
}

const Button = ({ text, fn, p, buttonModal, hidden, type, props }: ButtonProps) => {
    return (
        <button className={`${styles.button} ${hidden ? styles.hidden : ""} ${buttonModal ? styles.buttonModal : ""} 
        ${p ? styles.p5 : styles.p10} ${type === "error" && styles.error}`}
            onClick={fn}
            {...props}
        >{text}</button>
    )
}

export default Button;