// 'use client'
// import { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FaCamera, FaLaptopCode, FaChalkboardTeacher, FaHome } from 'react-icons/fa'

// export default function Hero() {
//   const slides = [
//     'I empower minds through education and mentorship.',
//     'Photography & videography that tells your story.',
//     'Digital strategies that amplify your brand.',
//     'Helping you find homes and opportunities as a trusted realtor.'
//   ]
//   const [index, setIndex] = useState(0)

//   useEffect(() => {
//     const id = setInterval(() => setIndex(i => (i + 1) % slides.length), 3500)
//     return () => clearInterval(id)
//   }, [])

//   const services = [
//     { icon: <FaChalkboardTeacher className="w-6 h-6 text-purple-700" />, title: 'Education & Mentorship', desc: 'Guiding individuals to reach their highest potential.' },
//     { icon: <FaCamera className="w-6 h-6 text-purple-700" />, title: 'Photography & Videography', desc: 'Capturing moments that tell compelling stories.' },
//     { icon: <FaLaptopCode className="w-6 h-6 text-purple-700" />, title: 'Digital Marketing', desc: 'Boosting brands with smart online strategies.' },
//     { icon: <FaHome className="w-6 h-6 text-purple-700" />, title: 'Realtor Services', desc: 'Connecting people to their dream homes seamlessly.' }
//   ]

//   const scrollToContact = () => {
//     const contact = document.getElementById('contact')
//     if (contact) contact.scrollIntoView({ behavior: 'smooth' })
//   }

//   return (
//     <section className="bg-white">
//       <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
//         {/* Text Column */}
//         <div className="flex flex-col justify-center">
//           <AnimatePresence mode="wait">
//             <motion.h1
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 0.7 }}
//               className="text-4xl md:text-5xl font-extrabold leading-tight text-purple-700"
//             >
//               {slides[index]}
//             </motion.h1>
//           </AnimatePresence>

//           <p className="mt-6 text-lg text-gray-700 leading-relaxed">
//             Crafting meaningful experiences, capturing memories, and empowering your growth through education, digital innovation, and real estate.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={scrollToContact}
//             className="mt-8 bg-purple-700 hover:bg-black text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 w-max"
//           >
//             Work with Me Now
//           </motion.button>

//           {/* Services Preview */}
//           <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {services.map((s, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ scale: 1.05 }}
//                 className="flex items-start gap-4 p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-all duration-300 cursor-pointer"
//               >
//                 <div className="flex-shrink-0">{s.icon}</div>
//                 <div>
//                   <h3 className="font-bold text-lg text-gray-900">{s.title}</h3>
//                   <p className="text-gray-700 text-sm mt-1">{s.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Image Column */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="flex justify-center md:justify-end"
//         >
//           <img
//             src="/profile.png"
//             alt="Uduakobong Titus portrait"
//             className="w-[320px] md:w-[460px] lg:w-[560px] h-auto object-cover rounded-2xl"
//           />
//         </motion.div>
//       </div>
//     </section>
//   )
// }










'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPrayingHands, FaHome, FaSeedling, FaChalkboardTeacher, FaPrint } from 'react-icons/fa'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function Hero() {
  const slides = [
    'Touching lives through faith and purpose.',
    'Building dreams through real estate and enterprise.',
    'Educating and mentoring for lasting impact.',
    'Creating opportunities through REAP — Real Estate, Education, Agriculture, and Printing & Media.'
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % slides.length), 4000)
    return () => clearInterval(id)
  }, [])

  const focuses = [
    { icon: <FaPrayingHands className="w-6 h-6 text-purple-700" />, title: 'Ministry & Philanthropy', desc: 'Serving humanity through compassion and purpose.' },
    { icon: <FaHome className="w-6 h-6 text-purple-700" />, title: 'Real Estate', desc: 'Connecting people to affordable and meaningful homes.' },
    { icon: <FaChalkboardTeacher className="w-6 h-6 text-purple-700" />, title: 'Education', desc: 'Empowering minds through innovation and mentorship.' },
    { icon: <FaSeedling className="w-6 h-6 text-purple-700" />, title: 'Agriculture', desc: 'Promoting growth and sustainability in communities.' },
    { icon: <FaPrint className="w-6 h-6 text-purple-700" />, title: 'Printing & Media', desc: 'Telling stories that inspire and transform brands.' }
  ]

  const scrollToContact = () => {
    const contact = document.getElementById('contact')
    if (contact) contact.scrollIntoView({ behavior: 'smooth' })
  }

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  const particlesOptions = {
    fpsLimit: 60,
    particles: {
      color: { value: '#a78bfa' },
      move: { enable: true, speed: 1, direction: 'none', outModes: { default: 'out' } },
      number: { density: { enable: true, area: 800 }, value: 25 },
      opacity: { value: 0.3 },
      shape: { type: 'circle' },
      size: { value: { min: 2, max: 5 } }
    }
  }

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Animation */}
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-6">
          <motion.span
            className="text-lg font-semibold text-purple-600 uppercase tracking-wide"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            I am Uduakobong Titus
          </motion.span>

          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight text-purple-700"
            >
              {slides[index]}
            </motion.h1>
          </AnimatePresence>

          <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
            A purpose-driven educator, entrepreneur, and philanthropist — blending faith, creativity, and business to empower lives through <span className="text-purple-700 font-semibold">Ministry</span> and <span className="text-purple-700 font-semibold">REAP</span>.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="mt-4 bg-purple-700 hover:bg-black text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 w-max"
          >
            Connect With Me
          </motion.button>

          {/* REAP & Ministry Highlights */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {focuses.map((f, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-all duration-300"
              >
                {f.icon}
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{f.title}</h3>
                  <p className="text-gray-700 text-sm mt-1">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/profile.png"
            alt="Uduakobong Titus portrait"
            className="w-[320px] md:w-[460px] lg:w-[560px] h-auto object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}
