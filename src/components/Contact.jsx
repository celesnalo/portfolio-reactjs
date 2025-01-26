import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionTitle from './SectionTitle';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mwpevjne', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Section Title */}
      <SectionTitle title="Get In Touch" />

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto space-y-6"
        aria-label="Contact Form"
      >
        {/* Name Input */}
        <motion.div whileHover={{ scale: 1.02 }} className="group">
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            aria-label="Your Name"
            title="Enter your name"
          />
        </motion.div>

        {/* Email Input */}
        <motion.div whileHover={{ scale: 1.02 }} className="group">
          <label htmlFor="email" className="sr-only">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            aria-label="Your Email"
            title="Enter your email"
          />
        </motion.div>

        {/* Message Textarea */}
        <motion.div whileHover={{ scale: 1.02 }} className="group">
          <label htmlFor="message" className="sr-only">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            aria-label="Your Message"
            title="Enter your message"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          disabled={status === 'sending'}
          aria-label="Send Message"
          title="Send your message"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </motion.button>

        {/* Status Messages */}
        {status === 'success' && (
          <p className="text-green-400 text-center" aria-live="polite">
            Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-center" aria-live="assertive">
            Failed to send message. Please try again.
          </p>
        )}
      </motion.form>

      {/* Upwork Link */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">
          Prefer to hire me on Upwork? Check out my profile:
        </p>
        <motion.a
          href="https://www.upwork.com/freelancers/~015a937ab5667969a7?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-6 py-3 bg-green-500 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          aria-label="Visit my Upwork profile"
          title="Visit my Upwork profile"
        >
          Visit My Upwork Profile
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;