import styles from './StatusTag.module.css';

interface StatusTagProps {
  status: 'Declínio' | 'Aguardando' | 'Proposta Enviada';
}

export default function StatusTag({ status }: StatusTagProps) {
  const getStatusClass = () => {
    switch (status) {
      case 'Declínio':
        return styles.declined;
      case 'Aguardando':
        return styles.pending;
      case 'Proposta Enviada':
        return styles.sent;
      default:
        return '';
    }
  };

  return <span className={`${styles.status} ${getStatusClass()}`}>{status}</span>;
}
