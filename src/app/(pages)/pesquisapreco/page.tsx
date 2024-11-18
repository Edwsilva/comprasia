"use client";

import { useState } from "react";
import styles from "./pesquisapreco.module.css";
import TitleValue from "@/components/UI/TitleValue/TitleValue";

type Section =
  | "Dados Gerais"
  | "Fornecedores"
  | "Atas e Contratos"
  | "Mapa de Pesquisa de Preços";

export default function Pesquisa() {
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

  return (
    <main className={styles.container}>
      <div className={styles.pesquisaHeader}>
        <h1>Pesquisa</h1>
        <p>Conteúdo da página de Pesquisa preços.</p>
      </div>
      <div className={styles.whiteBox}>
        <div className={styles.buttonsContainer}>
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              className={`${styles.button} ${
                activeSection === section ? styles.activeButton : ""
              }`}
              onClick={() => setActiveSection(section as Section)}
            >
              {section}
            </button>
          ))}
        </div>
        <div className={styles.content}>{sections[activeSection]}</div>
      </div>
    </main>
  );
}
