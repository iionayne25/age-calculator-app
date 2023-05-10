import React, { useEffect, useState } from "react";

const Result = ({ data }) => {
  return (
    <div className="flex flex-col self-left px-4 -space-y-12  text-left w-full
    xl:-space-y-8 xl:px-8">
      {data.year != "" ? (
        <p className="resultItems text-[40px] first:pt-4 pb-10 xl:first:pt-0 xl:pb-2 ">
          <span className="result">{data.year}</span> years
        </p>
      ) : data.year === "" ? (
        
          <p className="resultItems pb-8  xl:pb-0 text-[45px] ">
          <span className="noResult">- -</span> years
        </p>
        
       
      ) : (
        ""
      )}
      {data.month != "" ? (
        <p className="resultItems text-[40px] first:pt-8 pb-10 xl:pb-2">
          <span className="result">{data.month}</span> months
        </p>
      ) : data.year === "" ? (
        <p className="resultItems text-[45px] pb-8 xl:pb-0">
          <span className="noResult">- -</span> months
        </p>
      ) : (
        ""
      )}
      {data.day != "" ? (
        <p className="resultItems text-[40px] first:pt-8">
          <span className="result">{data.day}</span> days
        </p>
      ) : data.day === "" ? (
        <p className="resultItems text-[45px]">
          <span className="noResult">- -</span> days
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Result;
