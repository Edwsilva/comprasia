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
  const rowsPerPage = 5; // Defina quantas linhas deseja mostrar por página

  const totalPages = Math.ceil(data.length / rowsPerPage); // Calcula o número total de páginas
  const startIndex = (currentPage - 1) * rowsPerPage;
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
              {headers.map((header) => (
                <th key={header.key} className={styles.tableHeader}>
                  {header.label}
                </th>
              ))}
              <th className={styles.tableHeader}></th>
              {/* Adicionei uma coluna para o ícone */}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={styles.tableRow}>
                {headers.map((header) => (
                  <td key={header.key} className={styles.tableCell}>
                    {row[header.key]}
                  </td>
                ))}

                <td className={styles.iconCell}>
                  <FaChevronRight className={styles.chevronIcon} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination}>
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          <FaChevronLeft />
        </button>
        {renderPagination()}
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ScrollableTable;
