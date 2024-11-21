import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const testimonials = [
  {
    content: "Working with this team was an absolute pleasure. They delivered beyond our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
  },
  {
    content: "The attention to detail and creative solutions provided were exceptional.",
    author: "Michael Chen",
    role: "Creative Director, DesignCo",
  },
  {
    content: "Their innovative approach helped us achieve our digital transformation goals.",
    author: "Emma Davis",
    role: "Marketing Manager, InnovateCorp",
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="testimonials" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            <span className="gradient-text">Client Testimonials</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.3,
                type: 'spring',
                stiffness: 100,
              }}
              className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-transparent hover:border-accent transition-all duration-500 shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <blockquote
                className={`text-lg sm:text-xl text-gray-300 mb-6 transition-all duration-500 transform ${hoveredIndex === index ? 'opacity-100 scale-110' : 'opacity-75 scale-100'}`}
              >
                "{testimonial.content}"
              </blockquote>
              <div
                className={`font-semibold text-white transition-all duration-500 transform ${hoveredIndex === index ? 'opacity-100 scale-110' : 'opacity-75 scale-100'}`}
              >
                {testimonial.author}
              </div>
              <div
                className={`text-sm sm:text-base text-gray-400 transition-all duration-500 transform ${hoveredIndex === index ? 'opacity-100 scale-110' : 'opacity-75 scale-100'}`}
              >
                {testimonial.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
