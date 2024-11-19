"use client";

import { useState } from "react";
import styles from "./home.module.css";
import TitleValue from "@/components/UI/TitleValue/TitleValue";
import { FaPlus } from "react-icons/fa";
import { FaSearch, FaSyncAlt, FaChevronRight } from "react-icons/fa";
import CustomButton from "@/components/UI/Button/CustomButton";
import ContainerWhiteBox from "@/components/Layout/Container/ContainerWhiteBox";
import ScrollableTable from "@/components/Layout/ScrollTable/ScrollableTable";

const headers = [
  { label: "Data", key: "data" },
  { label: "Processo", key: "processo" },
  { label: "Area", key: "area" },
  { label: "Objeto", key: "objeto" },
  { label: "Atas e Contratos", key: "atascontratos" },
  { label: "Fornecedores", key: "fornecedores" },
];

const data = [
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrado de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrado de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-03",
    processo: "9123",
    area: "TIC",
    objeto: "Desenvolvimento de Software",
    atascontratos: "Em Andamento",
    fornecedores: "Aguardando",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrado de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrado de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-03",
    processo: "9123",
    area: "TIC",
    objeto: "Desenvolvimento de Software",
    atascontratos: "Em Andamento",
    fornecedores: "Aguardando",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrado de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrado de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-03",
    processo: "9123",
    area: "TIC",
    objeto: "Desenvolvimento de Software",
    atascontratos: "Em Andamento",
    fornecedores: "Aguardando",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrado de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrado de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-03",
    processo: "9123",
    area: "TIC",
    objeto: "Desenvolvimento de Software",
    atascontratos: "Em Andamento",
    fornecedores: "Aguardando",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrado de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrado de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-03",
    processo: "9123",
    area: "TIC",
    objeto: "Desenvolvimento de Software",
    atascontratos: "Em Andamento",
    fornecedores: "Aguardando",
  },
];

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
          borderRadius="32px"
          size={14}
          onClick={() => {}}
        />
      </div>
      <ContainerWhiteBox>
        <div className={styles.searchRow}>
          <div className={styles.searchInput}>
            <input
              type="text"
              placeholder="Pesquisar"
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
        <div className={styles.tableContainer}>
          <ScrollableTable headers={headers} data={data} />
        </div>
      </ContainerWhiteBox>
    </main>
  );
}
