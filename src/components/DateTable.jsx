import React from "react";
import "./DataTable.css";
import { useData } from "../context/dataContextProvider";

const DataTable = () => {
  const { tableData, isNightMode } = useData();

  return (
    <table className={isNightMode ? "night-mode" : ""}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Subscription</th>
          <th>Employed</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.subscription}</td>
            <td>{item.employed ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
