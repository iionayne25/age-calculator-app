import React, { useEffect, useState } from 'react'

const Result = ({data}) => {
  return (
    <div className='flex flex-col self-left px-3 -space-y-2 text-left w-full'>
      <p className="resultItems">{data.year != "" ?<span className='resultNumber'>{data.year}</span>  : <span className="resultNumber">{data.year === 0 ?("0"):"- -"} </span>} years</p>
      <p className="resultItems">{data.month != "" ?  <span className='resultNumber'>{data.month}</span>: <span className="resultNumber">- -</span>} months</p>
      <p className="resultItems">{data.day != "" ? <span className='resultNumber'>{data.day}</span> : <span className="resultNumber">- -</span>} days</p>
      
    </div>
  )
}

export default Result
