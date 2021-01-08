import React from 'react'

import { useHistory } from 'react-router-dom'

const Band = ({band}) => {
  const history = useHistory()

  return ( 
    <div 
      className="flex flex-row bg-white w-8/12 h-auto shadow-2xl rounded-lg px-8 items-center justify-between my-4"
    >
      <div className="m-4">
        <h1 className="text-lg font-bold">{band.name}</h1>
        <h1>{`Origin: ${band.country} (${band.year})`}</h1>
        <h1>Members:</h1>
        <div className="flex flex-col flex-wrap px-4 ">
          {band.members.map(member => {
            return(
              <h4 
                className="text-sm font-medium"
                key={member.name}
              >- {member.name}</h4>
            )
          })}
        </div>
      </div>
      <div >
        <button
          className="shadow-md font-medium py-1.5 text-white cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 rounded text-lg text-center w-36"
          onClick={() =>{
            history.push(`/albums/${band.id}`)
          }}
        > View Albums </button>
      </div>
    </div>
  )
}
 
export default Band