import React from 'react'
import { Link } from 'react-router-dom'

const ProjectItems = ({title, backgroundImg, projectUrl, id}) => {
  return (

      <div id={id} className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
               <img className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt="" />
               <div className='hidden group-hover:flex flex-col justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                  <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                  <p className='pb-4 pt-2 text-white text-center'>React Js</p>
                  <Link to={projectUrl}>
                     <p className='w-[150px] text-center py-1 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer sm:w-[150px] md:w-[200px]'>More Info</p>
                  </Link>
               </div>
            </div>


   )
}

export default ProjectItems