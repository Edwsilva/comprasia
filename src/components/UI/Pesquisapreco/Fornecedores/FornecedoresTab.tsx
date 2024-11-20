'use client';

import { useState, useEffect } from 'react';
import styles from './FornecedoresTab.module.css';
import StatusTag from './StatusTag';
import SearchBox from '@/components/UI/SearchBox/SearchBox';
import DropdownFilter from '../../DropdownFilter/DropdownFilter';

import { FaChevronRight } from "react-icons/fa";

interface Fornecedor {
  cnpj: string;
  razaoSocial: string;
  status: 'Declínio' | 'Aguardando' | 'Proposta Enviada';
}

const mockFornecedores: Fornecedor[] = [
  { cnpj: '00.000.000/0001-91', razaoSocial: 'Brilho Limpeza e Conservação Ltd', status: 'Declínio' },
  { cnpj: '11.111.111/0001-92', razaoSocial: 'Limpeza Total Serviços Ltda.', status: 'Aguardando' },
  { cnpj: '22.222.222/0001-93', razaoSocial: 'EcoClean Soluções em Limpeza S/A', status: 'Proposta Enviada' },
  { cnpj: '33.333.333/0001-94', razaoSocial: 'Clarear Serviços de Limpeza Ltda.', status: 'Declínio' },
  { cnpj: '44.444.444/0001-95', razaoSocial: 'Limpeza Ágil e Eficiente Ltda.', status: 'Proposta Enviada' },
  { cnpj: '00.020.000/0001-91', razaoSocial: 'Purifica Serviços', status: 'Declínio' },
  { cnpj: '11.131.111/0001-92', razaoSocial: 'Empresa B', status: 'Aguardando' },
  { cnpj: '22.242.222/0001-93', razaoSocial: 'Empresa C', status: 'Proposta Enviada' },
  { cnpj: '33.613.333/0001-94', razaoSocial: 'Empresa D', status: 'Declínio' },
  { cnpj: '44.414.444/0001-95', razaoSocial: 'Empresa E', status: 'Proposta Enviada' },
  { cnpj: '00.030.000/0001-91', razaoSocial: 'Empresa A', status: 'Declínio' },
  { cnpj: '11.211.111/0001-92', razaoSocial: 'Empresa B', status: 'Aguardando' },
  { cnpj: '22.322.222/0001-93', razaoSocial: 'Empresa C', status: 'Proposta Enviada' },
  { cnpj: '33.433.333/0001-94', razaoSocial: 'Empresa D', status: 'Declínio' },
  { cnpj: '44.544.444/0001-95', razaoSocial: 'Empresa E', status: 'Proposta Enviada' },
];


export default function Fornecedores() {
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>(mockFornecedores);
  const [statusFilter, setStatusFilter] = useState<string>('Status');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const statusOptions = [
    { value: 'Declínio', label: 'Declínio' },
    { value: 'Aguardando', label: 'Aguardando' },
    { value: 'Proposta Enviada', label: 'Proposta Enviada' },
  ];

  useEffect(() => {
    // Simulação de API
    fetch('/api/fornecedores')
      .then((response) => response.json())
      .then((data) => setFornecedores(data));
  }, []);

  const filteredFornecedores = fornecedores.filter((fornecedor) =>
    (statusFilter === 'Status' || fornecedor.status === statusFilter) &&
    fornecedor.razaoSocial.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={styles.fornecedoresSection}>
      <div className={styles.header}>
        <>
          <SearchBox
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </>
          <DropdownFilter
          value={statusFilter}
          onChange={(value) => setStatusFilter(value)} // Atualiza o estado
          options={statusOptions}
          placeholder="Status"
        />
        <button className={styles.newQuoteButton}>Nova Cotação</button>
      </div>
      <div className={styles.tableContainer}>
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
      </div>
    </section>
  );
}
