"use client";

import { useState, useEffect } from "react";
import style from "./home.module.css";
import TitleValue from "@/components/UI/TitleValue/TitleValue";
import { FaPlus } from "react-icons/fa";
import { FaSearch, FaSyncAlt, FaChevronRight } from "react-icons/fa";
import CustomButton from "@/components/UI/Button/CustomButton";
import ContainerWhiteBox from "@/components/Layout/Container/ContainerWhiteBox";
import ScrollableTable from "@/components/Layout/ScrollTable/ScrollableTable";
import ContainerHome from "@/components/Layout/Container/ContainerHome";

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
    objeto: "Contrato de Fibra ótica",
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
    objeto: "Contrato de Fibra ótica",
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
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrato de Fibra ótica",
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
    objeto: "Contrato de Fibra ótica",
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
    atascontratos: "Concluido",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrato de Fibra ótica",
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
    objeto: "Contrato de Fibra ótica",
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
    atascontratos: "Processando",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrato de Fibra ótica",
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
    objeto: "Contrato de Fibra ótica",
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
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrato de Fibra ótica",
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
    objeto: "Contrato de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locaçãosdf gsdf gsdgfhgfh dfh dfsdfde Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-03",
    processo: "9123",
    area: "TIC",
    objeto: "Desenvolvimento de Software",
    atascontratos: "Processando",
    fornecedores: "Aguardando",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const filteredData = data.filter((row) =>
    // row.objeto.toLowerCase().includes(searchTerm.toLowerCase())
    row.objeto.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  useEffect(() => {
    if (timer) clearTimeout(timer); // Limpa o timeout anterior

    const newTimer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm); // Atualiza o estado de pesquisa com o valor atual
    }, 500);

    setTimer(newTimer); // Atualiza o timer

    return () => clearTimeout(newTimer);
  }, [searchTerm]);

  const handleRefresh = () => {
    console.log("Refresh clicado!");
  };

  return (
    <ContainerHome>
      <div className={style.pesquisaHeader}>
        Pesquisa de Preços
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
        <div className={style.searchRow}>
          <div className={style.searchInput}>
            <input
              type="text"
              placeholder="Pesquisar"
              className={style.input}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className={style.icon} />
          </div>

          <select className={style.select}>
            <option value="">Processo</option>
            <option value="process1">Processo 1</option>
            <option value="process2">Processo 2</option>
          </select>

          <select className={style.select}>
            <option value="">Área Demandante</option>
            <option value="area1">Área 1</option>
            <option value="area2">Área 2</option>
          </select>
          <button className={style.refreshButton} onClick={handleRefresh}>
            <FaSyncAlt />
          </button>
        </div>
        <div className={style.tableContainer}>
          <ScrollableTable headers={headers} data={filteredData} />
        </div>
      </ContainerWhiteBox>
    </ContainerHome>
  );
}
