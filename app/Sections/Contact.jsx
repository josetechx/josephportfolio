'use client'
import { motion } from 'framer-motion'
import { fadeIn } from '../Components/variant'
import { useState } from 'react'
import { contactDetails } from '../Components/constants'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className='flex flex-col items-center h-auto min-h-screen w-full px-6 sm:px-10 relative my-5' id='contact'>
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
        <h3 className='text-2xl font-birth font-normal mt-4'>Contact Me</h3>
        <hr className='my-2 w-12 border-white' />
        <motion.h2
          variants={fadeIn('left', 0.9)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }} 
          className='text-xl sm:text-3xl leading-5 font-decaydence py-1'
        >
          Love My Work? Let's Connect!
        </motion.h2>
        <div className='flex flex-col lg:flex-row lg:space-x-12 items-center gap-4 mt-6'>
        <form onSubmit={handleSubmit} className='mt-6 flex flex-col gap-4 w-full lg:w-1/2'>
          <input 
            type='text' 
            name='name' 
            placeholder='Your Name' 
            value={formData.name} 
            onChange={handleChange} 
            className='p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500' 
            required
          />
          <input 
            type='email' 
            name='email' 
            placeholder='Your Email' 
            value={formData.email} 
            onChange={handleChange} 
            className='p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500' 
            required
          />
          <textarea 
            name='message' 
            placeholder='Your Message' 
            rows='4' 
            value={formData.message} 
            onChange={handleChange} 
            className='p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500' 
            required
          ></textarea>
          <button 
            type='submit' 
            className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition duration-300'
          >
            Send Message
          </button>
        </form>
        <ul className=' w-full lg:w-1/2 p-3 flex flex-col gap-8 '>
          {contactDetails.map((contact, index) => (
            <li key={index} className='flex items-center gap-2 font-montserrat'>
            <span>
              <div className='w-10 h-10 rounded-md bg-purple-800 flex justify-center items-center'>
                {contact.icon}
              </div>
            </span>
            <span className='text-sm leading-4 md:leading-2'><span className='text-sm text-gray-300  font-montserrat'>{contact.label}</span> <br /> 
              <p className='text-sm  font-montserrat'>
                {contact.title}
              </p>
            </span>
          </li> 
          ))}
          
          
        </ul>
      </div>
      </div>
    </section>
  )
}

export default Contact
