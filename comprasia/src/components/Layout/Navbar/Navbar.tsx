"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`${styles.navList} ${isOpen ? styles.show : ""}`}>
        <li className={styles.navItem}>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/fornecedores">Fornecedores</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
