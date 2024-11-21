import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Importing icons

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com', icon: <FaFacebook className="h-6 w-6" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: <FaLinkedin className="h-6 w-6" /> },
  { name: 'GitHub', href: 'https://github.com', icon: <FaGithub className="h-6 w-6" /> },
  { name: 'Instagram', href: 'https://instagram.com', icon: <FaInstagram className="h-6 w-6" /> },
];

export default function Footer() {
  return (
    <footer className="bg-black py-12 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl text-white">GROPRO MEDIA</span>
            <p className="mt-4 text-gray-400 max-w-md">
              Creating exceptional digital experiences through innovative design and development solutions.
            </p>
          </div>

          {/* Quick Links Section with Hover Animation */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {[
                { name: 'Home', href: '#' },
                { name: 'Projects', href: '#projects' },
                { name: 'Features', href: '#features' },
                { name: 'Services', href: '#services' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.1 }}  // Scale effect on hover
                  transition={{ duration: 0.3 }}
                >
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-accent transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Connect Section with Social Links and Hover Animation */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 flex gap-6 justify-center sm:justify-start">
              {socialLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ scale: 1.2 }}  // Scale effect on hover
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors duration-300"
                  >
                    {link.icon}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Gropro Media. All rights reserved. @Akash Vardhan
          </p>
        </div>
      </div>
    </footer>
  );
}
