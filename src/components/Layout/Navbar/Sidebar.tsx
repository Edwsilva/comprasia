"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./sidebar.module.css";
import { AiFillHome, AiFillSetting, AiOutlineLogout } from "react-icons/ai";
import { TbZoomMoney } from "react-icons/tb";
import { FaPeopleCarry } from "react-icons/fa";

const Sidebar = () => {
  // const router = useRouter();

  // Função auxiliar para verificar a rota atual
  // const isActive = (path) => router.pathname === path;

  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link href="/">
            <AiFillHome /> Home
          </Link>
        </li>
        <li>
          <Link href="/pesquisapreco">
            <TbZoomMoney />
            Pesquisa de Preços
          </Link>
        </li>

        <li>
          <Link href="/fornecedores">
            <FaPeopleCarry />
            Fornecedores
          </Link>
        </li>
        <li>
          <Link href="/setup">
            <AiFillSetting /> Ajustes
          </Link>
        </li>
        <li>
          <Link href="/login">
            <AiOutlineLogout /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
