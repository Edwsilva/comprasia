import React from 'react';
import styles from './DropdownFilter.module.css';

interface DropdownFilterProps {
  value: string; // O valor selecionado
  onChange: (value: string) => void; // Função para lidar com a mudança de valor
  options: { value: string; label: string }[]; // Lista de opções com valor e rótulo
  placeholder: string; // Texto de placeholder
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({
  value,
  onChange,
  options,
  placeholder,
}) => {
  const extendedOptions = [{ value: placeholder, label: placeholder }, ...options];

    
    return (
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)} // Passa apenas o valor para o callback
        className={styles.dropdown}
      >
        {extendedOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };
  
  export default DropdownFilter;