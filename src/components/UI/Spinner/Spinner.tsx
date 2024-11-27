import styles from "./spinner.module.css";

type SpinnerProps = {
  centered?: boolean;
};

const Spinner = ({ centered }: SpinnerProps) => {
  return (
    <div
      className={
        centered ? styles.spinnerContainerBoletim : styles.spinnerContainer
      }
    >
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;
