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

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex); // Dados da página atual

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

    if (totalPages <= 5) {
      // Exibe todas as páginas
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
    } else {
      if (currentPage <= 5) {
        for (let i = 1; i <= 5; i++) {
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
        pageNumbers.push(<span key="ellipsis">...</span>);
        pageNumbers.push(
          <span
            key={totalPages}
            className={`${styles.pageNumber} ${
              currentPage === totalPages ? styles.activePage : ""
            }`}
            onClick={() => goToPage(totalPages)}
          >
            {totalPages}
          </span>
        );
      } else if (currentPage > totalPages - 3) {
        pageNumbers.push(
          <span
            key={1}
            className={`${styles.pageNumber} ${
              currentPage === 1 ? styles.activePage : ""
            }`}
            onClick={() => goToPage(1)}
          >
            {1}
          </span>
        );
        pageNumbers.push(<span key="ellipsis">...</span>);

        for (let i = totalPages - 4; i <= totalPages; i++) {
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
      } else {
        pageNumbers.push(
          <span
            key={1}
            className={`${styles.pageNumber} ${
              currentPage === 1 ? styles.activePage : ""
            }`}
            onClick={() => goToPage(1)}
          >
            {1}
          </span>
        );
        pageNumbers.push(<span key="ellipsis">...</span>);

        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
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
        pageNumbers.push(<span key="ellipsis-end">...</span>);
        pageNumbers.push(
          <span
            key={totalPages}
            className={`${styles.pageNumber} ${
              currentPage === totalPages ? styles.activePage : ""
            }`}
            onClick={() => goToPage(totalPages)}
          >
            {totalPages}
          </span>
        );
      }
    }

    return pageNumbers;
  };

  return (
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
            <th className={styles.tableHeader}>&nbsp;</th>
          </tr>
        </thead>
        {currentData.map((row, rowIndex) => (
          <tr key={rowIndex} className={styles.tableRow}>
            {headers.map((header) => {
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
      </table>
      <div className={styles.pagination}>
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className={styles.navButton}
        >
          Anterior{" "}
        </button>
        {renderPagination()}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={styles.navButton}
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default ScrollableTable;
