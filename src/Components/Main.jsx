import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main' className='w-full pt-10 my-3 text-center'>
      <div className='w-full max-w-[1240px] mx-auto p-2 flex justify-center items-center'>
          <div>
            <p className='uppercase tracking-widest text-sm text-gray-600'>
            Let's Build Some Designs Together.
            </p>
            <h1 className='py-4 text-gray-700'>
              Hi, I'm <span className='text-[#5651e5]'>Muhammad Abdullah Mushtaq</span>
            </h1>
            <h1 className='py-2 text-gray-700'>
              A Front-End Web Developer
            </h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
              I'm a front-end web developer specializing in building (and
              occasionally designing) exceptional digital experiences. Currently,
              I'm focused on building responsive front-end web applications
              while learning back-end technologies
            </p>
            <div className='flex justify-between items-center max-w-[330px] m-auto py-4'>
              <a href='https://linkedin.com/in/muhammad-abdullah-mushtaq' target="_blank" without rel="noopener noreferrer" className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
              </a>
              <a href='https://github.com/MuhammadAbdullahMushtaq/' target="_blank" without rel="noopener noreferrer" className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
              </a>
              <a href='mailto:abdullahmushtaq08@gmail.com' target="_blank" without rel="noopener noreferrer" className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
              </a>
              <a href='javascript:void(0)' className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
              </a>
            </div>
      </div>
    </div>
    </div>
  )
}

export default Main