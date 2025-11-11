'use client'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedinIn, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 relative overflow-hidden">
      {/* Animated Glow Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-purple-700/20 blur-3xl opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section */}
        <motion.div
          className="text-center md:text-left space-y-3"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-extrabold text-purple-400 tracking-tight">
            Uduakobong<span className="text-white">.Titus</span>
          </h3>
          <p className="text-sm text-gray-300 max-w-md">
            Educator & Founder of Rehoboth Creative Hub — empowering young minds through
            innovation, creativity, and digital learning.
          </p>

          <div className="flex items-center space-x-4 text-sm mt-3">
            <span className="flex items-center space-x-2">
              <FaEnvelope className="text-purple-400" />
              <a href="mailto:hello@rehobothhub.com" className="hover:text-purple-400 transition">
                hello@rehobothhub.com
              </a>
            </span>
            <span className="hidden md:flex items-center space-x-2">
              <FaPhoneAlt className="text-purple-400" />
              <a href="tel:+2348000000000" className="hover:text-purple-400 transition">
                +234 800 000 0000
              </a>
            </span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex space-x-5"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { icon: <FaInstagram />, href: '#', label: 'Instagram' },
            { icon: <FaTwitter />, href: '#', label: 'Twitter' },
            { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              aria-label={social.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-700 shadow-md text-white transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Note */}
      <motion.div
        className="relative z-10 mt-10 border-t border-purple-800/50 pt-4 text-center text-sm text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Rehoboth Creative Hub. All Rights Reserved.  
        <br className="md:hidden" />
        <span className="text-purple-400 font-medium"> Crafted by LALA TECH</span>
      </motion.div>
    </footer>
  )
}
