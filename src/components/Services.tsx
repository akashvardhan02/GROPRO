import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

const services = [
  {
    title: 'Web Development',
    description: 'High-performance websites tailored to your needs.',
    image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdldiUyMGRldmVsb3BtZW50fGVufDB8fHx8MTYzMTYwNDYyMA&ixlib=rb-1.2.1&q=80&w=1080',
    details: [
      'Full-stack web applications',
      'Progressive Web Apps (PWA)',
      'API development and integration',
      'Performance optimization',
    ],
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered designs with pixel-perfect execution.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    details: [
      'User interface design',
      'Wireframing and prototyping',
      'User experience optimization',
      'Design systems and branding',
    ],
  },
  {
    title: 'Cloud Solutions',
    description: 'Reliable, scalable, and secure cloud services.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNsb3VkfGVufDB8fHx8MTYzMTYwNDYyMA&ixlib=rb-1.2.1&q=80&w=1080',
    details: [
      'Cloud migration and management',
      'Serverless architecture',
      'DevOps and CI/CD pipelines',
      'Data storage and analytics',
    ],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Leverage AI to transform your business operations.',
    image: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFpJTIwYW5kJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fHx8MTYzMTYwNDYyMA&ixlib=rb-1.2.1&q=80&w=1080',
    details: [
      'Custom AI models',
      'Natural Language Processing',
      'Predictive analytics',
      'Computer vision solutions',
    ],
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-white mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover cutting-edge solutions crafted to elevate your business.
          </p>
        </motion.div>

        {/* Grid for different screen sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(service)}
            >
              {/* Aspect ratio container */}
              <div className="aspect-w-16 aspect-h-10 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute inset-0 flex items-end p-6 z-20">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
}
