import React from 'react';
import './ToDoCounter.css';

function ToDoCounter({ totalToDos, completedTodos, loading }) {
  return (
    <h2 className={`ToDoCounter ${!!loading && 'ToDoCounter--disabled'}`}>
      Has completado {completedTodos} de {totalToDos} TODOs
    </h2>
  );
}

export { ToDoCounter };
