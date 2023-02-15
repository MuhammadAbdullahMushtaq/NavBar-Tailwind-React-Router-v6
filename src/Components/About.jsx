import React from 'react'
import Image from '../assets/about.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-fit p-2 flex items-center py-4'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
         <div className='col-span-2 px-1'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
            <h2 className='py-4'>Who I Am</h2>
            <p className='py-2 text-gray-600'>
               I am not your normal developer
            </p>
            <p className='py-2 text-gray-600'>
            I have spent the last 12 years in the fire service working as a professional firefighter &
            paramedic. I have always had a knack for and working with computers. In 2019 1
            started working with HTML & CSS to make some minor edits on a small business website that I
            was operating. What I thought was just a few small edits turned into a love for programming.
            </p>
            <p className='py-2 text-gray-600'>
            Fascinated with how intricate can be I was quickly drawn to learn more. I started
            learning javascript and was even more enthused with making websites interactive. I then started
            freelancing for e—commerce companies on the Shopify platform. I am now spending my time
            building projects with React JS, Firebase, and learning new technologies.
            </p>
            <p className='py-2 text-gray-600 cursor-pointer underline'>
               Check out some of my latest projects.
            </p>
         </div>
         <div className='w-[95%] m-auto p-4 flex justify-center items-center rounded-xl shadow-xl shadow-gray-400 hover:scale-105 ease-in duration-300 sm:w-[90%] md:w-ful'>
            <img className='rounded-xl' src={Image} alt="about" />
         </div>
      </div>
    </div>
  )
}

export default About