import React from 'react';

export function useStorageListener(sincronize) {
  const [storageChange, setStorageChange] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('storage', e => {
      if (e.key === 'TODOS_V1') {
        setStorageChange(true);
      }
    });
  }, []);

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  return { show: storageChange, toggleShow: toggleShow };
}
