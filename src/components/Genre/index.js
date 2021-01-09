import React from 'react'

import { useHistory } from 'react-router-dom'

const Genre = ({title = '', genre = ''}) => {
  const history = useHistory()

  return ( 
    <div 
      className="h-16 w-16 md:w-32 md:h-32 rounded-md shadow-2xl flex items-center justify-center bg-gradient-to-r from-indigo-300 to-purple-400 m-5 md:m-10 cursor-pointer"
      onClick={() =>{
        history.push(`band/${genre}`)
      }}
    >
      <h1 className="text-black capitalize text-xxs md:text-sm text-center font-semibold"> {title} </h1>
    </div>
  )
}
 
export default Genre