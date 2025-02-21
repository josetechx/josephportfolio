'use client'
import Image from "next/image"
import downloadBtn from "../../public/images/SVG/cv-btn.svg"
import { motion } from "framer-motion"
import { fadeIn, slowRiseAndEnlarge, flipIn } from '../Components/variant'
import HeroStats from "../Components/HeroStats"

const Hero = () => {
  return (
    <section className="bg-hero flex flex-col md:flex-row justify-center items-center h-screen px-6 md:px-16 relative m-0">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center text-center md:text-left md:w-[80%] mt-6 md:mt-0 relative">
        <motion.h1 
          className="text-3xl md:text-4xl font-birth font-bold"
          variants={fadeIn('down', 0.9)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          Explore My Portfolio
        </motion.h1>

        <motion.h2 
          className="text-4xl md:text-5xl font-decaydence font-bold text-center w-full"
          variants={fadeIn('left', 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          <span className="border-b-2 border-spacing-2">BUILDING</span> RESPONSIVE AND SLEEK INTERFACES 
        </motion.h2>

        <div className="my-4">
          <a 
            href="/images/Onaneye-Adedire.pdf" 
            download="Onaneye-Adedire-CV.pdf"
            className="bg-white rounded-md text-xl font-decaydence flex items-center p-4 text-purple-800 hover:bg-purple-800 ease-in-out hover:text-white border border-slate-200"
          > 
            Download CV
            <span>
              <Image 
                className="bg-purple-800 rounded-lg ml-2" 
                src={downloadBtn} 
                width={30} 
                height={30} 
                alt="Download button icon"
              />
            </span>
          </a>
        </div>
      </div>

      {/* Personal Information Box */}
     <HeroStats />
    </section>
  )
}

export default Hero;
