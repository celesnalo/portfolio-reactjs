import { motion } from 'framer-motion';

const SectionTitle = ({ title }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center mb-16 relative"
    >
      <span className="text-blue-400">{title}</span>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-400"></div>
    </motion.h2>
  );
};

export default SectionTitle; 