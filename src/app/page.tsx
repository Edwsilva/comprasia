import Image from "next/image";
//https://www.youtube.com/watch?v=vCOSTG10Y4o&ab_channel=LamaDev
import { GoArrowRight, GoArrowDown } from "react-icons/go";
import { MdBusinessCenter, MdFactCheck, MdAssignmentAdd } from "react-icons/md";
import Head from "next/head";
import Link from "next/link";
import styles from "./page.module.css";
import Container from "@/components/Layout/Container/Container";
import Navbar from "@/components/Layout/Navbar/Navbar";
import Invoices from "@/components/Layout/Invoices/Invoices";
import ContainerHome from "@/components/Layout/Container/ContainerHome";
// import style from "./page.module.css";
import utilStyles from "@/utils/styles/utils.module.css";
import InitialPage from "@/app/(pages)/home/page";

export default function Home() {
  return (
    // <ContainerHome>
    <InitialPage />
    // </ContainerHome>
  );
}
