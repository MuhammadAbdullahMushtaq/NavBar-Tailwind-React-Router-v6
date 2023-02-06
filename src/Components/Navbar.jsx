import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Image from '../assets/logo.png';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
   const [nav, setNav] = useState(false);
   
   const handleNav = () => {
      setNav(!nav)
   }
   return (
      <div className='fixed w-full h-20 shadow-xl z-[100]'>
         <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <img src={Image} alt='LogoImage' style={{ width: '125px', height: '100px' }} />
            <div>
               <ul className='hidden md:flex'> 
                  <Link to="/">
                     <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                  </Link>
                  <Link to="about">
                     <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                  </Link>
                  <Link to="/">
                     <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                  </Link>
                  <Link to="/">
                     <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                  </Link>
                  <Link to="contact">
                     <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                  </Link>
               </ul>
               <div onClick={handleNav} className='md:hidden'>
                  <AiOutlineMenu size={25} />
               </div>
            </div>
         </div>
         <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''   }>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                                 : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
               <div>
                  <div className='w-full flex items-center justify-between' >
                     <img style={{ width: '90px', height: '50px'}} src={Image} alt='LogoImage' />
                     <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose/>
                     </div>
                  </div>
                  <div className='border-b border-gray-300 my-4'>
                     <p className='w-[85%] md:w-[90%] my-4'>
                        Let's Build Some Design Together.
                     </p>
                  </div>
               </div>
               <div className='py-4 flex flex-col'>
                  <ul>
                  <Link to="/">
                     <li className='py-4 text-sm uppercase'>Home</li>
                  </Link>
                  <Link to="about">
                     <li className='py-4 text-sm uppercase'>About</li>
                  </Link>
                  <Link to="/">
                     <li className='py-4 text-sm uppercase'>Skills</li>
                  </Link>
                  <Link to="/">
                     <li className='py-4 text-sm uppercase'>Projects</li>
                  </Link>
                  <Link to="contact">
                     <li className='py-4 text-sm uppercase'>Contact</li>
                  </Link>
                  </ul>
                  <div className='pt-40'>
                     <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                     <div className='flex justify-between items-center my-4 w-full sm:w-[80%]'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default Navbar