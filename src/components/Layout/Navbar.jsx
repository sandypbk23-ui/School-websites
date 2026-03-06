import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                SD
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary-900 leading-tight">Shree Dudhkoshi</h1>
                <p className="text-xs text-primary-600 font-medium tracking-wider">GOVERNMENT SCHOOL</p>
              </div>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="/" className="text-primary-900 inline-flex items-center px-1 pt-1 border-b-2 border-primary-500 text-sm font-medium">Home</a>
              <a href="/about" className="text-slate-500 hover:text-primary-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary-300 text-sm font-medium transition-colors">About</a>
              <a href="/academics" className="text-slate-500 hover:text-primary-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary-300 text-sm font-medium transition-colors">Academics</a>
              <a href="/teachers" className="text-slate-500 hover:text-primary-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary-300 text-sm font-medium transition-colors">Teachers</a>
              <a href="/notices" className="text-slate-500 hover:text-primary-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary-300 text-sm font-medium transition-colors">Notices</a>
              <a href="/gallery" className="text-slate-500 hover:text-primary-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary-300 text-sm font-medium transition-colors">Gallery</a>
              <a href="/contact" className="text-slate-500 hover:text-primary-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary-300 text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex items-center">
            <a href="/admin/login" className="bg-primary-700 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary-800 transition-colors shadow-sm">
              Admin Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
