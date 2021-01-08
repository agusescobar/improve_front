import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import AuthContext from '../../contexts/AuthContext'

const localStorageTokenKey = 'ImproveIn-token'

const Authenticator = ({ children }) => {
  const history = useHistory()
  const location = useLocation()
  const [canShow, setCanShow] = useState(false)
  const token = '9fddda9f-7a70-4be4-9dcd-c2d0796eff46'

  const authContext = {
    login ({ username, password }) {
      if (username === 'admin' && password === 'admin') {
        window.localStorage.setItem(localStorageTokenKey, token)
        return Promise.resolve()
      }
      return Promise.reject('The username or password is incorrect ')
    },
    logout () {
      window.localStorage.removeItem(localStorageTokenKey)
      history.push('/login')
    },
    validateToken () {
      const tokenSaved = window.localStorage.getItem(localStorageTokenKey)
      if (!tokenSaved) {
        return Promise.reject('User has not a token')
      }
      if (tokenSaved === token) {
        return Promise.resolve()
      }
    }
  }

  function validateToken (pathname = '') {
    if (!pathname.includes('login')) {
      authContext
        .validateToken()
        .then(() => setCanShow(true))
        .catch(() => {
          window.localStorage.removeItem(localStorageTokenKey)
          history.push('/login')
        })
    }
    setCanShow(true)
  }

  useEffect(() => {
    validateToken(location.pathname)
  }, [])

  return (
    <AuthContext.Provider value={authContext}>
      {canShow && children}
    </AuthContext.Provider>
  )
}

export default Authenticator
