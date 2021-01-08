import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import Band from '../../components/Band'
import Layout from '../../components/Layout'
import Spinner from '../../components/Spinner'

import RequestService from '../../services/RequestServices'

const BandsPage = () => {
  const { id } = useParams()
  const [bands, setBands] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [filter, setFilter] = useState('')


  const handleChange = (e) => {
    setFilter(e.target.value)
  }
  

  useEffect(() => {
    var resource
    if(filter){
      resource = filter === 'name_asc' 
        ? `bands?genreCode=${id}&_sort=name&_order=asc` : `bands?genreCode=${id}&_sort=name&_order=desc`
    } else{
      resource = `bands?genreCode=${id}`
    }
    RequestService({ parameter: resource , method: 'GET'})
      .then(response => response.json())
      .then(results =>{
        setIsLoading(false)
        setBands(results)
      })
      .catch(error =>{
        setIsLoading(false)
        console.log(error)
      })
  }, [isLoading, filter])

  while(isLoading){
    return <Spinner showSpinner={true} />
  }


  return ( 
    <Layout>
      <h1 className="font-bold text-center text-3xl capitalize text-gray-50 my-10">{id} Bands</h1>
      <div className="flex flex-row justify-end items-center">
        <h1 className="text-white uppercase mx-3">Sort by: </h1>
        <select 
          value={filter} 
          onChange={handleChange}
          className="text-sm text-white font-medium capitalize w-40 h-8 rounded-lg bg-indigo-500"
        >
          <option value="" className="hover:text-white" >Select an filter</option>
          <option value="name_asc">Name Asc</option>
          <option value="name_desc">Name desc</option>
        </select>
      </div>
      <div className="flex flex-col items-center">
        {bands.map(band =>{
          return(
            <Band band={band}  key={band.id}/>
          )
        })}
      </div>
    </Layout>
  )
}
 
export default BandsPage