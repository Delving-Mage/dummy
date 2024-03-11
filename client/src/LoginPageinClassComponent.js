import React, { useState, useEffect } from 'react';

const TextEditor = () => {
  const [value, setValue] = useState('');
  const [tableSelection, setTableSelection] = useState({ start: null, end: null });
  const [selectedRows, setSelectedRows] = useState(0);
  const [selectedColumns, setSelectedColumns] = useState(0);
  const [showTablePreview, setShowTablePreview] = useState(false);

  useEffect(() => {
    adjustEditorHeight();
  }, [value]);

  const adjustEditorHeight = () => {
    const editor = document.getElementById('editor');
    const minHeight = 200; // Minimum height of the editor
    const scrollHeight = Math.max(editor.scrollHeight, minHeight);
    editor.style.height = scrollHeight + 'px';
  };

  const handleBoldClick = () => {
    document.execCommand('bold', false, null); // Execute browser's built-in bold command
  };

  const handleFontSizeChange = (event) => {
    document.execCommand('fontSize', false, event.target.value); // Execute browser's built-in font size change command
  };

  const handleInsertTable = () => {
    const tableHTML = generateTable(selectedRows, selectedColumns);
    document.execCommand('insertHTML', false, tableHTML); // Insert the table HTML
  };

  const generateTable = (rows, columns) => {
    let tableHTML = '<table style="border-collapse: collapse;">';
    for (let i = 0; i < rows; i++) {
      tableHTML += '<tr>';
      for (let j = 0; j < columns; j++) {
        tableHTML += '<td contenteditable="true" style="border: 1px solid black;"></td>';
      }
      tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    return tableHTML;
  };

  const handleMouseDown = (event) => {
    const editor = document.getElementById('editor');
    const editorRect = editor.getBoundingClientRect();
    const cellWidth = editorRect.width / 10; // Assuming 10 characters per row for cell width
    const cellHeight = 20; // Assuming 20 pixels per row for cell height

    const start = {
      row: Math.floor((event.clientY - editorRect.top) / cellHeight),
      column: Math.floor((event.clientX - editorRect.left) / cellWidth)
    };

    setTableSelection({ start, end: start });
    setShowTablePreview(true);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event) => {
    const editor = document.getElementById('editor');
    const editorRect = editor.getBoundingClientRect();
    const cellWidth = editorRect.width / 10; // Assuming 10 characters per row for cell width
    const cellHeight = 20; // Assuming 20 pixels per row for cell height

    const end = {
      row: Math.floor((event.clientY - editorRect.top) / cellHeight),
      column: Math.floor((event.clientX - editorRect.left) / cellWidth)
    };

    setSelectedRows(Math.abs(end?.row - tableSelection?.start?.row) + 1);
    setSelectedColumns(Math.abs(end?.column - tableSelection?.start?.column) + 1);
    setTableSelection((prevSelection) => ({ ...prevSelection, end }));
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleChange = (event) => {
    setValue(event.target.innerHTML); // Update state with the innerHTML of the contenteditable div
  };

  const alignCenter = () => {
    document.execCommand('justifyCenter');
  };

  const alignStart = () => {
    document.execCommand('justifyLeft');
  };

  const alignEnd = () => {
    document.execCommand('justifyRight');
  };

  return (
    <div className="text-editor">
      <div className="toolbar">
        <button onClick={handleBoldClick}>Bold</button>
        <select onChange={handleFontSizeChange} value="">
          <option value="" disabled>Select Font Size</option>
          <option value="1">10</option>
          <option value="2">20</option>
          <option value="3">30</option>
          {/* Add more options for different font sizes */}
        </select>
        <button onClick={handleInsertTable}>Insert Table</button>
        <button onClick={alignStart}>Align Start</button>
        <button onClick={alignCenter}>Align Center</button>
        <button onClick={alignEnd}>Align End</button>
      </div>
      <div
        id="editor"
        className="editor"
        contentEditable="true" // Make the div contenteditable
        onMouseDown={handleMouseDown} // Handle mouse down to start table selection
        onMouseMove={handleMouseMove} // Handle mouse move to update table selection
        onMouseUp={handleMouseUp} // Handle mouse up to end table selection
        onInput={handleChange} // Handle input changes
        dangerouslySetInnerHTML={{ __html: value }} // Set initial content from state
        placeholder="Type your text here..."
      />
      {showTablePreview && (
        <div className="table-preview">
          {selectedRows} rows x {selectedColumns} columns
        </div>
      )}
    </div>
  );
};

export default TextEditor;
