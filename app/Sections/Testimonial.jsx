'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../Components/variant'
import Image from 'next/image'
import img1 from '../../public/images/1.png'
import Swiper from '../Components/Swiper'

const Testimonial = () => {
  return (
    <section className='flex flex-col justify-center h-auto min-h-screen  items-center sm:px-10 my-5' id='testimonials'>
      <div className='flex flex-col lg:flex-row items-center justify-between max-w-4xl lg:max-w-5xl w-full text-start md:text-left p-5'>
        
        {/* Left Section */}
        <div className='w-full'>
          <motion.span 
            variants={fadeIn('down', 0.9)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.7 }}
            className='bg-purple-800 p-3 rounded-lg text-center font-decaydence sm:text-lg animate-pulse'
          >  
            04
          </motion.span>
          <h3 className='text-2xl font-birth font-normal mt-4'>Testimonials</h3>
          <hr className='w-12 border-purple-800 my-2' />
          
          <motion.h2
            variants={fadeIn('left', 0.9)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.7 }} 
            className='text-xl sm:text-3xl leading-5 font-decaydence py-1'
          >
            What Our Clients Say About Us
          </motion.h2>
        </div>
        {/* Testimonial Card */}
        <div className='w-full lg:w-1/2 '>
        <Swiper />
        </div>
       
      </div>
    </section>
  )
}

export default Testimonial
