import React from 'react'

const Result = ({day,month,year}) => {
  return (
    <div className='flex flex-col self-left px-5 -space-y-6   text-left w-full'>
      <p className='resultItems'>{year} years</p>
      <p className='resultItems'>{month} months</p>
      <p className='resultItems'>{day} days</p>
    </div>
  )
}

export default Result
