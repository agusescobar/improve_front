import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <div className="bg-gray-700 w-full">
        <div className="max-w-screen-md min-h-screen h-full mx-auto pb-6 bg-gray-700" >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
