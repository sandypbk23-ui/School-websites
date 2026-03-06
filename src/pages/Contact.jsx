import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { motion } from 'framer-motion';

const Contact = () => {
  const { schoolInfo } = useSchool();

  return (
    <div className="pt-20">
      <div className="bg-primary-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">Have questions? We're here to help. Reach out to us through any of the channels below.</p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">First Name</label>
                    <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 transition-all outline-none" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                    <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 transition-all outline-none" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 transition-all outline-none" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea rows="5" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 transition-all outline-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition shadow-lg shadow-primary-200">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary-600 shrink-0">📍</div>
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Our Location</p>
                      <p className="text-slate-500 text-sm">{schoolInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary-600 shrink-0">📞</div>
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Phone Number</p>
                      <p className="text-slate-500 text-sm">{schoolInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary-600 shrink-0">✉️</div>
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Email Address</p>
                      <p className="text-slate-500 text-sm">{schoolInfo.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-64 bg-slate-100 rounded-3xl overflow-hidden border-4 border-white shadow-xl relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] bg-cover saturate-0 opacity-20"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <p className="text-slate-900 font-bold">Map Placeholder</p>
                  <p className="text-xs text-slate-500">Google Maps Integration Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
