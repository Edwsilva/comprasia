import styles from './StatusTagContratos.module.css';

interface StatusTagProps {
  status: 'Processando' | 'Concluído';
}

export default function StatusTag({ status }: StatusTagProps) {
  const getStatusClass = () => {
    switch (status) {
      case 'Processando':
        return styles.pending;
      case 'Concluído':
        return styles.done;
      default:
        return '';
    }
  };

  return <span className={`${styles.status} ${getStatusClass()}`}>{status}</span>;
}
