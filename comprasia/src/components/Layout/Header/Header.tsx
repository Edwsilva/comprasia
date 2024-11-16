import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { FiBell } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.iconContainer}>
        <Link href="/" className={styles.link}>
          <Image
            src="/header/logo.svg" // Caminho para o arquivo de logo
            alt="Logo"
            width={32}
            height={32}
            className={styles.logo}
          />
        </Link>
        <span className={styles.compras}>Compras.</span>
        <span className={styles.ai}>AI</span>
      </div>

      <div className={styles.link}>
        <FiBell />
        <span>
          <RxAvatar />
          <IoIosArrowDown />
        </span>
      </div>
    </header>
  );
};

export default Header;
