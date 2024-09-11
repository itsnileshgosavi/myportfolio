import React from 'react'

const StackList = ({stack}) => {
  return (
    <div className='flex'>
      {stack.map((item, index) => (
        <div
          key={index}
          className="w-fit h-6 bg-blue-500 px-3 py-5 rounded-full mr-2 flex justify-center items-center"
        >
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

export default StackList