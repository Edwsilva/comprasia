import styles from './selecaofornecedores.module.css';
import TitleValue from "@/components/UI/TitleValue/TitleValue";



interface Fornecedor {
  cnpj: string;
  razaoSocial: string;
  email: string;
}

const mockFornecedores: Fornecedor[] = [
  { cnpj: '00.000.000/0001-91', razaoSocial: 'Brilho Limpeza e Conservação Ltd', email: 'contato@brilholimpeza.com.br' },
  { cnpj: '11.111.111/0001-92', razaoSocial: 'Limpeza Total Serviços Ltda.', email: 'contato@limpeza.com.br' },
  { cnpj: '22.222.222/0001-93', razaoSocial: 'EcoClean Soluções em Limpeza S/A', email: 'info@ecoclean.com.br' },
]
export default function SelecaoFornecedores() {
    return (
      <section className={styles.container}>
        <div className={styles.mainTitle}>
          <h1>Seleção de Fornecedores</h1>
          <p>Com base no seu Termo de Referência, sugerimos alguns fornecedores para você enviar o documento e o Modelo de Proposta. Se preferir, pode adicionar um novo fornecedor à lista.</p>
        </div>

        <div className={styles.object}>
          <TitleValue title='Objeto' value='Contrato para a prestação de serviços de limpeza e conservação de [espaço/edifício], incluindo cronograma de serviços, equipe designada e critérios de avaliação da qualidade do serviço prestado.'/>
        </div>

        <div className={styles.addButtons}>
          <button className={styles.button}> Upload Modelo de Proposta</button>
          <button className={styles.button}> Novo Fornecedor</button>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
              <tbody>
                  {mockFornecedores.map((fornecedor) => (
                    <tr key={fornecedor.cnpj}>
                      <td  className={styles.checkColumn}>
                          <input type="checkbox" id="myCheck"></input>
                      </td>
                      <td className={styles.cnpjColumn}>{fornecedor.cnpj}</td>
                      <td className={styles.razaoSocialColumn}>{fornecedor.razaoSocial}</td>
                      <td className={styles.emailColumn}>{fornecedor.email}</td>
                    </tr>
                  ))}
              </tbody>
          </table>
        </div>
      

      <button className={styles.sendEmail}>Enviar E-mail</button>

      </section>
    );
  }
  