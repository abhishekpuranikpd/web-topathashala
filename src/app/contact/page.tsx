"use client"
import React from 'react';

import Footer from '../components/footer';
import SiteNavbar from '../components/nav';

const ContactUsPage = () => {
  const handleContactButtonClick = () => {
    window.location.href = 'mailto:topathashala@gmail.com';
  };

  return (
    <>
   
      <section className="body-font relative text-gray-600">
        <SiteNavbar/>
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">Book A Demo | Contact Us</h1>
            <p className="mx-auto rounded border-2 border-indigo-500 p-4 text-base leading-relaxed lg:w-2/3">
              Have questions, suggestions, or need assistance? We are here to help! Click the button below to send us an email, and our dedicated team will get back to you promptly.
            </p>
          </div>
          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <button onClick={handleContactButtonClick} className="mx-auto mb-8 flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
              Contact Us
            </button>
            {/* <div className="rounded border-2 border-indigo-500 p-4">
              <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
              <ul className="text-left">
                <li className="mb-2"><strong>Email:</strong> topathashala@gmail.com</li>
                <li className="mb-2"><strong>Phone:</strong> +1234567890</li>
                <li className="mb-2"><strong>Address:</strong> 123 Street, City, Country</li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUsPage;
