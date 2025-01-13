import React from 'react'

const Button = (props) => {
  return (
    <button
        onClick={props.function}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
     {props.text} 
    </button>
  )
}

export default Button
