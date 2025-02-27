import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-xl font-bold">RentalHub</h2>
            <p className="mt-2">Best place for buy Properties. </p>
          </div>
          
          {/* Navigation Links */}
          <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="mt-2 flex gap-5">
              <li className="mt-2">
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li className="mt-2">
                <a href="/properties" className="hover:underline">Properties</a>
              </li>
              <li className="mt-2">
                <a href="/profile" className="hover:underline">Profile</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-sm">&copy; {new Date().getFullYear()} RentalHub Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
