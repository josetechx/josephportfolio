'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../Components/variant'
import Image from 'next/image'
import { projects } from '../Components/constants'


const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [scrollCounts, setScrollCounts] = useState({})

  useEffect(() => {
    const intervals = {}

    if (hoveredProject) {
      intervals[hoveredProject] = setInterval(() => {
        setScrollCounts((prev) => ({
          ...prev,
          [hoveredProject]: (prev[hoveredProject] || 0) >= 500 ? 0 : (prev[hoveredProject] || 0) + 1
        }))
      }, 50)
    } else {
      setScrollCounts({})
    }

    return () => Object.values(intervals).forEach(clearInterval)
  }, [hoveredProject])

  return (
    <section className='bg-gray-800 flex flex-col items-center h-auto min-h-screen w-full px-6 sm:px-10 relative my-5' id='portfolio'>
      <div className='rounded-md p-5 sm:p-8 w-full max-w-5xl text-white md:static'>
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

      {/* Portfolio Items */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-4xl mt-12">
        {projects.map((project) => (
          <motion.li
          variants={fadeIn('down', 0.9)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.7 }}
            key={project.id}
            className="relative group bg-gray-700 h-[500px] w-full rounded-lg overflow-hidden shadow-md"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Image with Independent Scrolling Effect */}
            <Image
              className="w-full h-auto absolute top-0 transition-transform duration-300 cursor-pointer"
              src={project.image}
              alt={project.title}
              style={{ transform: `translateY(-${scrollCounts[project.id] || 0}px)` }}
            />
            
            {/* Overlay (Appears on Hover) */}
            <div className={`absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-600 to-transparent transition-opacity duration-300 flex flex-col justify-end p-6 
              ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}
            `}>
              <h3 className="text-white text-lg font-montserrat font-bold">{project.title}</h3>
              <p className="text-white text-lg font-birth">Tech Stack: {project.stackIcons.map((item, index) => <Image key={index}  width={20} height={20} src={item} alt={project.stack[index]} className="h-8 w-8 mr-3 inline-block space-x-4" />
              )}
              </p>
              <div className='flex'>
                {project.Links.map((link, index)=>(
                  <a key={index} href={link.url} className='w-12  text-3xl font-birth'>{link.icon}</a>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section> 
  )
}

export default Portfolio
