import React, { useState } from "react";
import BtnSubmit from "./BtnSubmit";
import { data } from "autoprefixer";
import Result from "./Result";
const InputBox = () => {
  const [state, setState] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [resultData, setResultData] = useState({
    day:"",
    month:"",
    year:"",
  });
  const [isLeapYear, setIsLeapYear] = useState();
  const [maxDate, setMaxDate] = useState(31);
  const currentDate = new Date();
  const targetDate = new Date(parseInt(state.year),parseInt(state.month)-1,parseInt(state.day));

  const diffInMilliseconds = currentDate-targetDate;
  const diffInDays = Math.floor(diffInMilliseconds/(1000*60*60*24))
  let diffInMonths = (currentDate.getMonth()-1) -(targetDate.getMonth())+ (12*(currentDate.getFullYear() - targetDate.getFullYear()))
  if(diffInMonths < 0){
    diffInMonths = 12
  }
  const diffInYears = Math.abs(targetDate.getFullYear() - currentDate.getFullYear()) 
  const [errorType, setErrorType] = useState("");

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
   setResultData({day : diffInDays, month: diffInMonths, year: diffInYears});
    console.log(state);
    console.log("target d/m/y" ,targetDate)
    console.log("current day",currentDate.getDay());
    console.log("current month",currentDate.getMonth());
    console.log("current y",currentDate.getFullYear());
    console.log("target d",targetDate.getDay());
    console.log("target m",targetDate.getMonth());
    console.log("target y",targetDate.getFullYear());
    
    console.log("diffInday:" ,diffInDays);
    console.log("cdiffInmonth", diffInMonths)
    console.log("diffInYear: ", diffInYears);
    console.log(typeof(resultData.year))
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
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
              onChange={handleChange}
              className="inputText "
            ></input>
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
