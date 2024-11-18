"use client";

import { useState } from "react";
import styles from "./home.module.css";
import TitleValue from "@/components/UI/TitleValue/TitleValue";
import { FaPlus } from "react-icons/fa";
import { FaSearch, FaSyncAlt } from "react-icons/fa";
import CustomButton from "@/components/UI/Button/CustomButton";
import ContainerWhiteBox from "@/components/Layout/Container/ContainerWhiteBox";

export default function Home() {
  const handleRefresh = () => {
    console.log("Refresh clicado!");
  };

  return (
    <main className={styles.container}>
      <div className={styles.pesquisaHeader}>
        <h1>Pesquisa de Preços</h1>
        <CustomButton
          title="Nova Pesquisa"
          icon={FaPlus}
          backgroundColor="var(--blue-600)"
          textColor="var(--background)"
          size={14}
          onClick={() => {}}
        />
      </div>
      <ContainerWhiteBox>
        <div className={styles.searchRow}>
          <div className={styles.searchInput}>
            <input
              type="text"
              placeholder="Pesquisa"
              className={styles.input}
            />
            <FaSearch className={styles.icon} />
          </div>

          <select className={styles.select}>
            <option value="">Processo</option>
            <option value="process1">Processo 1</option>
            <option value="process2">Processo 2</option>
          </select>

          <select className={styles.select}>
            <option value="">Área Demandante</option>
            <option value="area1">Área 1</option>
            <option value="area2">Área 2</option>
          </select>
          <button className={styles.refreshButton} onClick={handleRefresh}>
            <FaSyncAlt />
          </button>
        </div>
      </ContainerWhiteBox>
    </main>
  );
}
