import { useState } from 'react'
import { motion } from 'framer-motion'
import NavBar from './Components/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      
      {/* Services Section */}
      <section id="services" className="min-h-screen bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>
          <p className="text-center text-gray-600">Services content goes here...</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h2>
          <p className="text-center text-gray-600">About content goes here...</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="min-h-screen bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Testimonials
          </motion.h2>
          <p className="text-center text-gray-600">Testimonials content goes here...</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h2>
          <p className="text-center text-gray-600">Contact content goes here...</p>
        </div>
      </section>
    </div>
    </>
  )
}

export default App