import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
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
      <SectionTitle title="Get In Touch" />
      
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto space-y-6"
      >
        <motion.div whileHover={{ scale: 1.02 }} className="group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
        </motion.div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </motion.button>

        {status === 'success' && (
          <p className="text-green-400 text-center">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact; 