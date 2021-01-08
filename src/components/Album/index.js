import React from 'react'

import play from '../../assets/play.svg'

const Album = ({album}) => {
  return ( 
    <div className="flex items-center px-5 py-6 w-8/12 shadow-sm rounded-md bg-white my-4">
      <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
        <img src={play} className="h-8" /> 
      </div>
      <div className="mx-5">
        <h4 className="text-2xl font-semibold text-gray-700"> {album.name} </h4>
        <div className="text-gray-500">Release year: {album.year} </div>
      </div>
    </div>
  )
}
 
export default Album