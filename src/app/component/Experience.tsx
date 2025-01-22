
import React from 'react'
import ExpCard from "./ExpCard";
import {motion} from "framer-motion"
type Props = {}

function Experience({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.2}}
    className='h-screen flex relative overflow-hidden flex-col text-lift md:flex-row 
    max-w-full px-10 justify-evenly mx-auto items-center
    '>

        <h3 className='absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl mt-10'>
            Experiences
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory 
         scrollbar
   scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <ExpCard/>
        <ExpCard/>
        <ExpCard/>
        
        </div>
    </motion.div>
  )
}

export default Experience