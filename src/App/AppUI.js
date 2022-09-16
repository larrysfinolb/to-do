import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { ToDoItem } from '../ToDoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodosForm';
import { Modal } from '../Modal';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { TodosEmpty } from '../TodosEmpty';

function AppUI() {
  const { error, loading, searchedTodo, completeTodo, deleteTodo, openModal, setOpenModal } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodo.length && <TodosEmpty />}

        {searchedTodo.map(todo => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
