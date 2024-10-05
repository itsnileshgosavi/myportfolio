import React from 'react'
import { cn } from '@/lib/utils'
import GradualSpacing from './magicui/gradual-spacing'
import GridPattern from './magicui/animated-grid-pattern'

const About = () => {
  return (
    <div className='flex flex-col overflow-hidden pb-10'>
      <GridPattern className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[168%] skew-y-12",
        )} />
      <div className='text-4xl dark:text-white text-black my-5'>
        <GradualSpacing text="About Me" />
      </div>
      <div className='flex justify-around min-h-[75vh] flex-col md:flex-row'>
        <div className='flex flex-col justify-center space-y-5'>
          <h2 className='text-xl font-extralight text-black dark:text-white'>Education</h2>
          <h1 className='text-5xl font-bold text-orange-700 uppercase'>My Education</h1>
        </div>
        <div className='flex flex-col justify-center space-y-7'>
          <div className='h-20 w-fit'>
              <h2 className='text-xl uppercase text-black font-bold dark:text-white'>Master of Business Administration</h2>
              <h3 className='text-lg dark:text-white'>Neville Wadia Institute of Management Studies and Research</h3>
              <div className='flex dark:text-white justify-between text-sm font-light'>
                <h4>Pune, Maharashtra, India</h4>
                <h4>2020 - 2022</h4>
              </div>
          </div>
          <div className='h-20 w-fit'>
              <h2 className='text-xl uppercase text-black font-bold dark:text-white'>Bachelor of Science</h2>
              <h3 className='text-lg dark:text-white'>Fergusson College</h3>
              <div className='flex dark:text-white space-x-5 justify-between text-sm font-light'>
                <h4>Pune, Maharashtra, India</h4>
                <h4>2017 - 2020</h4>
              </div>
          </div>
        </div>
      </div>
      <div className='flex justify-around min-h-[75vh] flex-col md:flex-row'>
        <div className='flex flex-col justify-center space-y-5 md:order-last order-first'>
          <h2 className='text-xl font-extralight  text-black dark:text-white'>Experience</h2>
          <h1 className='text-5xl font-bold text-orange-700 uppercase'>My Work Experience</h1>
        </div>
        <div className='flex flex-col justify-center space-y-7 order-first'>
          <div className='h-20 w-fit'>
              <h2 className='text-xl uppercase text-black font-bold dark:text-white'>FPL Technologies Pvt Ltd</h2>
              <h3 className='text-lg dark:text-white'>Customer Experince</h3>
              <div className='flex dark:text-white justify-between space-x-5 text-sm font-light'>
                <h4>Pune, Maharashtra, India</h4>
                <h4>April 2022 - August 2022</h4>
              </div>
          </div>
          <div className='h-20 w-fit'>
              <h2 className='text-xl uppercase text-black font-bold dark:text-white'>Relfor Labs Pvt Ltd</h2>
              <h3 className='text-lg dark:text-white'>Digital Marketing Intern</h3>
              <div className='flex dark:text-white justify-between space-x-5 text-sm font-light'>
                <h4>Pune, Maharashtra, India</h4>
                <h4>October 2022 - February 2024</h4>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About