import styles from './MapaPesquisaPreco.module.css';
import StatusTag from './StatusTagTipoMapaPesquisa';

import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";



interface Fornecedor {
  tipo: 'Fornecedor' | 'Ata';
  razaoSocial: string;
  descricao: string;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
  actions: string;
}

const mockFornecedores: Fornecedor[] = [
    {
      tipo: 'Fornecedor',
      razaoSocial: "Empresa Alfa Ltda",
      descricao: "Fornecimento de materiais de escritório",
      quantidade: 500,
      valorUnitario: 2.50,
      valorTotal: 1250.0,
      actions: "Detalhes",
    },
    {
      tipo: 'Fornecedor',
      razaoSocial: "Beta Serviços e Logística",
      descricao: "Prestação de serviços de transporte e logística",
      quantidade: 20,
      valorUnitario: 150.0,
      valorTotal: 3000.0,
      actions: "Detalhes",
    },
    {
      tipo: 'Fornecedor',
      razaoSocial: "Gamma Tecnologia S/A",
      descricao: "Fornecimento de equipamentos de informática",
      quantidade: 10,
      valorUnitario: 5000.0,
      valorTotal: 50000.0,
      actions: "Detalhes",
    },
    {
      tipo: 'Ata',
      razaoSocial: "Delta Construtora EPP",
      descricao: "Serviços de manutenção predial",
      quantidade: 1,
      valorUnitario: 10000.0,
      valorTotal: 10000.0,
      actions: "Detalhes",
    },
  ];


export default function Fornecedores() {


  return (
    <section className={styles.mapaSection}>
      <div className={styles.header}>
        <button className={styles.mapaPesquisaButton}>
            Mapa de Pesquisa
            <MdOutlineFileDownload size={16} />
        </button>

        <div>
            <button className={styles.addButton}>Adicionar Fornecedor</button>
            <button className={styles.addButton}>Adicionar Ata</button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
            <th className={styles.tipoColumn}>Tipo</th>
            <th className={styles.razaoSocialColumn}>Razão Social</th>
            <th className={styles.descricaoColumn}>Descrição</th>
            <th className={styles.quantidadeColumn}>Quantidade</th>
            <th className={styles.valorUnitarioColumn}>Valor Unitário</th>
            <th className={styles.valorTotalColumn}>Valor Total</th>
            <th className={styles.actionsColumn}>Ações</th>
            </tr>
          </thead>
          <tbody>
                {mockFornecedores.map((fornecedores) => (
                  <tr key={fornecedores.razaoSocial}>
                    <td className={styles.tipoColumn}>
                        <StatusTag status={fornecedores.tipo}/>
                    </td>
                    <td className={styles.razaoSocialColumn}>
                        <div className={styles.razaoSocialCell}>
                          <IoMdInformationCircleOutline size={24}/>
                          {fornecedores.razaoSocial}
                        </div>
                    </td>
                    <td className={styles.descricaoColumn}>{fornecedores.descricao}</td>
                    <td className={styles.quantidadeColumn}>{fornecedores.quantidade}</td>
                    <td className={styles.valorUnitarioColumn}>R$ {fornecedores.valorUnitario.toFixed(2)}</td>
                    <td className={styles.valorTotalColumn}>R$ {fornecedores.valorTotal.toFixed(2)}</td>
                    <td className={styles.actionsColumn}>
                        <a href={fornecedores.actions} target="_blank" rel="noopener noreferrer">
                        {fornecedores.actions}
                        </a>   
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

    </section>
    );
    }