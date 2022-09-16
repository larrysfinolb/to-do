import React from 'react';
import './ToDoIcon.css';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';

function ToDoIcon({ type, color = 'gray', onClick }) {
  const iconType = {
    check: color => <CheckSVG className='Icon-svg Icon-svg--check' fill={color} />,
    delete: color => <DeleteSVG className='Icon-svg Icon-svg--delete' fill={color} />,
  };
  return (
    <span className={`Icon-container Icon-container--${type}`} onClick={onClick}>
      {iconType[type](color)}
    </span>
  );
}

export { ToDoIcon };
