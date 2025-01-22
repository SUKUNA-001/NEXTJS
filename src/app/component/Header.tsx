import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from 'framer-motion'
import  Link  from "next/link";

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
     xl:items-center '>
        <motion.div 
        initial={{
          x:-500,
          opacity: 0,
          scale:0.5
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1
        }}
        transition={{
          duration:1.3
        }}
        className='flex flex-row item-center'>
           
        <SocialIcon 
        url="https://www.instagram.com/_manik.in"
        fgColor='gray'
        bgColor='transparent'
        />

      <SocialIcon 
        url="https://www.github.com/SUKUNA-001"
        fgColor='gray'
        bgColor='transparent'
        />

      <SocialIcon 
        url="https://www.twitter.com/@MANIK_00"
        fgColor='gray'
        bgColor='transparent'
        />

      <SocialIcon 
        url="https://www.linkedin.com/in/manik-manik-496703270/ "
        fgColor='gray'
        bgColor='transparent'
        />
        </motion.div>

        <Link href='#contact'>

        <motion.div
         initial={{
          x:500,
          opacity: 1,
          scale:0.5
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1
        }}
        transition={{
          duration:1.3
        }}
         className='flex flex-row item-center text-gray-300 cursor-pointer'>
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />
            <p className='pt-4 uppercase hidden md:inline-flex text-sm text-gray-400 '>
                Get In Touch
            </p>
        </motion.div>
        </Link>
    </header>
    
  )
}

export default Header