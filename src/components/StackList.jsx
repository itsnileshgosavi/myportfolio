import React from 'react'

const StackList = ({stack}) => {
  return (
    <div className='flex'>
      {stack.map((item, index) => (
        <div
          key={index}
          className="w-fit text-white shadow-2xl border hover:scale-105 transition-all duration-300 cursor-default h-4 bg-blue-500 text-sm px-2 py-4 rounded-full mx-1 flex justify-center items-center"
        >
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

export default StackList