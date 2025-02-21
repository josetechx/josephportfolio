'use client'
import { motion } from 'framer-motion'
import { fadeIn } from '../Components/variant'
import { services } from '../Components/constants'

const Services = () => {
  const firstBoxAnimation = services.slice(0, 3)
  const secondBoxAnimation = services.slice(3, 5)
  return (
    <section className="flex flex-col md:flex-row justify-center md:justify-end items-center h-auto min-h-screen w-full px-6 sm:px-10 relative" id='services'>
      <div className="bg-purple-800 rounded-md p-5 sm:p-8 w-full max-w-4xl text-white shadow-lg relative md:static">
        <motion.span 
          variants={fadeIn('down', 0.9)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }}
          className='bg-white text-purple-800 p-3 rounded-lg text-center font-decaydence text-lg animate-pulse'
        >  
          02
        </motion.span>
        <h3 className='text-2xl font-birth font-normal mt-4'>Services</h3>
        <hr className='my-2 w-12 border-white' />
        <motion.h2
          variants={fadeIn('left', 0.9)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }} 
          className='text-xl sm:text-3xl leading-5 font-decaydence py-1'
        >
          What I Offer
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.9)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }}
          className='text-md font-normal py-3 font-montserrat'
        >
          I bring creativity to life with expert design solutions. My core services include:
        </motion.p>
        <ul className='flex flex-col md:flex-row flex-wrap gap-6 mt-12'>
          {firstBoxAnimation.map((service) => (
            <motion.li 
              key={service.id} 
              className='flex-1 min-w-[250px] bg-white bg-opacity-10 p-4 rounded-lg shadow-md'
              variants={fadeIn('down', 0.9)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              >
              <div className='bg-white text-purple-800  flex justify-center items-center p-4 text-xl w-12 rounded-lg text-center'>{service.icon}</div>
              <h4 className='text-lg font-bold mt-2 font-montserrat-bold'>{service.title}</h4>
              <p className='text-md font-normal font-montserrat'>{service.description}</p>
            </motion.li>
          ))}
          {secondBoxAnimation.map((service) => (
              <motion.li 
              key={service.id} 
              className='flex-1 min-w-[250px] bg-white bg-opacity-10 p-4 rounded-lg shadow-md'
              variants={fadeIn('up', 0.9)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              >
              <div className='bg-white text-purple-800  flex justify-center items-center p-4 text-xl w-12 rounded-lg text-center'>{service.icon}</div>
              <h4 className='text-lg font-bold mt-2 font-montserrat-bold'>{service.title}</h4>
              <p className='text-md font-normal font-montserrat'>{service.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Services
