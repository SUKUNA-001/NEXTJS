import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
type Props = {}

function Skills({}: Props) {
  return (
    <motion.div className='h- flex relative flex-col text-center md:text-left
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0
    mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over a skillds for currency profiency
        </h3>

        <div className='grid grid-cols-4 gap-5'>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            
        </div>

    </motion.div>
  )
}

export default Skills