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
import Principal from "@/app/(pages)/home/page";

export default function Home() {
  const invoices = [
    {
      id: 1,
      createTs: "2024-11-10T12:00:00Z",
      customer: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
      status: "open",
      value: 5000,
    },
    {
      id: 2,
      createTs: "2024-11-12T15:30:00Z",
      customer: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
      },
      status: "paid",
      value: 12000,
    },
    {
      id: 3,
      createTs: "2024-11-14T10:00:00Z",
      customer: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
      },
      status: "void",
      value: 7500,
    },
    {
      id: 4,
      createTs: "2024-11-15T14:00:00Z",
      customer: {
        name: "Bob Lee",
        email: "bob.lee@example.com",
      },
      status: "uncollectible",
      value: 3200,
    },
  ];
  return (
    // <ContainerHome>
    <Principal />
    // </ContainerHome>
  );
}
