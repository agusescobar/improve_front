import React from 'react'
import alert from '../../assets/alert.svg'

const NotFound = ({ message = '' }) => {
  return ( 
    <div className="flex flex-col content-center items-center">
      <img src={alert} className="h-16 md:h-32 my-4" /> 
      <h1 className="text-center text-blue-50 font-semibold text-lg md:text-xl my-4"> {message} </h1>
      <button
        className="h-20 w-40 bg-black text-center text-md font-bold  text-white my-6"
      > Go Back </button>
    </div>
  )
}
 
export default NotFound