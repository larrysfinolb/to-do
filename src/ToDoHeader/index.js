import React from 'react';

export function ToDoHeader({ children, loading }) {
  return <header>{React.Children.toArray(children).map(child => React.cloneElement(child, { loading }))}</header>;
}
