'use client';

import { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import styles from './FornecedoresTab.module.css';
import StatusTag from './StatusTag';
import { FaChevronRight } from "react-icons/fa";

interface Fornecedor {
  cnpj: string;
  razaoSocial: string;
  status: 'Declínio' | 'Aguardando' | 'Proposta Enviada';
}

const mockFornecedores: Fornecedor[] = [
  { cnpj: '00.000.000/0001-91', razaoSocial: 'Empresa A', status: 'Declínio' },
  { cnpj: '11.111.111/0001-92', razaoSocial: 'Empresa B', status: 'Aguardando' },
  { cnpj: '22.222.222/0001-93', razaoSocial: 'Empresa C', status: 'Proposta Enviada' },
  { cnpj: '33.333.333/0001-94', razaoSocial: 'Empresa D', status: 'Declínio' },
  { cnpj: '44.444.444/0001-95', razaoSocial: 'Empresa E', status: 'Proposta Enviada' },
];


export default function Fornecedores() {
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>(mockFornecedores);
  const [statusFilter, setStatusFilter] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    // Simulação de API
    fetch('/api/fornecedores')
      .then((response) => response.json())
      .then((data) => setFornecedores(data));
  }, []);

  const filteredFornecedores = fornecedores.filter((fornecedor) =>
    (statusFilter === 'Todos' || fornecedor.status === statusFilter) &&
    fornecedor.razaoSocial.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={styles.fornecedoresSection}>
      <div className={styles.header}>
        <div className={styles.searchBoxWrapper}>
          <input
            type="search"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchBox}
            
          />
          <span className={styles.searchIcon}>
            <CiSearch size={20}/>
          </span>
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className={styles.statusDropdown}
        >
          <option value="Todos">Todos</option>
          <option value="Declínio">Declínio</option>
          <option value="Aguardando">Aguardando</option>
          <option value="Proposta Enviada">Proposta Enviada</option>
        </select>

        <button className={styles.newQuoteButton}>Nova Cotação</button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
          <th className={styles.cnpjColumn}>CNPJ</th>
          <th className={styles.razaoSocialColumn}>Razão Social</th>
          <th className={styles.statusColumn}>Status</th>
          </tr>
        </thead>
        <tbody>
              {filteredFornecedores.map((fornecedor) => (
                <tr key={fornecedor.cnpj}>
                  <td className={styles.cnpjColumn}>{fornecedor.cnpj}</td>
                  <td className={styles.razaoSocialColumn}>{fornecedor.razaoSocial}</td>
                  <td className={styles.statusCell}>
                    <StatusTag status={fornecedor.status} />
                    <FaChevronRight size={20} className={styles.chevronIcon}/>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </section>
  );
}
