import React, { useState } from "react";

import BtnSubmit from "./BtnSubmit";
import { data } from "autoprefixer";

const InputBox = () => {
 const [state,setState] =useState({
  dayInput:"",
  monthInput:"",
  yearInput:"",
 })
 
const [apiData,setApiData] = useState([]);


  const [isLeapYear, setIsLeapYear] = useState();
  const [maxDate, setMaxDate] = useState(31);
  const current = new Date();
  const currentYear = `${current.getFullYear()}`;
  const [errorType, setErrorType] = useState("");

  const handleChange =(event)=> {
    setState({...state,[event.target.name]:event.target.value})
  }

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data ={
      day: event.target.day.value,
     month: event.target.month.value,
      year: event.target.year.value
    }
    
    // API endpoint where we send form data.
    const endpoint = '/api/form';
 
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data 
      // Send the data to the server in JSON format.
      body: JSON.stringify({
        day: `${event.target.day.value}`,
        month:`${event.target.month.value}`,
        year: `${event.target.year.value}`})
    };
  console.log("ii: ",event.target.day.value)
  console.log(typeof(event.target.day.value))
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
 
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    setApiData(result)
    console.log(`Is this your data : ${result.day} ${result.month} ${result.year}`);
  };

console.log("apiData:",apiData)
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5" >
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
            {errorType === "emptyInputDay" ? (
              <p className="errorMessage">This Field id required</p>
            ) : errorType === "invalidDay" ? (
              <p className="errorMessage">Must be a valid day</p>
            ) : errorType === "invalidDate" ? (
              <p className="errorMessage">Must be a valid date</p>
            ) : (
              ""
            )}
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
            {errorType === "emptyInputMonth" ? (
              <p className="errorMessage">This Field id required</p>
            ) : errorType === "invalidMonth" ? (
              <p className="errorMessage">Must be a valid month</p>
            ) : (
              ""
            )}
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
              onChange={handleChange}
              className="inputText "
            ></input>
            {errorType === "emptyInputYear" ? (
              <p className="errorMessage">This Field is required</p>
            ) : errorType === "invalidYear" ? (
              <p className="errorMessage">Must be a valid year</p>
            ) : (
              ""
            )}
          </div>
        </div>
       
      <BtnSubmit/>
      
      </form>
    </div>
  );
};

export default InputBox;
