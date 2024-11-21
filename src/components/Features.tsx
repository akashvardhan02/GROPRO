import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CodeBracketIcon, PaintBrushIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Modern Development',
    description: 'Built with the latest technologies and best practices for optimal performance.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Creative Design',
    description: 'Stunning visuals that capture attention and deliver your message effectively.',
    icon: PaintBrushIcon,
  },
  {
    name: 'Responsive Layout',
    description: 'Perfect viewing experience across all devices and screen sizes.',
    icon: DevicePhoneMobileIcon,
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-serif font-bold mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg sm:text-base">
            Discover what makes our solutions stand out from the rest
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-300 border-2 border-transparent hover:border-accent hover:border-4 hover:shadow-xl"
              >
                <div className="w-16 h-16 mx-auto mb-6 text-accent transition-all transform hover:scale-125 duration-300 z-10">
                  <feature.icon className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3 transition-all hover:text-accent duration-300 sm:text-xl md:text-2xl">
                  {feature.name}
                </h3>
                <p className="text-gray-300 text-lg transition-all hover:text-white duration-300 sm:text-base md:text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
