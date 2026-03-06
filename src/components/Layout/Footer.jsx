import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center font-bold text-lg">
                SD
              </div>
              <h2 className="text-xl font-bold">Shree Dudhkoshi</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Dedicated to providing quality education and fostering excellence in every student. Serving our community since 1995.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="/about" className="hover:text-white transition-colors">Our History</a></li>
              <li><a href="/academics" className="hover:text-white transition-colors">Academics</a></li>
              <li><a href="/notices" className="hover:text-white transition-colors">Notice Board</a></li>
              <li><a href="/gallery" className="hover:text-white transition-colors">Photo Gallery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-primary-400">📍</span>
                Dudhkoshi, Solukhumbu, Nepal
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary-400">📞</span>
                +977 123456789
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary-400">✉️</span>
                info@shreedudhkoshi.edu.np
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-slate-400 text-sm mb-4">Stay updated with our latest news and announcements.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2024 Shree Dudhkoshi Government School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
