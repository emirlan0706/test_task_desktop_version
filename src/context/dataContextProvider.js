// Ваш файл dataContextProvider.js

import React, { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [tableData, setTableData] = useState([]);
  const [isNightMode, setIsNightMode] = useState(false);

  // Загрузка данных из localStorage при монтировании
  useEffect(() => {
    const savedTableData = localStorage.getItem("tableData");
    const savedIsNightMode = localStorage.getItem("isNightMode");

    if (savedTableData) {
      setTableData(JSON.parse(savedTableData));
    }

    if (savedIsNightMode) {
      setIsNightMode(savedIsNightMode === "true");
    }
  }, []);

  // Сохранение данных в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("tableData", JSON.stringify(tableData));
    localStorage.setItem("isNightMode", isNightMode.toString());
  }, [tableData, isNightMode]);

  const addData = (data) => {
    setTableData([...tableData, data]);
  };

  const clearData = () => {
    // Очистите данные в localStorage
    localStorage.removeItem("tableData");
    // Очистите данные в состоянии
    setTableData([]);
  };

  const editData = (index, data) => {
    const updatedData = [...tableData];
    updatedData[index] = data;
    setTableData(updatedData);
  };

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <DataContext.Provider
      value={{
        tableData,
        addData,
        clearData,
        editData,
        isNightMode,
        toggleNightMode,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
