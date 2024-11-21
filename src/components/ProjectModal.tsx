import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    details: string[];
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Background overlay with smooth fade in/out */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal wrapper with rainbow gradient animation */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-full sm:max-w-md lg:max-w-2xl transform overflow-hidden rounded-2xl p-6 sm:p-8 text-left align-middle shadow-2xl transition-all bg-gradient-rainbow animate-gradient-x">
                {/* Close button */}
                <div className="absolute right-4 top-4">
                  <button
                    type="button"
                    className="text-white hover:text-accent transition-transform duration-300 transform hover:scale-110"
                    onClick={onClose}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                {/* Image Section */}
                <div className="aspect-video w-full overflow-hidden rounded-lg mb-6 shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <Dialog.Title as="h3" className="text-2xl sm:text-3xl font-serif font-extrabold leading-tight text-white mb-4 sm:mb-6 transition-all">
                  {project.title}
                </Dialog.Title>

                {/* Description */}
                <div className="mt-2">
                  <p className="text-gray-100 text-base sm:text-lg font-serif mb-4 sm:mb-6">{project.description}</p>
                  <ul className="space-y-3">
                    {project.details.map((detail, index) => (
                      <li key={index} className="text-gray-200 text-sm sm:text-base font-serif">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Close button with hover effects */}
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-full border border-transparent bg-accent px-6 py-2 text-base sm:text-lg font-semibold text-white hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-all duration-300 transform hover:scale-105"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
