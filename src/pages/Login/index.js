import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import AuthContext from '../../contexts/AuthContext'
import Layout from '../../components/Layout'
import Spinner from '../../components/Spinner'

const LoginPage = () => {
  const history = useHistory()

  const { login } = useContext(AuthContext)

  const usernameRef = React.createRef()
  const passwordRef = React.createRef()

  const [showSpinner, setShowSpinner] = useState(false)

  useEffect(() => {
    window.localStorage.removeItem('ImproveIn-token')
  }, [])
  const handleLogin = (e) => {
    e.preventDefault()
    const username = usernameRef.current.value
    const password = passwordRef.current.value
    setShowSpinner(true)
    login({ username, password })
      .then(() => {
        setShowSpinner(false)
        history.replace('/genres')
      })
      .catch((e) => {
        setShowSpinner(false)
        console.error(e)
      })
  }

  const getComponent = () => {
    if (showSpinner) {
      return <Spinner showSpinner />
    }
    return (
      <>
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-8/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md mx-auto">
          <h3 className="text-black text-center text-xl font-semibold my-8"> Sign In </h3>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col my-6 ">
              <label className="text-xs font-semibold text-gray-600 uppercase">Username</label>
              <input
                type="text"
                placeholder="Username"
                className=" w-full py-3 px-1 mt-2 text-gray-800 border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
                ref={usernameRef}
              />
            </div>
            <div className="flex flex-col my-6 ">
              <label className="mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full py-3 px-1 mt-2 mb-4 text-gray-800 border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
                ref={passwordRef}
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none"
            />
          </form>
        </div>
      </>
    )
  }

  return (
    <Layout>
      {getComponent()}
    </Layout>
  )
}

export default LoginPage
