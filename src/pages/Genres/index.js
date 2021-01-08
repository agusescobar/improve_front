import React, { useContext, useEffect, useState } from 'react'



import AuthContext from '../../contexts/AuthContext'
import Layout from '../../components/Layout'
import Genre from '../../components/Genre'
import Spinner from '../../components/Spinner'

import RequestService from '../../services/RequestServices'

const GenresPage = () => {
  const [genres, setGenres] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { logout } = useContext(AuthContext)

  useEffect(() => {
    RequestService({ parameter: 'genre', method: 'GET'})
      .then(response => response.json())
      .then(results =>{
        setIsLoading(false)
        setGenres(results)
      })
      .catch(error =>{
        setIsLoading(false)
        console.log(error)
      })
  }, [isLoading])

  while(isLoading){
    return <Spinner showSpinner={true} />
  }


  return (
    <Layout>
      <h1 className="font-bold text-center text-3xl capitalize text-gray-50 my-10">Genres</h1>
      <div className="flex flex-row flex-wrap mx-auto w-8/12 justify-between">
        {genres.map(genre =>{
          return <Genre title={genre.name} key={genre.code} genre={genre.code}  />
        })}
      </div>
    </Layout>
  )
}

export default GenresPage
