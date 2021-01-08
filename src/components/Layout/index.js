import React from 'react'

import logo from '../../assets/logo.svg'

const Layout = ({ children }) => {
  return (
    <div>
      <div className="bg-gray-700 w-full">
        <div className="max-w-screen-md min-h-screen h-full mx-auto pb-6 bg-gray-700" >
          <div>
            <img src={logo} alt="logo" className="w-3/12 lg:w-2/12 mx-auto p-4" />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
