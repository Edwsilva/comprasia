'use client';

import { useState, useEffect } from 'react';
import styles from './AtosContratos.module.css';
import StatusTag from './StatusTagContratos';

import SearchBox from '@/components/UI/SearchBox/SearchBox';
import DropdownFilter from '../../DropdownFilter/DropdownFilter';

import { IoIosLink } from "react-icons/io";


interface Contratos {
  site: 'PNCP' | 'Opção 2' | 'Opção 3';
  palavraChave: string;
  objeto: string;
  similaridade: number;
  acoes: string;
}

const mockContratos: Contratos[] = [
    { site: 'PNCP', palavraChave: 'Palavra1', objeto: 'Contrato para a prestação de serviços de limpezxa e conservação de [espaço/edifício], incluindo cronograma de serviços, equipe designada e critérios de avaliação da qualidade do serviço prestado.', similaridade: 0.9, acoes: 'https://g1.globo.com/' },
    { site: 'Opção 2', palavraChave: 'Palavra2', objeto: 'Contrato paxra a preStação de serviços de limpeza e conservxaxção de [espaço/edifício], incluindxo cronograma de serviços, equipe designada e critérios de avaliação da qualidade do serviço prestado.', similaridade: 0.8, acoes: 'https://g1.globo.com/' },
    { site: 'Opção 3', palavraChave: 'Palavra3', objeto: 'Contrato para a prEstação de serviços de limpeza e conservação de [espaço/edifício], incluxindo cronograma de serviços, equipe designada e critérios de avaliação da qualidade do serviço prestado.', similaridade: 0.7, acoes: 'https://g1.globo.com/' },
    { site: 'PNCP', palavraChave: 'Palavra4', objeto: 'Contrato para a Prestação de serviços de limpezaxe conservação de [espaço/edifício], incluindo xcronograma de serviços, equipe designada e critérios de avaliação da qualidade do serviço prestado.', similaridade: 0.6, acoes: 'https://g1.globo.com/' },
    { site: 'Opção 2', palavraChave: 'Palavra5', objeto: 'Contrato para a prestAção de serviços de limpeza e conservação de [espaço/edifício], xincluindo cronograma de serviços, equipe designada e critérios de avaliação da qualidade do serviço prestado.', similaridade: 0.5, acoes: 'https://g1.globo.com/' },
    { site: 'Opção 3', palavraChave: 'Palavra6', objeto: 'Contrato parax a prestaçãO de serviços de limpeza e coxnservação de [espaço/edifício], incluindo cronograma de serviços, equipe designada e critérios de avaliação da qualidade do serviço prestado.', similaridade: 0.4, acoes: 'https://g1.globo.com/' },
]

const siteOptions = Array.from(new Set(mockContratos.map(contrato => contrato.site)))
  .map(site => ({ value: site, label: site }));

const percentualOptions = [
    { value: '25', label: '25 %' },
    { value: '50', label: '50 %' },
    { value: '75', label: '75%' },
];

export default function Contratos() {
  const [contratos, setContratos] = useState<Contratos[]>(mockContratos);
  const [siteFilter, setsiteFilter] = useState<string>('Site');
  const [percentualFilter, setpercentualFilter] = useState<string>('Percentual Mínimo de Similaridade');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    // Simulação de API
    fetch('/api/fornecedores')
      .then((response) => response.json())
      .then((data) => setContratos(data));
  }, []);


  const filteredContratos = contratos.filter((contratos) =>
    (percentualFilter === 'Percentual Mínimo de Similaridade' || (contratos.similaridade * 100) >= parseFloat(percentualFilter)) &&
    (siteFilter === 'Site' || contratos.site === siteFilter) && contratos.objeto.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <section className={styles.atosContratosSection}>
       <div className={styles.header}>
        <div className={styles.headerFilters}>
          <SearchBox
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
          <DropdownFilter
          value={siteFilter}
          onChange={(value) => setsiteFilter(value)} // Atualiza o estado
          options={siteOptions}
          placeholder='Site'
        />

         <DropdownFilter
            value={percentualFilter}
            onChange={(value) => setpercentualFilter(value)} // Atualiza o estado
            options={percentualOptions}
            placeholder='Percentual Mínimo de Similaridade'
        />
        </div>

        <StatusTag status='Concluído' />
      </div>


      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
            <th className={styles.siteColumn}>Site</th>
            <th className={styles.palavraChaveColumn}>Palavra-Chave</th>
            <th className={styles.objetoColumn}>Objeto</th>
            <th className={styles.similaridadeColumn}>Similaridade</th>
            <th className={styles.acoesColumn}>Ações</th>
            </tr>
          </thead>
          <tbody>
                {filteredContratos.map((contratos) => (
                  <tr key={contratos.objeto}>
                    <td className={styles.siteColum}>{contratos.site}</td>
                    <td className={styles.palavraChaveColumn}>
                        <p className={styles.palavraChaveCell}> {contratos.palavraChave} </p>
                    </td>
                    <td className={styles.ObjetoColumn}>{contratos.objeto}</td>
                    <td className={styles.similaridadeColumn}>{contratos.similaridade * 100} % </td>
                    <td className={styles.acoesColumn}>
                        <a href={contratos.acoes} target="_blank" rel="noopener noreferrer">
                        <IoIosLink size={20} />
                        </a>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
