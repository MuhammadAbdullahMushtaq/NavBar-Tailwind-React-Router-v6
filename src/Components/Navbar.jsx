import { React, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo_transparent.png';
import Resume from '../assets/MuhammadAbdullahMushtaq.pdf'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
   const [nav, setNav] = useState(false);

   const [rol, setRol] = useState(true);
   const { hash } = useLocation();              //[,key,pathname]

   useEffect(() => {
      // it can work on both the [rol] state only and as well as with [pathname, hash, key] and combined as well.
      // if not a hash link, scroll to top
      if (hash === '') {
         window.scrollTo(0, 0);
      }
 // else scroll to id
      else {
         const id = hash.replace('#','');
         const element = document.getElementById(id);
         if (element) {
            element.scrollIntoView();
         }
      }
   },[rol,hash])

   const handleRol = () => {
      setRol(!rol)
   }

   const handleNav = () => {
      setNav(!nav)
   }

   return (
      <div id='navbar' className='w-full h-20 shadow-xl px-2 z-[100]'>
         <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link to="/#main" onClick={handleRol}>
            <img className='w-[90px] h-[80px] lg:w-[150px] lg:h-[110px] md:w-[135px] md:h-[95px] sm:w-[110px] sm:h-[90px] cursor-pointer' src={Logo} alt='LogoImage' />
            </Link>
            <div>
               <ul className='hidden md:flex'> 
                  <Link to="/#main" onClick={handleRol} >
                     <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                  </Link>
                  <Link to="/#about" onClick={handleRol} >
                     <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                  </Link>
                  <Link to="/#skills" onClick={handleRol}>
                     <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                  </Link>
                  <Link to="/#projects" onClick={handleRol}>
                     <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                  </Link>
                  <Link to="/#contact" onClick={handleRol}>
                     <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                  </Link>
               </ul>
               <div onClick={handleNav} className='md:hidden'>
                  <AiOutlineMenu size={25} />
               </div>
            </div>
         </div>
         <div className={nav ? 'md:hidden z-50 fixed overflow-auto left-0 top-0 w-full h-screen bg-black/70' : ''   }>
            <div className={nav  ? 'fixed overflow-auto left-0 top-0 w-[85%] sm:w-[60%] h-screen bg-[#ecf0f3] p-10 ease-out duration-500' 
                                 : 'fixed z-50 left-[-200%] top-0 ease-in duration-1000'}>
               <div>
                  <div className='w-full flex items-center justify-between' >
                     <Link className='duration-1000' onClick={handleNav} to="/#main">
                     <img onClick={handleRol} className='w-[70px] h-[60px] sm:w-[90px] sm:h-[80px]' src={Logo} alt='LogoImage' />
                     </Link>
                     <div onClick={handleNav} className='sm:p-3 rounded-full shadow-lg shadow-gray-400 p-2.5 cursor-pointer'>
                        <AiOutlineClose/>
                     </div>
                  </div>
                  <div className='border-b border-gray-300 my-4'>
                     <p className='w-[100%] md:w-[90%] text-[12px] sm:text-[14px] my-4 uppercase'>
                     Let's design together and build something amazing!
                     </p>
                  </div>
               </div>
               <div className='py-4 flex flex-col'>
                  <ul>
                  <Link className='duration-1000' onClick={handleNav} to="/#main">
                     <li onClick={handleRol} className='py-4 text-sm uppercase'>Home</li>
                  </Link>
                  <Link className='duration-1000' onClick={handleNav} to="/#about">
                     <li onClick={handleRol} className='py-4 text-sm uppercase'>About</li>
                  </Link>
                  <Link className='duration-1000' onClick={handleNav} to="/#skills">
                     <li onClick={handleRol} className='py-4 text-sm uppercase'>Skills</li>
                  </Link>
                  <Link className='duration-1000' onClick={handleNav} to="/#projects">
                     <li onClick={handleRol} className='py-4 text-sm uppercase'>Projects</li>
                  </Link>
                  <Link className='duration-1000' onClick={handleNav} to="/#contact">
                     <li onClick={handleRol} className='py-4 text-sm uppercase'>Contact</li>
                  </Link>
                  </ul>
                  <div className='pt-40'>
                     <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                     <div className='flex justify-between items-center my-4 w-full sm:w-[80%]'>
                        <a href='https://linkedin.com/in/muhammad-abdullah-mushtaq' target="_blank" without rel="noopener noreferrer" className='sm:p-3 rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn />
                        </a>
                        <a href='https://github.com/MuhammadAbdullahMushtaq/' target="_blank" without rel="noopener noreferrer" className='sm:p-3 rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub />
                        </a>
                        <a href='mailto:abdullahmushtaq08@gmail.com' target="_blank" without rel="noopener noreferrer" className='sm:p-3 rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail />
                        </a>
                        <a href={Resume} without rel="noopener noreferrer" target="_blank" className='sm:p-3 rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
   )
}

export default Navbar