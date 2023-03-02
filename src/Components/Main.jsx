import React from 'react'
import Resume from '../assets/MuhammadAbdullahMushtaq.pdf'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main' className='w-full pt-10 my-3 text-center'>
      <div className='w-full max-w-[1240px] mx-auto p-2 flex justify-center items-center'>
          <div>
            <p className='uppercase tracking-widest text-sm text-gray-600'>
            Let's design together and build something amazing!
            </p>
            <h1 className='py-4 text-gray-700'>
              Hi, I'm <span className='text-[#5651e5]'>Muhammad Abdullah Mushtaq</span>
            </h1>
            <h1 className='py-2 text-gray-700'>
              A Front-End Web Developer
            </h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            As a front-end web developer, my focus is on crafting exceptional digital experiences that delight users. My skills include building responsive and intuitive front-end web applications while occasionally dabbling in design. While my primary focus is on the front-end, I'm also dedicated to broadening my skills by learning back-end technologies.
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
              <a href={Resume} without rel="noopener noreferrer" target="_blank" className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
              </a>
            </div>
      </div>
    </div>
    </div>
  )
}

export default Main