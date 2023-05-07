import React, { useEffect, useState } from "react";

const Result = ({ data }) => {
  return (
    <div className="flex flex-col self-left px-5 -space-y-6   text-left w-full">
      <p className="resultItems">{data.year != "" ? data.year : <span className="noResult">-</span>} years</p>
      <p className="resultItems">{data.day != "" ? data.day : <span className="noResult">-</span>} days</p>
      <p className="resultItems">{data.month != "" ? data.month : <span className="noResult">-</span>} months</p>
      {/* {data?(
      data.year?(
        <p className='resultItems'>{data.year} years</p>
      ):(
        <p className='resultItems'>- year</p>
      ),
      data.day?(
        <p className='resultItems'>{data.day} day</p>
      ):(
        <p className='resultItems'>- day</p>
      ),
      data.month?(
        <p className='resultItems'>{data.month} month </p>
      ):(
        
        <p className='resultItems'>- month </p>
      )
    ):("")} */}
    </div>
  );
};

export default Result;
// export async function getServerSideProps(context){
//   const res = await fetch('http://localhost:3000/api/form')
//   const data = await res.json();

//   if(!data){
//     return {
//       notFound:true,
//     }
//   }
//   return {
//     props:{data},
//   }
// }
