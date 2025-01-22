
import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';
type Props = {}

function Hero({}: Props) {
      const [text,count] = useTypewriter({
        words:[
            "Hi, My name's Manik ",
            "Guy-who-love-Coffee.tsx",
            "<ButLovesTCodeMore/>"
        ],
        loop: true,
        delaySpeed: 1900
    });
  return (
        <div className='h-screen flex flex-col space-y- items-center justify-center
        text-center overflow-hidden'
>
      <BackgroundCircle/>
    <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
    src='/P.png'

    />
    <div className='z-20'>
      <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
        Software Engineer
      </h2>
      <h1 className='text-4xl lg:text-5xl font-semibold px-10px'>
        <span className='mr-3'>{text}</span>
      <Cursor cursorColor='#F7AB0A'/>
      </h1>

      <div className='pt-5'>
        <Link href='#about'>
        <button className='herobutton'>About</button>
        </Link>
        <Link href='#experience'>
        <button className='herobutton'>Experience</button>
        </Link>
        <Link href='#skills'>
        <button className='herobutton'>Skills</button>
        </Link>
        <Link href='#projects'>
        <button className='herobutton'>Projects</button>
        </Link>
    </div>
      </div>
    </div>
  )
}

export default Hero