"use client";

import { useState } from "react";
import styles from "./home.module.css";
import TitleValue from "@/components/UI/TitleValue/TitleValue";
import { FaPlus } from "react-icons/fa";
import { FaSearch, FaSyncAlt } from "react-icons/fa";
import CustomButton from "@/components/UI/Button/CustomButton";
import ContainerWhiteBox from "@/components/Layout/Container/ContainerWhiteBox";

type Section =
  | "Dados Gerais"
  | "Fornecedores"
  | "Atas e Contratos"
  | "Mapa de Pesquisa de Preços";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("Dados Gerais");

  const sections: Record<Section, JSX.Element> = {
    "Dados Gerais": (
      <div className={styles.DadosGerais}>
        <section className={styles.details}>
          <TitleValue title="Processo" value="IPL-PRO-2024/0005999" />
          <TitleValue title="Área Demandante" value="DAF" />
        </section>

        <section className={styles.object}>
          <TitleValue
            title="Objeto"
            value="Contrato para a prestação de serviços de limpeza e conservação de [espaço/edifício], incluindo cronograma de serviços, equipe designada e critérios de avaliação da qualidade do serviço prestado."
          />
        </section>

        <section className={styles.keywords}>
          <p>Palavras Chaves</p>
          <ul className={styles.keywordsList}>
            <li className={styles.keywordItem}>Palavra1</li>
            <li className={styles.keywordItem}>Palavra2</li>
            <li className={styles.keywordItem}>Palavra3</li>
            <li className={styles.keywordItem}>Palavra4</li>
            <li className={styles.keywordItem}>Palavra5</li>
          </ul>
        </section>
      </div>
    ),
    Fornecedores: <p>Conteúdo da seção Fornecedores</p>,
    "Atas e Contratos": <p>Conteúdo da seção Atas e Contratos</p>,
    "Mapa de Pesquisa de Preços": (
      <p>Conteúdo da seção Mapa de Pesquisa de Preços</p>
    ),
  };

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
