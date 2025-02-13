'use client'
import Image from "next/image"
import downloadBtn from "../../public/images/SVG/cv-btn.svg"
import { motion } from "framer-motion"
import { fadeIn, slowRiseAndEnlarge, flipIn } from '../Components/variant'

const Hero = () => {
  return (
    <section className="bg-hero flex flex-col md:flex-row justify-center items-center h-screen px-6 md:px-16 relative">
      {/* Image Section */}
      {/* Uncomment if you want the image */}
      {/* <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
        variants={slowRiseAndEnlarge(0)}
        className="w-full md:w-1/2 flex justify-center"
      >
        <Image
          className="max-w-full h-auto"
          src={demoBg}
          alt="Demo Background"
          width={300}
          height={300}
        />
      </motion.div> */}

      {/* Text Section */}
      <div className="flex flex-col justify-center items-center text-center md:text-left md:w-[80%] mt-6 md:mt-0 relative">
        <motion.h1 
          className="text-3xl md:text-4xl font-birth font-bold"
          variants={fadeIn('down', 0.9)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          Explore My Portfolio
        </motion.h1>

        <motion.h2 
          className="text-4xl md:text-5xl font-decaydence font-bold text-center w-full"
          variants={fadeIn('left', 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <span className="border-b-2 border-spacing-2">BUILDING</span> RESPONSIVE AND SLEEK INTERFACES 
        </motion.h2>
        <div className="my-4">
          <button className="bg-white rounded-md text-xl font-decaydence flex items-center p-4 text-purple-800 hover:bg-purple-800 ease-in-out hover:text-white hover:border-4 border-slate-700">Download CV <span><Image className="bg-purple-800  rounded-lg ml-2" src={downloadBtn} width={30} height={30} alt="icon-button"/></span></button>
        </div>
      </div>

      {/* Personal Information Box */}
      <motion.div 
        variants={flipIn(0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} 
        className="absolute bg-white w-[90%] sm:w-[70%] md:w-[80%] text-purple-900 p-6 rounded-lg shadow-lg 
         transform -translate-x-1/2 -bottom-16 -translate-y-1/2"
      >
        <h3 className="font-birth text-xl md:text-2xl font-bold text-center">
          Personal Information
        </h3>
        <p className="text-sm md:text-base text-center">
          I'm Joseph, a passionate frontend engineer with a keen eye for detail and a love for crafting seamless user experiences. With expertise in HTML, CSS, and JavaScript, I design and develop responsive, interactive, and accessible web applications that delight users.
        </p>
      </motion.div>
       
    </section>
  )
}

export default Hero;
