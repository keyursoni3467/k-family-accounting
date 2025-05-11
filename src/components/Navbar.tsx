
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileCheck, Calculator } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="flex items-center justify-center bg-gradient-to-r from-kblue-500 to-kblue-700 p-2 rounded-md">
                <FileCheck className="h-5 w-5 text-white" />
                <Calculator className="h-5 w-5 text-white ml-0.5" />
              </div>
              <span className="text-xl font-bold font-poppins text-gray-900">K Family Accounting</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-gray-700 hover:text-kblue-500 transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-kblue-500 transition-colors">
                Services
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-kblue-500 transition-colors">
                Testimonials
              </a>
              <a href="#contact">
                <Button className="bg-kblue-500 hover:bg-kblue-600">Contact Us</Button>
              </a>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-kblue-500 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* X Icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kblue-500 hover:bg-gray-50"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#services"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kblue-500 hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kblue-500 hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium bg-kblue-500 text-white hover:bg-kblue-600"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
