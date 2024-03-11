import React from 'react';

const TableButton = () => {
  const insertTable = () => {
    const table = prompt("Enter table dimensions (e.g., 3x3):");
    if (table) {
      const [rows, cols] = table.split('x').map(Number);
      if (!isNaN(rows) && !isNaN(cols)) {
        const quill = window.quillRef.getEditor();
        const range = quill.getSelection(true);
        quill.insertEmbed(range.index, 'table', { rows, cols });
      }
    }
  };

  return (
    <button onClick={insertTable}>Insert Table</button>
  );
};

export default TableButton;
