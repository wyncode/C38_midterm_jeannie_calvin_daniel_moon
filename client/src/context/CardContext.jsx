import React, { useState, createContext } from 'react';
export const CardContext = createContext();
export const CardProvider = (props) => {
  const [info, setInfo] = useState(null);
  return (
    <CardContext.Provider value={{ info, setInfo }}>
      {props.children}
    </CardContext.Provider>
  );
};