import React, { useState } from "react";
import "./Create.css"; // Импортируем стили
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const incrementAge = () => {
    setAge(age + 1);
  };

  const decrementAge = () => {
    if (age > 0) {
      setAge(age - 1);
    }
  };

  const handleAddItem = () => {
    // Ваш код для добавления элемента в базу данных
    console.log("Name:", name);
    console.log("Age:", age);
    // Сбросить значения полей после добавления
    setName("");
    setAge(0);
  };

  return (
    <div className="main">
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="name-input"
      />

      <div className="custom-input">
        <input
          type="number"
          value={age}
          placeholder="Age"
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
          placeholder="Subject line"
          name="subject"
          id="subject_input"
          required
          className="subject-select"
        >
          <option className="subbb" disabled hidden selected>
            Subject line
          </option>
          <option>I'd likeject</option>
          <option>I'd like to ask a question</option>
          <option>I'd like to make a proposal</option>
        </select>
        <button className="subject-decrement-button">
          <HiOutlineChevronDown />
        </button>
      </div>
      <input type="checkbox" />

      <button className="insert-button">Insert</button>
      <input type="checkbox" id="switch" className="toggle-input" />
      <label htmlFor="switch" className="toggle-label">
        Mode
      </label>
      <button className="delete-button">Delete</button>
    </div>
  );
};

export default Create;
