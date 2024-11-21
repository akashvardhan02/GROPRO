import React, { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<string>(""); // Track form submission status
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false); // Track if the form is submitted
  const [formError, setFormError] = useState<string>(""); // Track form error status

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form from refreshing the page
  
    // Accessing form elements
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
  
    // Validation logic
    if (!name || !email || !message) {
      setFormError("Please fill out all fields.");
      return; // Stop the submission if there is an error
    }
  
    // Simulate a message send
    setFormError(""); // Clear any previous error
    setFormStatus("Message was sent successfully!");
    setIsFormSubmitted(true);
  
    // Clear the message and form inputs after a timeout (optional)
    setTimeout(() => {
      setFormStatus("");
      setIsFormSubmitted(false); // Reset form visibility
    }, 3000);
  };
  
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-8">Ready to start your next project? Contact us today.</p>

          {/* Only display form if not submitted */}
          {!isFormSubmitted && (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Form Error Message */}
              {formError && (
                <p className="text-red-500 text-sm font-medium">{formError}</p>
              )}

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="block w-full rounded-lg bg-white/5 border-0 px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="block w-full rounded-lg bg-white/5 border-0 px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-accent"
                />
              </div>
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                className="block w-full rounded-lg bg-white/5 border-0 px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-accent"
              />
              {/* Glow on Hover Button */}
              <button
                type="submit"
                className="glow-on-hover inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-accent hover:bg-secondary transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          )}

          {/* Display status message */}
          {formStatus && (
            <p className="mt-4 text-accent text-sm font-medium">{formStatus}</p>
          )}
        </div>
      </div>
    </section>
  );
}

// Global CSS for the button effect
const style = `
.glow-on-hover {
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}

.glow-on-hover:before {
  content: '';
  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:active {
  color: #000;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
}
`;

// Inject the styles to the document head
if (typeof window !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = style;
  document.head.appendChild(styleTag);
}
