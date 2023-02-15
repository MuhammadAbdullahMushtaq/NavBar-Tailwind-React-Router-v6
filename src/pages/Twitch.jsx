import { React } from 'react'
import TwitchImg from '../assets/projects/twitch.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Twitch = () => {
   return (
      <>
      <Navbar />
      <div className='w-full'>
      <div className='w-full h-[30vh] lg:h-[40vh] relative'>
         <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
         <img  className='absolute h-full w-full object-cover' src={TwitchImg} alt="cryptoImg" />
         <div className='z-10 absolute top-[70%] left-[50%] right-[50%] w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] text-white pb-5 px-3'>
            <h2 className='py-2 text-2xl sm:text-[36px]'>Twitch App</h2>
            <h3 className='text-[12px] sm:text-[16px]'>React JS / Tailwind / Firebase</h3>
         </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-6 pt-8'>
         <div className='col-span-5 md:col-span-4'>
            <p className=''>Project</p>
            <h2>Overview</h2>
            <p>This app was built using React JS and is hosted on Firebase. Users are able to search properties based on an Address, City, or ZIP code to retrieve a list of active properties currently for sale. You will be able to view information as well as the location of the integrated with the Google Maps API. User authentication is available so you can Sign-up & Sign-in to your account with an email address in order to save your favorite properties. This is made possible with Zillow API.</p>
            <button className='px-6 py-1 mt-4 mr-8 sm:px-8 sm:py-2'>Demo</button>
            <button className='px-6 py-1 mt-4 sm:px-8 sm:py-2'>Code</button>
         </div>

         <div className='col-span-5 lg md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2'>
            <div className='p-1'>
               <p className='text-center font-bold pb-2'>Technologies</p>
               <div className='grid grid-cols-2 gap-[2px] sm:grid-cols-3 md:grid-cols-1 text-[16px] sm:text-[16px]'>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />React</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Redux</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Google API</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Tailwind</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Firebase</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Firebase</p>
               </div>
            </div>
         </div>
      <Link to={'/#twitch'} ><p className='cursor-pointer underline'>Back</p></Link>
      </div>

      </div>
      </>
  )
}

export default Twitch