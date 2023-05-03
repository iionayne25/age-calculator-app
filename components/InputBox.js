import React, { useState } from "react";

const InputBox = () => {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });

  const reset = () => {
    setDay("");
    setMonth("");
    setYear("");
  };
  const handleInput = (e) => {
    const fieldDay = e.target.day;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldDay]: fieldValue,
    }));
  };

  return (
    <>
      <form className="">
        <div className="grid grid-cols-3 gap-4 px-6 ">
          <div className="inputBox">
            <label for="day" className="label">
              DAY
            </label>
            <input
              type="text"
              pattern="[0-9]*"
              id="day"
              placeholder="DD"
              value={day}
              required
              onChange={handleInput}
              className="inputText focus:border-invert  focus:border-[#4E328D] focus:outline-none"
            ></input>
            {!e.target.checkValidity() ? (
              <p className="text-[9.5px]">Must be a valid date</p>
            ) : (
              ""
            )}
          </div>
          <div className="inputBox">
            <label for="day" className="label">
              MONTH
            </label>
            <input
              type="text"
              pattern="[0-9]*"
              id="month"
              placeholder="MM"
              required
              onChange={(e) => setmonth(e.currentTarget.value)}
              className="inputText"
            ></input>
          </div>
          <div className="inputBox">
            <label for="day" className="label">
              YEAR
            </label>
            <input
              type="text"
              pattern="[0-9]*"
              id="year"
              placeholder="YYYY"
              required
              onChange={(e) => setYear(e.currentTarget.value)}
              className="inputText"
            ></input>
          </div>
        </div>
      </form>
    </>
  );
};

export default InputBox;
