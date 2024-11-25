"use client";
import { Toaster, toast } from "sonner";
import { useState, useEffect, useCallback } from "react";
import style from "./home.module.css";
import TitleValue from "@/components/UI/TitleValue/TitleValue";
import { FaPlus } from "react-icons/fa";
import { FaSearch, FaSyncAlt, FaChevronRight } from "react-icons/fa";
import DebouncedSearch from "@/components/UI/DebouncedSearch/DebouncedSearch";
import CustomButton from "@/components/UI/Button/CustomButton";
import ContainerWhiteBox from "@/components/Layout/Container/ContainerWhiteBox";
import ScrollableTable from "@/components/Layout/ScrollTable/ScrollableTable";
import ContainerHome from "@/components/Layout/Container/ContainerHome";

const headers = [
  { label: "Data", key: "data" },
  { label: "Processo", key: "processo" },
  { label: "Area", key: "area" },
  { label: "Objeto", key: "objeto" },
  { label: "Atas e Contratos", key: "atascontratos" },
  { label: "Fornecedores", key: "fornecedores" },
];

const data = [
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrato de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DAF",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrato de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-03",
    processo: "9123",
    area: "TIC",
    objeto: "Desenvolvimento de Software",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrato de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrato de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrato de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrato de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-03",
    processo: "9123",
    area: "TIC",
    objeto: "Desenvolvimento de Software",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrato de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrato de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrato de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrato de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-03",
    processo: "9123",
    area: "TIC",
    objeto: "Desenvolvimento de Software",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DAF",
    objeto: "Contrato de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
  {
    data: "2024-11-01",
    processo: "1234",
    area: "DSI",
    objeto: "Contrato de Fibra ótica",
    atascontratos: "Concluido",
    fornecedores: "Processando",
  },
  {
    data: "2024-11-02",
    processo: "5678",
    area: "DSI",
    objeto: "Locação de Equipamentos",
    atascontratos: "Processando",
    fornecedores: "Concluido",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [selectedArea, setSelectedArea] = useState("");
  const [resetSearch, setResetSearch] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);

  const uniqueAreas = Array.from(
    new Set(filteredData.map((item) => item.area))
  );

  useEffect(() => {
    setIsFiltering(true);
    // Combina os filtros de setor e termo de busca
    const filtered = data.filter((row) => {
      const matchesSearch = searchTerm
        ? row.objeto.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      const matchesArea = selectedArea ? row.area === selectedArea : true;

      return matchesSearch && matchesArea;
    });

    setFilteredData(filtered);
    setIsFiltering(false);
  }, [searchTerm, selectedArea]); // Recalcula sempre que o termo ou o setor mudar

  const handleSearch = useCallback(
    (searchTerm: string) => {
      const filtered = data.filter((row) => {
        const matchesSearch = row.objeto
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesArea = selectedArea ? row.area === selectedArea : true;
        return matchesSearch && matchesArea;
      });
      setFilteredData(filtered);
    },
    [selectedArea] // Apenas re-cria a função se `selectedArea` mudar
  );

  const handleRefresh = () => {
    setSelectedArea("");
    setFilteredData(data);
    setResetSearch(true); // Sinaliza para limpar o campo de busca
    setTimeout(() => setResetSearch(false), 0); // Reseta o sinalizador após limpar
  };

  return (
    <ContainerHome>
      <div className={style.pesquisaHeader}>
        Pesquisa de Preços
        <CustomButton
          title="Nova Pesquisa"
          icon={FaPlus}
          backgroundColor="var(--blue-600)"
          textColor="var(--background)"
          borderRadius="32px"
          size={14}
          onClick={() => {}}
        />
      </div>
      <ContainerWhiteBox>
        {/* <div>
          <Toaster />
          <button onClick={() => toast("My first toast")}>
            Give me a toast
          </button>
        </div> */}
        <DebouncedSearch
          onSearch={handleSearch}
          placeholder="Pesquisar por objeto"
          debounceDelay={500}
          clearSearch={resetSearch}
          additionalFilters={
            <div style={{ display: "flex" }}>
              <select
                className={style.select}
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
              >
                <option value="">Área Demandante</option>
                {uniqueAreas.map((area, index) => (
                  <option key={index} value={area}>
                    {area}
                  </option>
                ))}
              </select>
              <button className={style.refreshButton} onClick={handleRefresh}>
                <FaSyncAlt />
              </button>
            </div>
          }
        />
        <div>
          {!isFiltering && (
            <ScrollableTable headers={headers} data={filteredData} />
          )}
        </div>
      </ContainerWhiteBox>
    </ContainerHome>
  );
}
