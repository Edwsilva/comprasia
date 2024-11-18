import Link from "next/link";
import styles from "./invoice.module.css";

// Tipos de dados
interface Customer {
  name: string;
  email: string;
}

type InvoiceStatus = "open" | "paid" | "void" | "uncollectible";
type Situacao = "processando" | "concluido";
interface Invoice {
  id: number;
  createTs: string;
  customer: Customer;
  status: InvoiceStatus;
  value: number; // Valor em centavos
}

interface Informacao {
  data: Date;
  processo: string;
  area: string;
  objeto: string;
  atas_contratos: Situacao;
  fornecedores: Situacao;
}

// Tipagem das propriedades do componente
// interface InvoicesProps {
//   invoices?: Invoice[];
// }

interface InformacoesProps {
  informacoes?: Informacao;
}

const headers = [
  { label: "Data", key: "data" },
  { label: "Processo", key: "processo" },
  { label: "Area", key: "area" },
  { label: "Objeto", key: "objeto" },
  { label: "Atas e Contratos", key: "atascontratos" },
  { label: "Fornecedores", key: "fornecedores" },
];

export default function Processos({ informacoes }: InformacoesProps) {
  console.log(informacoes);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <p className={styles.alert}>
          Displaying all invoices for public demo. Creation is disabled.
        </p>
        <div className={styles.header}>
          <h1 className={styles.title}>Invoices</h1>
          <Link href="/invoices/new" className={styles.button}>
            <span className={styles.icon}>+</span> Create Invoice
          </Link>
        </div>
        <div className={styles.grid}>
          <div className={styles.gridHeader}>
            {headers.map((header) => (
              <span key={header.key}>{header.label}</span>
            ))}
          </div>
          {invoices?.map((result) => (
            <div key={result.id} className={styles.gridItem}>
              <Link href={`/invoices/${result.id}`} className={styles.link}>
                <span>{new Date(result.createTs).toLocaleDateString()}</span>
              </Link>
              <Link href={`/invoices/${result.id}`} className={styles.link}>
                <span>{result.customer.name}</span>
              </Link>
              <Link href={`/invoices/${result.id}`} className={styles.link}>
                <span>{result.customer.email}</span>
              </Link>
              <span
                className={`${styles.status} ${
                  styles[`status-${result.status}`]
                }`}
              >
                {result.status}
              </span>
              <Link href={`/invoices/${result.id}`} className={styles.link}>
                <span>${(result.value / 100).toFixed(2)}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
