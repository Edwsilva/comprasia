"use client";
import { useEffect, useState } from "react";
import { initialize, keycloak } from "@/config/keycloak";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { userInfoActions } from "@/redux/features/user-info";
import { useDispatch } from "react-redux";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { FiBell } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  const userInfo = useAppSelector((state) => state.userInfo);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    initialize().then(() => {
      if (!keycloak.authenticated && userInfo.logged === "not-logged") {
        dispatch(userInfoActions.setLogged("logging"));
        keycloak.login();
      }
    });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!keycloak.authenticated && userInfo.logged === "logging") {
        dispatch(userInfoActions.setLogged("logging"));
        keycloak.login();
      }
    }, 1000);
    return () => clearInterval(timeoutId);
  }, []);
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
