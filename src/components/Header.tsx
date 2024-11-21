import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "Features", href: "#features" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Render the text with individual letter animations
  const renderText = (text: string): JSX.Element[] => {
    return text.split("").map((letter, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.05, // Delay for each letter to animate one after another
        }}
        className="inline-block"
      >
        {letter}
      </motion.span>
    ));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-sm">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 font-serif"
        aria-label="Global"
      >
        {/* Brand Section */}
        <div className="flex lg:flex-1">
          <a
            href="#"
            className="-m-1.5 p-1.5 transform hover:scale-110 transition-transform duration-300"
          >
            <span className="text-2xl text-white font-extrabold tracking-wider">
              GROPRO MEDIA
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-accent transition-colors duration-300"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-accent transition-all duration-300 transform hover:scale-105"
              whileHover={{ opacity: 1 }}
            >
              {renderText(item.name)}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-all duration-500 ease-in-out">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="-m-1.5 p-1.5 transform hover:scale-110 transition-transform duration-300"
            >
              <span className="text-2xl text-white font-extrabold tracking-wider">
                GROPRO MEDIA
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
              aria-expanded={mobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-accent/20 transform hover:scale-105 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
