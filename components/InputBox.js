import React, { useState } from "react";

import BtnSubmit from "./BtnSubmit";
import { data } from "autoprefixer";

const InputBox = ({ state, setState }) => {
  const [apiData, setApiData] = useState([]);

  const [isLeapYear, setIsLeapYear] = useState();
  const [maxDate, setMaxDate] = useState(31);
  const current = new Date();
  const currentYear = `${current.getFullYear()}`;
  const [errorType, setErrorType] = useState("");

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 px-6 ">
        <div className="inputBox">
          <label htmlFor="day" className="label">
            DAY
          </label>
          <input
            type="text"
            name="day"
            pattern="[0-9]*"
            max={maxDate}
            minLength="1"
            maxLength="2"
            placeholder="DD"
            defaultValue=""
            onChange={handleChange}
            className="inputText focus:border-invert focus:border-[#4E328D] focus:outline-none"
          ></input>
        </div>
        <div className="inputBox">
          <label htmlFor="day" className="label">
            MONTH
          </label>
          <input
            type="text"
            pattern="[0-9]*"
            minLength={1}
            maxLength={2}
            name="month"
            placeholder="MM"
            defaultValue=""
            onChange={handleChange}
            className="inputText "
          ></input>
        </div>
        <div className="inputBox">
          <label htmlFor="day" className="label">
            YEAR
          </label>
          <input
            type="text"
            pattern="[0-9]*"
            minLength={1}
            maxLength={4}
            name="year"
            placeholder="YYYY"
            required
            defaultValue=""
            onChange={handleChange}
            className="inputText "
          ></input>
        </div>
      </div>
      <BtnSubmit />
    </div>
  );
};

export default InputBox;
