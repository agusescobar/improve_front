import React from 'react'

import { useHistory } from 'react-router-dom'

const Genre = ({title, genre}) => {
  const history = useHistory()

  return ( 
    <div 
      className="w-32 h-32 rounded-md shadow-2xl flex items-center justify-center bg-gradient-to-r from-indigo-300 to-purple-400 m-10 cursor-pointer"
      onClick={() =>{
        history.push(`band/${genre}`)
      }}
    >
      <h1 className="text-black capitalize text-sm font-semibold"> {title} </h1>
    </div>
  )
}
 
export default Genre