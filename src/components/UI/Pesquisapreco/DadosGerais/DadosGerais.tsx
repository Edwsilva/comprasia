import styles from './DadosGerais.module.css';
import TitleValue from '@/components/UI/TitleValue/TitleValue';

export default function DadosGerais() {
  return (
    <div className={styles.container}>
      <section className={styles.details}>
        <TitleValue title="Processo" value="IPL-PRO-2024/0005999" />
        <TitleValue title="Área Demandante" value="DAF" />
      </section>
      
      <section className={styles.object}> 
        <TitleValue 
          title="Objeto" 
          value="Contrato para a prestação de serviços de limpeza e conservação de [espaço/edifício], incluindo cronograma de serviços, equipe designada e critérios de avaliação da qualidade do serviço prestado." 
        />
      </section>

      <section className={styles.keywords}>
        <p>Palavras Chaves</p>
        <ul className={styles.keywordsList}>
          <li className={styles.keywordItem}>Palavra1</li>
          <li className={styles.keywordItem}>Palavra2</li>
          <li className={styles.keywordItem}>Palavra3</li>
          <li className={styles.keywordItem}>Palavra4</li>
          <li className={styles.keywordItem}>Palavra5</li>
        </ul>
      </section>
    </div>
  );
}
