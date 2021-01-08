import React from 'react'

import Layout from '../Layout'

const Spinner = ({ showSpinner }) => {
  return (
    <Layout>
      {showSpinner
        ? <div className="flex items-center justify-center min-h-screen p-2 min-w-screen">
          <div className="flex space-x-2 animate-pulse">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        : null}
    </Layout>
  )
}

export default Spinner
