import React from 'react';
import './ToDoSearcher.css';

function ToDoSearcher({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = e => setSearchValue(e.target.value);

  return (
    <input
      className={`ToDoSearcher ${!!loading && 'ToDoSearcher--disabled'}`}
      value={searchValue}
      placeholder='Cebolla'
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { ToDoSearcher };
