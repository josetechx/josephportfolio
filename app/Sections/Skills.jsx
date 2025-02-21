'use client'
import { motion } from 'framer-motion'
import { fadeIn } from '../Components/variant'
import Image from 'next/image'
import { skillsImage } from '../Components/constants'


const Skills = () => {
  return (
    <section className='bg-gray-800 flex flex-col items-center h-auto min-h-full w-full  py-6 px-6 sm:px-10 relative my-5'>
        <div className='rounded-md p-5 sm:p-8 w-full max-w-5xl text-white md:static'>
        <motion.span 
          variants={fadeIn('down', 0.9)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }}
          className='bg-purple-800 text-white p-3 rounded-lg text-center font-decaydence text-lg animate-pulse'
        >  
          05
        </motion.span>
        <h3 className='text-2xl font-birth font-normal mt-4'>Skills</h3>
        <hr className='my-2 w-12 border-white' />
        <motion.h2
          variants={fadeIn('left', 0.9)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }} 
          className='text-xl sm:text-3xl leading-5 font-decaydence py-1'
        >
          The Tools that make me a Pro
        </motion.h2>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-4 lg:max-w-5xl'>
            {skillsImage.map((skill, index) => (
                <motion.div
                    variants={fadeIn('down', 0.9)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: false, amount: 0.7 }}
                    className='flex flex-col lg:flex-row items-center justify-center gap-2'
                    key={index}
                >
                <div  className='hover:bg-purple-800 hover:bg-opacity-50 rounded-lg transform p-4 hover:border-purple-950 transition-transform ease-in'>
                    <Image src={skill} alt={skill} width={70} height={70} className='p-2' />
                </div>
               
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Skills