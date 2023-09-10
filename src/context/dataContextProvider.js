import React, { createContext, useContext } from "react";

export const dataContext = createContext();

export const useData = () => useContext(dataContext);

const dataContextProvider = ({ children }) => {
  const values = {};
  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
};

export default dataContextProvider;
