import styles from './StatusTagTipoMapaPesquisa.module.css';

interface StatusTagProps {
  status: 'Fornecedor' | 'Ata';
}

export default function StatusTag({ status }: StatusTagProps) {
  const getStatusClass = () => {
    switch (status) {
      case 'Fornecedor':
        return styles.fornecedor;
      case 'Ata':
        return styles.ata;
      default:
        return '';
    }
  };

  return <span className={`${styles.status} ${getStatusClass()}`}>{status}</span>;
}
