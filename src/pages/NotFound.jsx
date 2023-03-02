import React from 'react'
import Navbar from '../Components/Navbar'

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center">
        <h2 className="my-4 text-[#5651e5]">ERROR 404</h2>
        <h3>PAGE NOT FOUND</h3>
      </div>
    </>
  )
}

export default NotFound