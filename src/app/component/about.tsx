import React from 'react'
import { motion } from "framer-motion"
type Props = {}

function about({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0
    }}
    transition={{duration: 1.2}}
    whileInView={{ opacity: 1}}
    
    className='flex flex-col relative h-screen text-center md:text-left
     md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>
        About
    </h3>
    <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{duration: 1}}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src='/M.png' ////////PROFILE PLEASE!!!
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-m md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]' 
            />

            <motion.div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-3xl font-semibold '>
                    Here is a <span className='underline decoration-amber-300'>little</span>{" "}
                    Background;
                </h4>
                <p className="text-base">

                I'M Manik 😶‍🌫️.Enthusiastic second-year student specializing in full-stack web development with
                hands-on experience in the MERN stack. Skilled in creating responsive, user-friendly web
                applications and eager to contribute to innovative projects in a dynamic team environment. Seeking
                a paid internship in 2025 to enhance skills and contribute to impactful solutions 🍻.

                </p>
            </motion.div>
        </motion.div>
    
  )
}

export default about