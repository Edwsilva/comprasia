"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.css";
import { AiFillHome, AiFillSetting, AiOutlineLogout } from "react-icons/ai";
import { TbZoomMoney } from "react-icons/tb";
import { FaPeopleCarry } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home", Icon: AiFillHome },
    { href: "/pesquisapreco", label: "Pesquisa de Preços", Icon: TbZoomMoney },
    { href: "/fornecedores", label: "Fornecedores", Icon: FaPeopleCarry },
    { href: "/setup", label: "Ajustes", Icon: AiFillSetting },
    { href: "/login", label: "Logout", Icon: AiOutlineLogout },
  ];

  return (
    <div className={styles.sidebar}>
      {menuItems.map(({ href, label, Icon }) => {
        const isActive = pathname === href;

        return (
          <Link href={href} key={href}>
            <nav
              className={`${styles.navItem} ${isActive ? styles.active : ""}`}
            >
              <span className={styles.iconContainer}>
                <Icon />
              </span>
              <span className={styles.text}>{label}</span>
            </nav>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
