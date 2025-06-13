import React, { useState } from "react";
import logo from '../assets/comp_logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#080617] ">
      <div className="flex flex-wrap items-center justify-between mx-auto px-7 py-5">
        <a href="/">
          <img src={logo} alt="logo" className="w-12 " />
        </a>
        <div className="flex items-center lg:order-2">
          <a
            href="/submit-form"
            className="text-black hidden md:block bg-[#F5D1FF] font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none"
          >
            Book a call
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"
            } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-sm lg:text-md uppercase text-[#f1f1f1] border-b lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent lg:p-0"
              >
                Home
              </a>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-sm lg:text-md uppercase text-[#f1f1f1] border-b lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent lg:p-0"
              >
                Solutions
              </a>
              {isDropdownOpen && (
                <div className="absolute left-0 w-40 bg-[#F1F1F1] text-black rounded-lg shadow-lg z-30 overflow-hidden">
                  <a
                    href="/ghosthost"
                    className="block px-4 py-2 text-[#080617] hover:bg-[#080617] hover:text-white transition-all ease-in m-1 rounded-lg"
                  >
                    GhostHost™
                  </a>
                  <a
                    href="/credits"
                    className="block px-4 py-2 text-[#080617] hover:bg-[#080617] hover:text-white transition-all ease-in m-1 rounded-lg"
                  >
                    Credits™
                  </a>
                  <a
                    href="/powerpod"
                    className="block px-4 py-2 text-[#080617] hover:bg-[#080617] hover:text-white transition-all ease-in m-1 rounded-lg"
                  >
                    PowerPod™
                  </a>
                </div>
              )}
            </li>
            <li>
              <a
                href="/portfolio"
                className="block py-2 pl-3 pr-4 text-sm lg:text-md uppercase text-[#f1f1f1] border-b lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent lg:p-0"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/client-success"
                className="block py-2 pl-3 pr-4 text-sm lg:text-md uppercase text-[#f1f1f1] border-b lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent lg:p-0"
              >
                Client Success
              </a>
            </li>
          </ul>
          <a
            href="/submit-form"
            className="text-black bg-[#F5D1FF] font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none block md:hidden mt-6"
          >
            Book a call
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
