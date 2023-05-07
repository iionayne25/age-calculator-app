import React from "react";
import InputBox from "./InputBox";
import Result from "./Result";

export default function Form() {
  const [state, setState] = React.useState({
    dayInput: "",
    monthInput: "",
    yearInput: "",
  });

  return (
    <div>
      <InputBox state={state} setState={setState} />
      <Result data={state} />
    </div>
  );
}
