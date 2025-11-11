'use client'
import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import GalleryPreview from '../components/GalleryPreview'
import ContactForm from '../components/ContactForm'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaChalkboardTeacher, FaLightbulb, FaLaptopCode, FaUsers } from 'react-icons/fa'

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
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.img
            src="/profile.png"
            alt="Uduakobong Titus portrait"
            className="w-full h-96 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
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
              Hello — I’m <span className="text-purple-700">Uduakobong Titus</span>
            </h3>

            <p className="text-lg leading-relaxed mb-4 text-gray-700">
              Educator, mentor, and founder of{' '}
              <span className="font-semibold text-purple-700">Rehoboth Creative Hub</span>.
              I empower minds through creative learning and digital innovation.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              I blend technology, creativity, and leadership to deliver programs that transform lives.
            </p>

            {/* Feature List with Icons */}
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center gap-3">
                <FaChalkboardTeacher className="text-purple-700 w-5 h-5" /> Creative Education & Mentorship
              </li>
              <li className="flex items-center gap-3">
                <FaLaptopCode className="text-purple-700 w-5 h-5" /> Digital Skills Training & Workshops
              </li>
              <li className="flex items-center gap-3">
                <FaLightbulb className="text-purple-700 w-5 h-5" /> Curriculum Design & Learning Innovation
              </li>
              <li className="flex items-center gap-3">
                <FaUsers className="text-purple-700 w-5 h-5" /> Leadership & Personal Development Coaching
              </li>
            </ul>

            {/* CTA Button */}
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="inline-block bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-black transition-all duration-300"
              >
                Learn More About Me
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
