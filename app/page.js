'use client'
import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import GalleryPreview from '../components/GalleryPreview'
import ContactForm from '../components/ContactForm'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-10"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-purple-700 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Profile image */}
          <motion.img
            src="/profile.png"
            alt="Uduakobong Titus portrait"
            className="w-full h-96 object-cover rounded-2xl shadow-lg border border-purple-200 hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          {/* Text content */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              Hello — I’m{' '}
              <span className="text-purple-700">Uduakobong Titus</span>
            </h3>

            <p className="text-lg leading-relaxed mb-4 text-gray-700">
              An educator, mentor, and the founder of{' '}
              <span className="font-semibold text-purple-700">
                Rehoboth Creative Hub
              </span>
              . I’m passionate about empowering minds through creative learning
              and helping individuals unlock their full potential in education,
              leadership, and digital innovation.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              My work blends technology and creativity to deliver
              life-transforming programs. Here’s a quick look at what I do:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Creative Education & Mentorship Programs</li>
              <li>Digital Skills Training & Workshops</li>
              <li>Curriculum Design & Learning Innovation</li>
              <li>Leadership & Personal Development Coaching</li>
            </ul>

            {/* CTA */}
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
