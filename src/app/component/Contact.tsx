import React from 'react'
import { PhoneIcon, MapPinIcon,EnvelopeIcon } from '@heroicons/react/16/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name:string,
    email:string,
    subject:string,
    message:string
}

type Props = {}
function Contact({ }: Props) {

    const{register,handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) =>
    window.location.href = `mailto:manik.kumar1850@gmail?subject=${formData.subject}&body=Hi, My name's ${formData.name}.${formData.message}
    ${formData.email}`;
    
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-center mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need {" "}
                    <span className='decoration-[#F7AB0A]/50 underline'>
                    Let's Talk.</span>
                </h4>

                <div>
                <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB02] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+91 9999 9999</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB02] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>manik.kumar1850@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB02] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>123 Developer Lane</p>
                    </div>
                    
                </div>

                <form 
                onSubmit={handleSubmit(onSubmit)} 
                className=' flex flex-col space-y-2 w-fit mx-auto'>
                    <div className=' flex space-x-2 '>
                        
                        <input {...register('name')} placeholder='Name' className='contactInfo' type='text'/>
                        <input {...register('email')} placeholder='Email' className='contactInfo' type='email'/>
                    </div>

                    <input {...register('subject')}placeholder='Subject' className='contactInfo' type='text'/>

                    <textarea {...register('message')} placeholder='Message' className='contactInfo'/>
                    <button type='submit' className='bg-[#F7AB02] py-5 px-10 rounded-md text-black font-bold
                    text-lg'> Submit</button>
                </form>
            </div>
    </div>
  )
}

export default Contact