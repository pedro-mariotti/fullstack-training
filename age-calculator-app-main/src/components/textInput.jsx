import { useState } from "react";
import { textInput } from "./components/textInput.jsx";
import buttonArrow from "./assets/images/icon-arrow.svg";
import "./App.css";

function TextInput({ dateType, dateToSet, currentDate }) {
  return (
    <input
      type="text"
      required
      id="year-input"
      onChange={(e) => setYear(e.target.value)}
    />
  );
}

export default TextInput;
