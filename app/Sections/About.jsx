'use client'
import Image from 'next/image'
import demoBg from '../../public/images/about-img.png'
import { motion } from 'framer-motion'
import { fadeIn, slowRiseAndEnlarge } from '../Components/variant'

const About = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center min-h-screen px-6 md:px-16 max-w-4xl lg:max-w-5xl w-full mx-auto gap-12 my-12">
      
      {/* Image Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
        variants={slowRiseAndEnlarge(0)}
        className="w-full flex justify-center"
      >
        <Image
          className="max-w-[400px] md:max-w-[700px] h-auto mx-auto"
          src={demoBg}
          alt="Demo Background"
          width={500}
          height={500}
        />
      </motion.div>
      
      {/* Text Section */}
      <div className='flex flex-col justify-start items-start text-start md:text-left w-full'>
        <motion.span 
          variants={fadeIn('down', 0.9)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }}
          className='bg-purple-800 p-3 rounded-lg text-center font-decaydence sm:text-lg animate-pulse'
        >  
          01
        </motion.span>
        <h3 className='text-2xl font-birth font-normal mt-4'>About Me</h3>
        <hr className='w-12 border-purple-800 my-2' />
        
        <motion.h2
          variants={fadeIn('left', 0.9)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }} 
          className='text-xl sm:text-3xl leading-5 font-decaydence py-1'
        >
          Onaneye's Details
        </motion.h2>

        <motion.p 
          variants={fadeIn('up', 0.9)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }}
          className='text-md font-normal py-3 leading-relaxed'
        >
          I’m Joseph, a frontend developer with six years of experience specializing in React, Next.js, and JavaScript. I build modern, responsive, and user-friendly web applications, focusing on UI/UX, performance, and scalability. From eCommerce to healthcare solutions, I create seamless digital experiences. Passionate about clean code and collaboration, I turn ideas into reality. Let’s build something amazing! 🚀
        </motion.p>
      </div>
      
    </section>
  )
}

export default About
