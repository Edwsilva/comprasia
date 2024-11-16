import Link from "next/link";
import styles from "./invoice.module.css";

// Tipos de dados
interface Customer {
  name: string;
  email: string;
}

type InvoiceStatus = "open" | "paid" | "void" | "uncollectible";

interface Invoice {
  id: number;
  createTs: string;
  customer: Customer;
  status: InvoiceStatus;
  value: number; // Valor em centavos
}

// Tipagem das propriedades do componente
interface InvoicesProps {
  invoices?: Invoice[];
}

const headers = [
  { label: "Date", key: "date" },
  { label: "Customer", key: "customer" },
  { label: "Email", key: "email" },
  { label: "Status", key: "status" },
  { label: "Value", key: "value" },
];

export default function Invoices({ invoices }: InvoicesProps) {
  console.log(invoices);
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
