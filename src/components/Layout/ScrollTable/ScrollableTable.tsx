import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import styles from "./scrollableTable.module.css";
interface Header {
  label: string;
  key: string;
}

interface TableProps {
  headers: Header[];
  data: Record<string, any>[]; // Array de objetos representando as linhas
}

const ScrollableTable: React.FC<TableProps> = ({ headers, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // Defina quantas linhas deseja mostrar por página

  const totalPages = Math.ceil(data.length / rowsPerPage); // Calcula o número total de páginas
  const startIndex = (currentPage - 1) * rowsPerPage;
  console.log("startIndex ", startIndex);
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex); // Dados da página atual

  // Funções para mudar a página
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPagination = () => {
    const pageNumbers = [];

    // Adiciona números de página, incluindo "..." se necessário
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <span
          key={i}
          className={`${styles.pageNumber} ${
            currentPage === i ? styles.activePage : ""
          }`}
          onClick={() => goToPage(i)}
        >
          {i}
        </span>
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header) => {
                // Verifica se o header.label é "Atas e Contratos" ou "Fornecedores"
                const headerClass =
                  header.label === "Atas e Contratos" ||
                  header.label === "Fornecedores"
                    ? `${styles.tableHeader} ${styles.centered}`
                    : styles.tableHeader; // Caso contrário, apenas a classe padrão

                return (
                  <th key={header.key} className={headerClass}>
                    {header.label}
                  </th>
                );
              })}
              {/* Adiciona a coluna para o ícone */}
              <th className={styles.tableHeader}></th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, rowIndex) => (
              <tr key={rowIndex} className={styles.tableRow}>
                {headers.map((header) => {
                  console.log(row);
                  console.log(header.key);
                  console.log(row[header.key]);
                  const value = row[header.key];
                  const statusClass =
                    value === "Concluido"
                      ? `${styles.status} ${styles.concluido}`
                      : value === "Processando"
                      ? `${styles.status} ${styles.processando}`
                      : ""; // Caso o valor seja outro, sem cor personalizada

                  return (
                    <td key={header.key} className={styles.tableCell}>
                      <span className={statusClass}>{value}</span>
                    </td>
                  );
                })}

                <td className={styles.iconCell}>
                  <FaChevronRight className={styles.chevronIcon} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination}>
        {currentPage > 1 && (
          <span onClick={goToPrevPage} className={styles.navButton}>
            <FaChevronLeft />
            Anterior
          </span>
        )}

        {renderPagination()}
        {currentPage < totalPages && (
          <span onClick={goToNextPage} className={styles.navButton}>
            Próximo
            <FaChevronRight />
          </span>
        )}
      </div>
    </div>
  );
};

export default ScrollableTable;
