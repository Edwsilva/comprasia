"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./sidebar.module.css";
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
    <div className={style.sidebar}>
      {menuItems.map(({ href, label, Icon }) => {
        const isActive = pathname === href;

        return (
          <Link href={href} key={href}>
            <nav className={`${style.navItem} ${isActive ? style.active : ""}`}>
              <span className={style.iconContainer}>
                <Icon />
              </span>
              <span className={style.text}>{label}</span>
            </nav>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
