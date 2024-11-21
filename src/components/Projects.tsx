import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'Modern Architecture',
    description: 'Contemporary design meets functionality in this groundbreaking project.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072',
    details: [
      'Innovative structural design',
      'Sustainable materials',
      'Energy-efficient systems',
      'Smart home integration',
    ],
  },
  {
    title: 'Urban Planning',
    description: 'Reimagining city spaces for better living and community interaction.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=2070',
    details: [
      'Community-focused design',
      'Green spaces integration',
      'Traffic flow optimization',
      'Public amenities',
    ],
  },
  {
    title: 'Interior Design',
    description: 'Creating harmonious spaces that blend aesthetics with functionality.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2080',
    details: [
      'Custom furniture design',
      'Lighting solutions',
      'Material selection',
      'Space optimization',
    ],
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-primary font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Featured Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg sm:text-xl">
            Explore our latest architectural projects and innovations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
              {/* Glowing hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-accent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
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
