import React from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useToDos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    sincronizeItem: sincronizeToDos,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const totalToDos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  const searchedToDos = todos.filter(todo => {
    const searchText = searchValue.toLowerCase();
    const todoText = todo.text.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = text => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };
  const completeTodo = text => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[indexTodo].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = text => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
  };

  return {
    error,
    loading,
    totalToDos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedToDos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    sincronizeToDos,
  };
}
