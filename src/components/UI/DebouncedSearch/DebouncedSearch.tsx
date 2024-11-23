import { useState, useEffect } from "react";
import style from "./DebouncedSearch.module.css";

type DebouncedSearchProps = {
  onSearch: (searchTerm: string) => void; // Callback para passar o valor filtrado
  debounceDelay?: number; // Delay de debounce, com valor padrão de 500ms
  placeholder?: string; // Placeholder do input de busca
  additionalFilters?: React.ReactNode; // Componentes adicionais, como selects ou outros campos
  clearSearch?: boolean; // Nova prop para indicar se o campo deve ser limpo
};

const DebouncedSearch = ({
  onSearch,
  debounceDelay = 500,
  placeholder = "Pesquisar...",
  additionalFilters,
  clearSearch = false,
}: DebouncedSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm); // Chama a função passada via props após o delay
    }, debounceDelay);

    return () => clearTimeout(timer); // Limpa o timeout anterior ao desmontar ou alterar
  }, [searchTerm, debounceDelay, onSearch]);

  useEffect(() => {
    if (clearSearch) {
      setSearchTerm(""); // Limpa o campo de busca
    }
  }, [clearSearch]);

  return (
    <div className={style.searchRow}>
      <div className={style.searchInput}>
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {additionalFilters}
    </div>
  );
};

export default DebouncedSearch;
