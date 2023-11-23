"use client"
import { useState } from 'react';
import Link from 'next/link';

const SiteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="p- mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/">
          <span className="flex cursor-pointer items-center rtl:space-x-reverse">
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              ToPathashala
            </span>
          </span>
        </Link>
        <div className="hidden space-x-6 rtl:space-x-reverse md:order-2 md:flex md:space-x-6">
          {/* Add other navigation links for medium and larger screens */}
          <Link href="/">
            <span className="cursor-pointer font-semibold text-gray-900 hover:text-blue-700 dark:text-white">Home</span>
          </Link>
          <Link href="/features">
            <span className="cursor-pointer font-semibold text-gray-900 hover:text-blue-700 dark:text-white">Features</span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer font-semibold text-gray-900 hover:text-blue-700 dark:text-white">Contact US</span>
          </Link>
          <Link href="/register">
                  <span className="cursor-pointer rounded-lg border bg-indigo-500 p-4 font-semibold text-white hover:text-blue-700 dark:text-white">Register</span>
                </Link>
          <Link href="/login">
                  <span className="cursor-pointer rounded-lg border bg-indigo-500 p-4 font-semibold text-white hover:text-blue-700 dark:text-white">login</span>
                </Link>
       
        </div>
        <div className="flex space-x-3 rtl:space-x-reverse md:order-2 md:hidden md:space-x-0">
          <button onClick={toggleDrawer} className="block p-2 focus:outline-none">
            <svg
              className="h-6 w-6 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'left-0' : '-left-full'
          } fixed top-0 z-30 h-full w-1/2 bg-white transition-all duration-300 ease-in-out dark:bg-gray-800 md:hidden`}
        >
          <div className="p-4">
            <h1 className='font-semibold '>ToPathashala</h1>
            <ol className="flex flex-col space-y-4 pt-6 ">
              {/* Render menu items in the drawer for small screens */}
              <li>
                <Link href="/">
                  <span className="cursor-pointer text-gray-900 hover:text-blue-700 dark:text-white">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/features">
                  <span className="cursor-pointer text-gray-900 hover:text-blue-700 dark:text-white">Features</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="cursor-pointer text-gray-900 hover:text-blue-700 dark:text-white">Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <span className="cursor-pointer text-gray-900 hover:text-blue-700 dark:text-white">Register</span>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <span className="cursor-pointer text-gray-900 hover:text-blue-700 dark:text-white">Login</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <span className="cursor-pointer text-gray-900 hover:text-blue-700 dark:text-white">Privacy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <span className="cursor-pointer text-gray-900 hover:text-blue-700 dark:text-white">Terms & Conditions</span>
                </Link>
              </li>
            </ol>
          </div>
          {/* <h1 className='pb-90 p-6 font-semibold'>❤️TechnoSthal</h1> */}
        </div>
      
      </div>

    </nav>
  );
};

export default SiteNavbar;

