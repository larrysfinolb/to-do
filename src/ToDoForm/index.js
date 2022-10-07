import React from 'react';
import './ToDoForm.css';

export function ToDoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = event => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = event => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea value={newTodoValue} placeholder='Cortar la cebolla para el almuerzo' onChange={onChange} />
      <div className='ToDoForm-buttonContainer'>
        <button className='ToDoForm-button ToDoForm-button--cancel' type='button' onClick={onCancel}>
          Cancelar
        </button>
        <button className='ToDoForm-button ToDoForm-button--add' type='submit'>
          Añadir
        </button>
      </div>
    </form>
  );
}
