'use client';

import styles from './uploadtr.module.css';
import { useState } from 'react';

import { MdOutlineFileUpload, MdInsertDriveFile } from 'react-icons/md';


export default function UploadTermoReferencia() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Função para capturar o arquivo selecionado
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  // Funções para drag and drop
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file || null);
  };

    return (
      <section className={styles.container}>
        <div className={styles.mainTitle}>
          <h1>Termo de Referência</h1>
          <p>Faça o upload do Termo de Referência para iniciar sua pesquisa de preços.</p>
        </div>

        <div className={styles.processo}>
          Processo
          <input
            type="text"
            id="processoInput"
            className={styles.inputBox}
            placeholder="Digite o número do processo"
        />
        </div>

        <div className={styles.areaDemandante}>
          Área Demandante
          <select id="areaDemandanteSelect" className={styles.selectBox}>
            <option value="">Selecione...</option>
            <option value="financeiro">Financeiro</option>
            <option value="juridico">Jurídico</option>
            <option value="tecnologia">Tecnologia</option>
        </select>
        </div>
      
        <div
        className={styles.uploadBox}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <label htmlFor="fileInput" className={styles.fileLabel}>
          <MdOutlineFileUpload size={40} />
          <p>
          Arraste e solte ou <span className={styles.highlightText}>selecione um arquivo</span> para enviar
          <br />
          DOC ou PDF
          </p>
          <input
            type="file"
            id="fileInput"
            className={styles.fileInput}
            accept=".doc,.docx,.pdf"
            onChange={handleFileChange}
          />
        </label>

        {/* Ícone e nome do arquivo */}
        {selectedFile && (
          <div className={styles.filePreview}>
            <MdInsertDriveFile size={40} color="#555" />
            <p className={styles.fileName}>{selectedFile.name}</p>
          </div>
        )}
      </div>

      <button className={styles.uploadButton}>Upload de Arquivo</button>

      </section>
    );
  }
  