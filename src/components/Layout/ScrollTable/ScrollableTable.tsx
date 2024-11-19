import React from "react";
import styles from "./scrollableTable.module.css";
import { FaChevronRight } from "react-icons/fa";

interface Header {
  label: string;
  key: string;
}

interface TableProps {
  headers: Header[];
  data: Record<string, any>[]; // Array de objetos representando as linhas
}

const ScrollableTable: React.FC<TableProps> = ({ headers, data }) => {
  return (
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
  );
};

export default ScrollableTable;
