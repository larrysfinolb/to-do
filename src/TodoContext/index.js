import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  const searchedTodo = todos.filter(todo => {
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

  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodo,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
