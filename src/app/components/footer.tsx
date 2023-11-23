import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return ( <>
    <footer className="body-font rounded border-2 border-indigo-500 bg-indigo-500 text-white">
      <div className="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto mt-10 w-64 shrink-0 text-center md:mx-0 md:mt-0 md:text-left">
          
            <span className="ml-3 text-xl font-semibold">ToPathashala</span>
        
          <p className="mt-2 text-sm text-white">Empowering Education : Simplified Management</p>
        </div>
        <div className="order-first -mb-10 flex grow flex-wrap text-center md:pr-20 md:text-left">
          {/* Categories */}
          {/* First Column */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <h2 className="title-font mb-3 text-sm font-bold tracking-widest text-white">ABOUT</h2>
            <nav className="mb-10 list-none">
            <li>
                <Link href="/">
                  <span className="cursor-pointer text-white hover:text-teal-50 dark:text-white">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/features">
                  <span className="cursor-pointer text-white hover:text-teal-50 dark:text-white">Features</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="cursor-pointer text-white hover:text-teal-50 dark:text-white">Contact Us</span>
                </Link>
              </li>
            
            </nav>
          </div>
          
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <h2 className="title-font mb-3 text-sm font-bold tracking-widest text-white">TAKE A LOOK</h2>
            <nav className="mb-10 list-none">
            <li>
                <Link href="/register">
                  <span className="cursor-pointer text-white hover:text-teal-50 dark:text-white">Register</span>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <span className="cursor-pointer text-white hover:text-teal-50 dark:text-white">Login</span>
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <h2 className="title-font mb-3 text-sm font-bold tracking-widest text-white">TERMS</h2>
            <nav className="mb-10 list-none">
            <li>
                <Link href="/privacy">
                  <span className="cursor-pointer text-white hover:text-teal-50 dark:text-white">Privacy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <span className="cursor-pointer text-white hover:text-teal-50 dark:text-white">Terms & Conditions</span>
                </Link>
              </li>
            </nav>
          </div>
          {/* Add other columns similarly */}
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="bg-gray-100">
        <div className="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
          <p className="text-center text-sm font-bold text-black sm:text-left">© 2023 ToPathashala By -
            <Link href={"/"} rel="noopener noreferrer" className="ml-1 font-bold text-black" target="_blank">TechnoSthal</Link>
          </p>
         
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
