"use client";

import { useState } from 'react';
import styles from './pesquisapreco.module.css';

import DadosGerais from '@/components/UI/Pesquisapreco/DadosGerais/DadosGerais';
import Fornecedores from '@/components/UI/Pesquisapreco/Fornecedores/FornecedoresTab';
import AtosContratos from '@/components/UI/Pesquisapreco/AtosContratos/AtosContratos';


type Section = 'Dados Gerais' | 'Fornecedores' | 'Atas e Contratos' | 'Mapa de Pesquisa de Preços';

export default function Pesquisa() {
  const [activeSection, setActiveSection] = useState<Section>('Dados Gerais');

  const sections: Record<Section, JSX.Element> = {
    'Dados Gerais': <DadosGerais />,
    'Fornecedores': <Fornecedores />,
    'Atas e Contratos': <AtosContratos />,
    'Mapa de Pesquisa de Preços': <p>Conteúdo da seção Mapa de Pesquisa de Preços</p>,
  };

  return (
    <main className={styles.container}>
      <div className={styles.pesquisaHeader}>
        Pesquisa de Preços {'>'} Processo X
      </div>
      <div className={styles.whiteBox}>
        <div className={styles.buttonsContainer}>
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              className={`${styles.button} ${
                activeSection === section ? styles.activeButton : ''
              }`}
              onClick={() => setActiveSection(section as Section)}
            >
              {section}
            </button>
          ))}
        </div>
        <div className={styles.content}>
          {sections[activeSection]}
        </div>
      </div>
    </main>
  );
}
