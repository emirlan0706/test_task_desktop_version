import React, { useState } from "react";
import "./Create.css";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import DataTable from "../table/DateTable";
import { useData } from "../../context/dataContextProvider";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [subscription, setSubscription] = useState("");
  const [employed, setEmployed] = useState(false);
  const {
    tableData,
    addData,
    editData,
    clearData,
    isNightMode,
    toggleNightMode,
  } = useData();
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleInsert = () => {
    const newData = {
      name,
      age,
      subscription,
      employed,
    };

    if (editingIndex === -1) {
      addData(newData);
    } else {
      editData(editingIndex, newData);
      setEditingIndex(-1);
    }

    setName("");
    setAge(0);
    setSubscription("");
    setEmployed(false);
  };

  const handleDelete = (index) => {
    clearData(index);
  };

  const handleEdit = (index) => {
    const dataToEdit = tableData[index];
    setEditingIndex(index);
    setName(dataToEdit.name);
    setAge(dataToEdit.age);
    setSubscription(dataToEdit.subscription);
    setEmployed(dataToEdit.employed);
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const decrementAge = () => {
    if (age > 0) {
      setAge(age - 1);
    }
  };

  return (
    <div className="reset">
      <div className={`last ${isNightMode ? "night-mode" : ""}`}>
        <div className="main">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="name-input"
          />
          <div className="custom-input">
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="age-input"
            />
            <button className="decrement-button" onClick={decrementAge}>
              <HiOutlineChevronDown />
            </button>
            <button className="increment-button" onClick={incrementAge}>
              <HiOutlineChevronUp />
            </button>
          </div>
          <div className="subject">
            <select
              value={subscription}
              onChange={(e) => setSubscription(e.target.value)}
              name="subject"
              id="subject_input"
              className="subject-select"
            >
              <option value="No Subscribed">No Subscribed</option>
              <option value="Subscribed">Subscribed</option>
              <option value="Other">Other</option>
            </select>
            <button className="subject-button">
              <HiOutlineChevronDown />
            </button>
          </div>
          <div className="checkter">
            <label htmlFor="check" className="main-check">
              <input
                type="checkbox"
                className="check"
                checked={employed}
                onChange={() => setEmployed(!employed)}
                name="check"
              />
              Employed
            </label>
          </div>
          <button onClick={handleInsert} className="button-have">
            {editingIndex === -1 ? "Insert" : "Update"}
          </button>
          <div className="line"></div>
          <input type="checkbox" id="switch" className="toggle-input" />
          <label
            htmlFor="switch"
            className="toggle-label"
            onClick={toggleNightMode}
          >
            Mode
          </label>
          <button className="button-have" onClick={() => handleDelete()}>
            Delete
          </button>
        </div>
        <DataTable
          data={tableData}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Create;
