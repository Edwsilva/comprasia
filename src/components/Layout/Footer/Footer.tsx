import Link from "next/link";
import Image from "next/image";
import logoPrefeitura from "@/../public/logoPrefeitura.png";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <Image className={styles.img} src={logoPrefeitura} alt="Logo" />
      </Link>
      <p className={styles.text}>
        Prefeitura da Cidade do Rio de Janeiro Sede: Rua Afonso Cavalcanti, 455
        - Cidade Nova - 20211-110
      </p>
    </footer>
  );
};

export default Footer;
