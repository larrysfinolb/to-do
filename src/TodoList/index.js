import React from 'react';
import './ToDoList.css';

export function ToDoList(props) {
  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalToDos.length && props.onEmptyToDos()}
      {!!props.totalToDos && !props.searchedToDos.length && props.onEmptySearch()}

      <ul>{!props.loading && !props.error && props.searchedToDos.map(props.children)}</ul>
    </section>
  );
}
