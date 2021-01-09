import React from 'react'

import { useHistory } from 'react-router-dom'

const Band = ({band = {}}) => {
  const history = useHistory()

  return ( 
    <div 
      className="flex flex-row bg-white w-10/12 md:w-8/12 h-auto shadow-2xl rounded-lg px-8 items-center justify-between my-4"
    >
      <div className="my-4">
        <h1 className="text-md md:text-lg font-bold">{band.name}</h1>
        <h1 className="text-sm md:text-base">{`Origin: ${band.country} (${band.year})`}</h1>
        <h1 className="text-sm md:text-base">Members:</h1>
        <div className="flex flex-col flex-wrap px-2 md:px-4 ">
          {band.members.map(member => {
            return(
              <h4 
                className="text-xs md:text-sm font-medium"
                key={member.name}
              >- {member.name}</h4>
            )
          })}
        </div>
      </div>
      <div >
        <button
          className="shadow-md py-0.5 w-16 md:py-1.5 md:w-36  cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 rounded 
          text-white text-md md:text-lg text-center font-normal md:font-medium"
          onClick={() =>{
            history.push(`/albums/${band.id}`)
          }}
        > View Albums </button>
      </div>
    </div>
  )
}
 
export default Band