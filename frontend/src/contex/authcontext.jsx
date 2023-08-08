import React, { createContext, useContext, useState } from "react";

// Create a context
const MyContext = createContext();

// Create a component that will provide the context value
const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(false);

  return (
    <MyContext.Provider value={[data, setData]}>{children}</MyContext.Provider>
  );
};

export { MyContextProvider, MyContext };
