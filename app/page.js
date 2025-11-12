'use client'
import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import GalleryPreview from '../components/GalleryPreview'
import ContactForm from '../components/ContactForm'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaPrayingHands, FaSeedling, FaHome, FaChalkboardTeacher, FaPrint } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-12 relative"
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-purple-700 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Uduakobong Titus
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.img
            src="/profile.png"
            alt="Uduakobong Titus portrait"
            className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />

          {/* Text Content */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              I’m <span className="text-purple-700">Uduakobong Titus</span> — a man of two divine purposes.
            </h3>

            <p className="text-lg leading-relaxed mb-4 text-gray-700">
              My life revolves around <span className="font-semibold text-purple-700">Ministry and Business</span>.
              In Ministry, I am devoted to serving humanity, touching lives, and spreading the light of Christ
              through mentorship, philanthropy, and empowerment.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              On the business front, I founded <span className="font-semibold text-purple-700">REAP</span> —
              a collective brand encompassing <strong>Real Estate, Education, Agriculture, and Printing & Media</strong>.
              These ventures represent my commitment to community growth, sustainable development, and creativity.
            </p>

            {/* Ministry & REAP Focus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-3 bg-purple-50 p-4 rounded-xl hover:bg-purple-100 transition-all"
              >
                <FaPrayingHands className="text-purple-700 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Ministry & Philanthropy</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Empowering lives through faith, compassion, and service.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-3 bg-purple-50 p-4 rounded-xl hover:bg-purple-100 transition-all"
              >
                <FaHome className="text-purple-700 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Real Estate</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Building dreams and connecting people with affordable homes.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-3 bg-purple-50 p-4 rounded-xl hover:bg-purple-100 transition-all"
              >
                <FaChalkboardTeacher className="text-purple-700 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Education</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Shaping minds through innovation and purposeful learning.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-3 bg-purple-50 p-4 rounded-xl hover:bg-purple-100 transition-all"
              >
                <FaSeedling className="text-purple-700 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Agriculture</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Promoting sustainable food production and agri-business.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-3 bg-purple-50 p-4 rounded-xl hover:bg-purple-100 transition-all sm:col-span-2"
              >
                <FaPrint className="text-purple-700 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Printing & Media</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Delivering creative visual storytelling and impactful branding.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              className="mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="inline-block bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-black transition-all duration-300"
              >
                Learn More About My Mission
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <ServicesPreview />

      {/* GALLERY PREVIEW */}
      <GalleryPreview />

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-24 text-center bg-gradient-to-b from-purple-50 to-white"
      >
        <ContactForm />
      </section>
    </div>
  )
}









// 'use client'
// import Hero from '../components/Hero'
// import ServicesPreview from '../components/ServicesPreview'
// import GalleryPreview from '../components/GalleryPreview'
// import ContactForm from '../components/ContactForm'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { FaPrayingHands, FaSeedling, FaHome, FaChalkboardTeacher, FaPrint } from 'react-icons/fa'

// export default function Home() {
//   return (
//     <div className="bg-white text-gray-900">
//       {/* HERO SECTION */}
//       <Hero />

//       {/* ABOUT SECTION */}
//       <section
//         id="about"
//         className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-12 relative"
//       >
//         <motion.h2
//           className="text-4xl md:text-5xl font-extrabold text-center text-purple-700 mb-8"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           About Uduakobong Titus
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Profile Image */}
//           <motion.img
//             src="/profile.png"
//             alt="Uduakobong Titus portrait"
//             className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           />

//           {/* Text Content */}
//           <motion.div
//             className="flex flex-col justify-center"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
//               I’m <span className="text-purple-700">Uduakobong Titus</span> — a man with two divine callings.
//             </h3>

//             <p className="text-lg leading-relaxed mb-4 text-gray-700">
//               My life blends <span className="font-semibold text-purple-700">Ministry and Business</span>.
//               In ministry, I’m devoted to serving God and humanity through compassion, mentorship,
//               and philanthropy — helping people find purpose and hope.
//             </p>

//             <p className="text-lg leading-relaxed mb-6 text-gray-700">
//               On the business front, I lead <span className="font-semibold text-purple-700">REAP</span> —
//               an integrated vision for <strong>Real Estate, Education, Agriculture, and Printing & Media</strong>,
//               driving creativity, sustainability, and empowerment.
//             </p>

//             {/* Core Focus Areas */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
//               {[
//                 {
//                   icon: <FaPrayingHands className="text-purple-700 w-6 h-6 mt-1" />,
//                   title: 'Ministry & Philanthropy',
//                   desc: 'Transforming lives through faith, compassion, and service.',
//                 },
//                 {
//                   icon: <FaHome className="text-purple-700 w-6 h-6 mt-1" />,
//                   title: 'Real Estate',
//                   desc: 'Connecting families to quality, affordable homes.',
//                 },
//                 {
//                   icon: <FaChalkboardTeacher className="text-purple-700 w-6 h-6 mt-1" />,
//                   title: 'Education',
//                   desc: 'Inspiring purposeful learning and leadership.',
//                 },
//                 {
//                   icon: <FaSeedling className="text-purple-700 w-6 h-6 mt-1" />,
//                   title: 'Agriculture',
//                   desc: 'Promoting sustainable and community-driven agribusiness.',
//                 },
//                 {
//                   icon: <FaPrint className="text-purple-700 w-6 h-6 mt-1" />,
//                   title: 'Printing & Media',
//                   desc: 'Crafting creative visuals and lasting brand stories.',
//                 },
//               ].map((item, idx) => (
//                 <motion.div
//                   key={idx}
//                   whileHover={{ scale: 1.05 }}
//                   className={`flex items-start gap-3 bg-purple-50 p-4 rounded-xl hover:bg-purple-100 transition-all ${
//                     idx === 4 ? 'sm:col-span-2' : ''
//                   }`}
//                 >
//                   {item.icon}
//                   <div>
//                     <h4 className="font-semibold text-gray-900">{item.title}</h4>
//                     <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <motion.div
//               className="mt-10"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Link
//                 href="/about"
//                 className="inline-block bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-black transition-all duration-300"
//               >
//                 Learn More About My Mission
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* SERVICES PREVIEW */}
//       <ServicesPreview />

//       {/* GALLERY PREVIEW */}
//       <GalleryPreview />

//       {/* CONTACT SECTION */}
//       <section
//         id="contact"
//         className="max-w-4xl mx-auto px-6 py-24 text-center bg-gradient-to-b from-purple-50 to-white"
//       >
//         <ContactForm />
//       </section>
//     </div>
//   )
// }
