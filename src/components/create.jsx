import React, { useState } from "react";
import "./Create.css";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import DataTable from "./DateTable";
import { useData } from "../context/dataContextProvider";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [subscription, setSubscription] = useState("");
  const [employed, setEmployed] = useState(false);

  const { addData, tableData, isNightMode, toggleNightMode } = useData();

  const handleInsert = () => {
    const newData = {
      name,
      age,
      subscription,
      employed,
    };

    addData(newData);

    setName("");
    setAge(0);
    setSubscription("");
    setEmployed(false);
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
            placeholder={age < 0 ? "Age" : ""}
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
            required
            className="subject-select"
          >
            <option className="subbb" disabled hidden></option>
            <option>Subscribed</option>
            <option>Not Subscribed</option>
            <option>Other</option>
          </select>
          <button className="subject-button">
            <HiOutlineChevronDown />
          </button>
        </div>
        <div className="checkter">
          <label htmlFor="check" className="main-check">
            <input
              type="checkbox"
              id="check"
              checked={employed}
              onChange={() => setEmployed(!employed)}
              name="check"
            />
            Employed
          </label>
        </div>
        <button onClick={handleInsert} className="button-have">
          Insert
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
        <button className="button-have">Delete</button>
      </div>
      <DataTable data={tableData} />
    </div>
  );
};

export default Create;
