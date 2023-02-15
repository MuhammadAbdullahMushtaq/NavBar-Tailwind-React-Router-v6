import React from 'react'
import ProjectItems from './ProjectItems'
import ProjectImg from '../assets/projects/property.jpg'
import CryptoImg from '../assets/projects/crypto.jpg'
import NetflixImg from '../assets/projects/netflix.jpg'
import TwitchImg from '../assets/projects/twitch.jpg'

const Projects = () => {
  return (
   <div id="projects" className='w-full px-1'>
      <div className='max-w-[1240px] mx-auto py-16 px-2'>
         <p className='uppercase tracking-widest text-xl text-[#5651e5]'>Projects</p>
         <h2 className='py-4'>What I've Built</h2>
         <div className='grid md:grid-cols-2 gap-8'>

            <ProjectItems id="property" title='Property Finder' backgroundImg={ProjectImg} projectUrl='/property' />
            <ProjectItems id="crypto" title='Crypto App' backgroundImg={CryptoImg} projectUrl='/crypto' />
            <ProjectItems id="netflix" title='Netflix Clone' backgroundImg={NetflixImg} projectUrl='/netflix' />
            <ProjectItems id="twitch" title='Twitch' backgroundImg={TwitchImg} projectUrl='/twitch' />

         </div>
      </div>
   </div>
  )
}

export default Projects