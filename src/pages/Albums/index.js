import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import Album from '../../components/Album'
import Layout from '../../components/Layout'
import NotFound from '../../components/NotFound'

import Spinner from '../../components/Spinner'

import RequestService from '../../services/RequestServices'

const AlbumsPage = () => {
  const { id } = useParams()
  const [albums, setAlbums] = useState([])
  const [bandName, setBandName] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const getAlbums = () => {
    RequestService({ parameter: `albums?bandId=${id}`, method: 'GET'})
      .then(response => response.json())
      .then(results =>{
        setIsLoading(false)
        setAlbums(results)
        console.log('setAlbums', results)
      })
      .catch(error =>{
        setIsLoading(false)
        console.log(error)
      })
  }

  const getBandName = () => {
    RequestService({ parameter: `bands?id=${id}`, method: 'GET'})
      .then(response => response.json())
      .then(results =>{
        setIsLoading(false)
        setBandName(results[0].name)
      })
      .catch(error =>{
        setIsLoading(false)
        console.log(error)
      })
  }


  useEffect(() => {
    getAlbums()
    getBandName()
  }, [isLoading])

  while(isLoading){
    return <Spinner showSpinner={true} />
  }

  return ( 
    <Layout>
      <h1 className="font-bold text-center text-3xl capitalize text-gray-50 my-10">Albums of {bandName} </h1>
      <div className="flex flex-col items-center">
        {albums.length > 0 
          ? 
          albums.map(album =>{
            return <Album album={album} key={album.name} />
          })
          : <NotFound message='Oops! This band has no albums in our database. Sorry :(' />
        }
      </div>
    </Layout>
  )
}
 
export default AlbumsPage