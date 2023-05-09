import React, { useState } from "react";
import BtnSubmit from "./BtnSubmit";
import Result from "./Result";

const InputBox = () => {
  const [state, setState] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [resultData, setResultData] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [formErrors, setFormErrors] = useState({
    day: "",
    month: "",
    year: "",
  });

  const currentDate = new Date();
  const targetDate = new Date(
    parseInt(state.year),
    parseInt(state.month) - 1,
    parseInt(state.day)
  );

  const diffInMilliseconds = currentDate - targetDate;
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  let diffInMonths =
    currentDate.getMonth() -
    1 -
    targetDate.getMonth() +
    12 * (currentDate.getFullYear() - targetDate.getFullYear());
  if (diffInMonths < 0) {
    diffInMonths = 12;
  }
  const diffInYears = Math.abs(
    targetDate.getFullYear() - currentDate.getFullYear()
  );

  const getNumberOfDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    validateInput(errors);
  };

  const validateInput = (errors) => {
    if (!state.day) {
      errors.day = "This field is rquired";
    } else if (state.day > 31 || state.day === "00") {
      errors.day = "Must be a valid day";
    }
    if (!state.month) {
      errors.month = "This field is rquired";
    } else if (state.month > 12 || state.month === "00") {
      errors.month = "Must be a valid month";
    }
    if (!state.year) {
      errors.year = "This field is rquired";
    } else if (
      parseInt(state.year) > currentDate.getFullYear() ||
      state.year === "0000"
    ) {
      errors.year = "Must be a valid year";
    }
    if (state.month && state.day && state.year) {
      const numberOfDays = getNumberOfDaysInMonth(
        parseInt(state.month),
        parseInt(state.year)
      );
      if (parseInt(state.day) > numberOfDays) {
        errors.day = "Must be a valid date";
      }
    }
    if (Object.keys(errors).length === 0) {
      setResultData({
        day: diffInDays,
        month: diffInMonths,
        year: diffInYears,
      });
      setFormErrors("");
    } else {
      setFormErrors(errors);
      setResultData({ day: "", month: "", year: "" });
    }
  };
  return (
    <div className="space-y-0">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-4 px-6 ">
            <div className="inputBox">
              <label
                htmlFor="day"
                className={`label ${formErrors.day ? "error-label" : ""}`}
              >
                DAY
              </label>
              <input
                type="text"
                name="day"
                pattern="[0-9]*"
                minLength="1"
                maxLength="2"
                placeholder="DD"
                value={state.day}
                onChange={handleChange}
                className={`inputText focus:border-invert focus:border-[#4E328D] focus:outline-none
              ${formErrors.day ? "error-input" : ""}`}
              ></input>
              {formErrors.day && <div className="error">{formErrors.day}</div>}
            </div>
            <div className="inputBox">
              <label
                htmlFor="day"
                className={`label ${formErrors.month ? "error-label" : ""}`}
              >
                MONTH
              </label>
              <input
                type="text"
                pattern="[0-9]*"
                minLength={1}
                maxLength={2}
                name="month"
                placeholder="MM"
                onChange={handleChange}
                className={`inputText focus:border-invert focus:border-[#4E328D] focus:outline-none
              ${formErrors.month ? "error-input" : ""}`}
              ></input>
              {formErrors.month && (
                <div className="error">{formErrors.month}</div>
              )}
            </div>
            <div className="inputBox">
              <label
                htmlFor="day"
                className={`label ${formErrors.year ? "error-label" : ""}`}
              >
                YEAR
              </label>
              <input
                type="text"
                pattern="[0-9]*"
                minLength={1}
                maxLength={4}
                name="year"
                placeholder="YYYY"
                onChange={handleChange}
                className={`inputText focus:border-invert focus:border-[#4E328D] focus:outline-none
              ${formErrors.year ? "error-input" : ""}`}
              ></input>
              {formErrors.year && (
                <div className="error">{formErrors.year}</div>
              )}
            </div>
          </div>
          <BtnSubmit />
        </div>
      </form>
      <Result data={resultData} />
    </div>
  );
};

export default InputBox;
