import React from 'react';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearcher } from '../ToDoSearcher';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { ToDoForm } from '../ToDoForm';
import { Modal } from '../Modal';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { TodosEmpty } from '../TodosEmpty';
import { ToDoHeader } from '../ToDoHeader';
import { useToDos } from './useToDos';
import { ToDosEmptySearch } from '../ToDosEmptySearcher';
import { ChangeAlert } from '../ChangeAlert';

export function App() {
  const {
    error,
    loading,
    searchedToDos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalToDos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeToDos,
  } = useToDos();

  return (
    <React.Fragment>
      <ToDoHeader loading={loading}>
        <ToDoCounter totalToDos={totalToDos} completedTodos={completedTodos} />
        <ToDoSearcher searchValue={searchValue} setSearchValue={setSearchValue} />
      </ToDoHeader>

      <ToDoList
        error={error}
        loading={loading}
        searchedToDos={searchedToDos}
        totalToDos={totalToDos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyToDos={() => <TodosEmpty />}
        onEmptySearch={() => <ToDosEmptySearch searchValue={searchValue} />}>
        {todo => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </ToDoList>

      {openModal && (
        <Modal>
          <ToDoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />

      <ChangeAlert sincronize={sincronizeToDos} />
    </React.Fragment>
  );
}
