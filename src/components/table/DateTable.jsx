import React from "react";
import "./DataTable.css";
import { useData } from "../../context/dataContextProvider";

const DataTable = ({ data, onEdit }) => {
  const { isNightMode, removeData } = useData();

  return (
    <div className="chiled">
      <table className={isNightMode ? "night-mode" : ""}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Subscription</th>
            <th>Employed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name ? item.name : "Not"}</td>
              <td>{item.age}</td>
              <td>
                {item.subscription ? item.subscription : "Not Subscription"}
              </td>
              <td>{item.employed ? "Employed" : "Unemployed"}</td>
              <td>
                <button className="edit" onClick={() => onEdit(index)}>
                  Edit
                </button>
                <button className="delete" onClick={() => removeData(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
