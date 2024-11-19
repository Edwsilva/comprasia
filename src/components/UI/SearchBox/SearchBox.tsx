import React from 'react';
import { CiSearch } from "react-icons/ci";
import styles from './SearchBox.module.css';

interface SearchBoxProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder = "Pesquisar", value, onChange }) => {
  return (
    <div className={styles.searchBoxWrapper}>
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.searchBox}
      />
      <span className={styles.searchIcon}>
        <CiSearch size={20} />
      </span>
    </div>
  );
};

export default SearchBox;
