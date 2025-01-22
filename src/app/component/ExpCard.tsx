import React from 'react'
import { motion } from 'motion/react'
type Props = {}

function ExpCard({}: Props) {
  return (
    <article  className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[400px] md:w-[500px] xl:w-[900px] snap-center bg-[#292929] p-8 hover:opacity-100 
    opacity-40  cursor-pointer transition-opacity duration-150 overflow-hidden
    '
    >
        <motion.img
        initial={{
            y: -100,
            opacity: 0
        }}
        transition={{duration: 1.1}}
        whileInView={{opacity: 1, y: 0}}

        className='w-22 h-22 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px]
        object-cover object-center'
        src='/A.png'
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl fomt-light'>Need Experience</h4>
            <p className='font-bold text-2xl mt-1'> Add Experirnce </p>
            <div className='flex space-x-2 my-2'>
                <img className='h-8 w-10 rounded full' src='/A.png'/>
                {/* TECH USED*/}
                {/* TECH USED*/}
                {/* TECH USED*/}
            </div>
            <p
            className='uppercase py-5 text-gray-400'
            >Started Work... - Ended Work</p>

            <ul className='list-disc space-y-4 ml-5 text-lg '>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>

            </ul>
        </div>

    </article>
  )
}

export default ExpCard