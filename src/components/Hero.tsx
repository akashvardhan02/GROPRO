import { motion } from 'framer-motion';

export default function Hero() {
  const text = 'Gropro Media Private Limited';

  const renderText = (text: string) => {
    return text.split('').map((letter, index: number) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          opacity: 1,
          y: -10,
          transition: { duration: 0.2 },
        }}
        transition={{
          duration: 0.5,
          delay: index * 0.05,
        }}
        className="inline-block"
      >
        {letter}
      </motion.span>
    ));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Architecture"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-tight text-white leading-none"
          >
            {renderText(text)}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 sm:mt-12 md:mt-16"
          >
            <a
              href="#projects"
              className="inline-flex items-center text-lg sm:text-xl text-white hover:text-accent transition-colors duration-300 group"
            >
              DISCOVER
              <svg
                className="w-6 h-6 ml-2 transform group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
