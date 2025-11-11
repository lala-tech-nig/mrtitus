'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaUser, FaPaperPlane } from 'react-icons/fa'
import Confetti from 'react-confetti'
import toast, { Toaster } from 'react-hot-toast'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [showConfetti, setShowConfetti] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    toast.loading('Sending message...')
    await new Promise((r) => setTimeout(r, 1000))
    toast.dismiss()
    toast.success('Message sent successfully 🎉')
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 4000)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="relative overflow-hidden">
      {/* Confetti Animation */}
      <AnimatePresence>
        {showConfetti && (
          <Confetti
            recycle={false}
            numberOfPieces={250}
            gravity={0.2}
            tweenDuration={2000}
            colors={['#6D28D9', '#FFFFFF', '#000000']}
          />
        )}
      </AnimatePresence>

      {/* Toast Container */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#000',
            color: '#fff',
            borderRadius: '10px',
            padding: '12px 20px',
            fontSize: '14px',
          },
          success: {
            iconTheme: { primary: '#6D28D9', secondary: '#fff' },
          },
        }}
      />

      {/* Header Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-purple-700">
          Let’s Build Something Meaningful Together
        </h3>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Whether you’re looking to collaborate, learn, or start a creative project — I’d love to hear from you.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white/70 backdrop-blur-lg border border-purple-100 rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Input Fields */}
        <div className="relative">
          <FaUser className="absolute left-3 top-3 text-purple-600" />
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 focus:border-purple-500 outline-none transition"
          />
        </div>

        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-purple-600" />
          <input
            required
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            type="email"
            className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 focus:border-purple-500 outline-none transition"
          />
        </div>

        <div className="relative md:col-span-2">
          <FaPhoneAlt className="absolute left-3 top-3 text-purple-600" />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone (optional)"
            className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 focus:border-purple-500 outline-none transition"
          />
        </div>

        <div className="md:col-span-2">
          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message..."
            className="w-full p-3 rounded-lg border border-gray-200 focus:border-purple-500 outline-none transition h-40 resize-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="md:col-span-2 bg-purple-700 hover:bg-black text-white py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 shadow-md transition-all duration-300"
        >
          <FaPaperPlane />
          Send Message
        </motion.button>
      </motion.form>
    </div>
  )
}
