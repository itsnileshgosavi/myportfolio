import React from 'react'

const StackList = ({stack}) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {stack.map((item, index) => (
        <div
          key={index}
          className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 cursor-default"
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default StackList