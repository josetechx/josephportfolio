'use client'
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const stats = [
  { value: 200, label: "Projects Completed" },
  { value: 150, label: "Happy Clients" },
  { value: 95, label: "Success Rate (%)" },
]

const Counter = ({ from = 0, to }) => {
  const [count, setCount] = useState(from)

  useEffect(() => {
    let start = from
    const duration = 2000 // 2 seconds
    const increment = (to - from) / (duration / 50)

    const timer = setInterval(() => {
      start += increment
      setCount(Math.round(start))

      if (start >= to) {
        setCount(to)
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [from, to])

  return (
    <span className="text-4xl font-bold font-montserrat">
      {count}{to === 95 && "%"}
    </span>
  )
}

const HeroStats = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      className="md:absolute bg-white w-[90%] sm:w-[70%] md:w-[80%] text-purple-900 p-6 rounded-lg shadow-lg 
      transform -translate-x-1/2  md:-bottom-12  -translate-y-1/2"
    >
      <h3 className="font-birth text-xl md:text-2xl font-bold text-center mb-4">
        My Achievements
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <Counter to={stat.value} />
            <p className="text-sm text-gray-600 font-montserrat">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default HeroStats
