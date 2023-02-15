import React from 'react'
import SkillItems from './SkillItems'
import HtmlImage from '../assets/skills/html.png'
import CSSImage from '../assets/skills/css.png'
import JSImage from '../assets/skills/javascript.png'
import ReactImage from '../assets/skills/react.png'
import ReduxImage from '../assets/skills/redux.png'
import ReactNativeImage from '../assets/skills/reactNative.png'
import TailwindImage from '../assets/skills/tailwind.png'
import BootStrapImage from '../assets/skills/bootstrap.png'
import MaterialUIImage from '../assets/skills/materialUi.png'
import StyledComponentsImage from '../assets/skills/styled-components.png'
import GithubImage from '../assets/skills/github.png'
import FireBaseImage from '../assets/skills/firebase.png'

const Skills = () => {
  return (
    <div id='skills' className='w-[98%] sm:w-[99%] lg:h-full p-2'>
      <div className='px-1 max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase tracking-widest text-xl text-[#5651e5]'>
          skills
        </p>
        <h2 className='py-4'>
          What I Can Do
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          <SkillItems Img={HtmlImage} title='HTML' alt='htmlImg' />
          <SkillItems Img={CSSImage} title='CSS' alt='cssImg' />
          <SkillItems Img={JSImage} title='JavaScript' alt='jsImg' />
          <SkillItems Img={ReactImage} title='React' alt='ReactImg' />
          <SkillItems Img={ReduxImage} title='Redux' alt='ReduxImg' />
          <SkillItems Img={ReactNativeImage} title='React Native' alt='ReactNativeImg' />
          <SkillItems Img={TailwindImage} title='Tailwind' alt='TailwindImg' />
          <SkillItems Img={BootStrapImage} title='BootStrap' alt='BootStrapImg' />
          <SkillItems Img={MaterialUIImage} title='Material UI' alt='MaterialUIImg' />
          <SkillItems Img={StyledComponentsImage} title='Styled Components' alt='StyledComponentsImg' />
          <SkillItems Img={GithubImage} title='Github' alt='GithubImg' />
          <SkillItems Img={FireBaseImage} title='FireBase' alt='FireBaseImg' />

        </div>        
      </div>
    </div>
  )
}

export default Skills