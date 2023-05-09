import React, { useEffect, useState } from "react";

const Result = ({ data }) => {
  return (
    <div className="flex flex-col self-left px-3 -space-y-12 text-left w-full">
      {data.year != "" ? (
        <p className="resultItems first:pt-8 pb-10">
          <span className="result">{data.year}</span> years
        </p>
      ) : data.year === "" ? (
        <p className="resultItems -space-y-6">
          <span className="result text-[80px]">- -</span> years
        </p>
      ) : (
        ""
      )}
      {data.month != "" ? (
        <p className="resultItems first:pt-8 pb-10">
          <span className="result">{data.month}</span> months
        </p>
      ) : data.year === "" ? (
        <p className="resultItems">
          <span className="result text-[80px]">- -</span> months
        </p>
      ) : (
        ""
      )}
      {data.day != "" ? (
        <p className="resultItems first:pt-8">
          <span className="result">{data.day}</span> days
        </p>
      ) : data.day === "" ? (
        <p className="resultItems">
          <span className="result text-[80px]">- -</span> days
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Result;
