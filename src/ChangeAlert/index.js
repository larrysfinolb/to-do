import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';

export function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className='ChangeAlert-bg'>
        <div className='ChangeAlert-container'>
          <p>Parece que cambiaste tus ToDos en otra pestaña o ventana del navegador.</p>
          <p>¿Quieres sincronizar tus ToDos?</p>
          <button className='ToDoForm-button ToDoForm-button--add' onClick={toggleShow}>
            ¡Si!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
