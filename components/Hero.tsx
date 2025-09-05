import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-36' >
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='grey'/>
        <Spotlight className='-top-10 -left-full h-[80hv]' fill='blue'/>        
        <Spotlight className='-top-50 -left-80 h-[80vh]' fill='white'/>
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-grey/[0.6] bg-grid-black/[0.3] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      
    </div>

    <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-centre text-blue-100 max-w-80'>
                Hello WORLD
            </h2>
            <h2>

<TextGenerateEffect
    className='text-centre text-[32px] md:text-4xl lg:text-5xl' 
    words='From the keyboard to the gym floor to the open road ...'
/>
            </h2>
            <p>
              
                Hi, I&apos;m Piyush, a full stack Developer based on India.
            </p>
            <a href="#about" className="mt-4">
                <MagicButton
                title='Show my work'
                icon={<FaLocationArrow/>}
                position='right'
                />
            </a>

        </div>

    </div>

    </div>
    
  )
}

export default Hero
