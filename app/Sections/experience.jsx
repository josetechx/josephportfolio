import { FaGraduationCap, FaCertificate } from "react-icons/fa"

const experience = () => {
  return (
    <section className='flex flex-col items-center h-auto min-h-screen w-full  py-6 px-6 sm:px-10 relative my-5'>
      <div className='text-white flex flex-col lg:flex-row items-center space-x-12 justify-between'>
        {/* Education */}
          <div className='w-full p-2 '>
              <h3 className='text-white font-bold font-decaydence text-3xl flex items-center gap-2'> <FaGraduationCap size={36} /> My Education</h3>
          </div>
          {/* Experience */}
          <div className='w-full p-2 '>
              <h3 className='text-white font-bold font-decaydence text-3xl flex items-center gap-2'> <FaCertificate size={36} /> My Education</h3>
          </div>
      </div>
    </section>
  )
}

export default experience