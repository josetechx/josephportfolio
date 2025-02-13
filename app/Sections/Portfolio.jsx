'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../Components/variant'


const Portfolio = () => {
  return (
    <section className='bg-gray-800 flex flex-col  justify-between  items-center h-auto min-h-screen w-full px-6 sm:px-10 relative my-5'>
        <div className='rounded-md p-5 sm:p-8 w-full max-w-4xl text-white md:static'>
        <motion.span 
          variants={fadeIn('down', 0.9)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }}
          className='bg-purple-800 text-white p-3 rounded-lg text-center font-decaydence text-lg animate-pulse'
        >  
          03
        </motion.span>
        <h3 className='text-2xl font-birth font-normal mt-4'>Portfolio</h3>
        <hr className='my-2 w-12 border-white' />
        <motion.h2
          variants={fadeIn('left', 0.9)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }} 
          className='text-xl sm:text-3xl leading-5 font-decaydence py-1'
        >
          Browse My Recent Works
        </motion.h2>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center w-full max-w-4xl gap-6 mt-12'>

        </div>
    </section>
  )
}

export default Portfolio