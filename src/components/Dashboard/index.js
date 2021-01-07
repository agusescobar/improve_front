import React, { useContext } from 'react'

import AuthContext from '../../contexts/AuthContext'
import Layout from '../Layout'

const Dashboard = () => {
  const { logout } = useContext(AuthContext)
  return (
    <Layout>
      <h1>Dashboard</h1>
      <button onClick={() => logout()} > Logout </button>
    </Layout>
  )
}

export default Dashboard
