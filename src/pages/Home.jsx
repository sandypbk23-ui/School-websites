import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { motion } from 'framer-motion';

const Home = () => {
  const { announcements, schoolInfo } = useSchool();
  const activeAnnouncements = announcements.filter(a => a.active);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80" 
            alt="School Hero" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              {schoolInfo.name}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-10 text-blue-100">
              {schoolInfo.mission}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/about" className="bg-white text-primary-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg transform hover:-translate-y-1">
                Learn More
              </a>
              <a href="/notices" className="bg-primary-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg transform hover:-translate-y-1 border border-primary-500">
                View Notices
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Announcements Ticker */}
      <div className="bg-primary-900 text-white py-3 overflow-hidden whitespace-nowrap border-y border-primary-800">
        <div className="flex items-center gap-8 animate-marquee">
          {activeAnnouncements.map((ann, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="bg-blue-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase">New</span>
              {ann.text}
            </span>
          ))}
          {/* Duplicate for seamless loop if short */}
          {activeAnnouncements.length < 5 && activeAnnouncements.map((ann, i) => (
            <span key={`dup-${i}`} className="flex items-center gap-2">
              <span className="bg-blue-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase">New</span>
              {ann.text}
            </span>
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6 relative inline-block">
                Welcome to Our school
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-primary-600"></span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                Shree Dudhkoshi School is committed to providing a nurturing environment where students are encouraged to reach their full potential. Our dedicated staff and comprehensive curriculum ensure that every child receives the best foundation for their future.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="block text-3xl font-bold text-primary-700 mb-1">25+</span>
                  <span className="text-sm font-medium text-slate-500">Years of Excellence</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="block text-3xl font-bold text-primary-700 mb-1">500+</span>
                  <span className="text-sm font-medium text-slate-500">Students Enrolled</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80" 
                alt="School Activities" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary-100 rounded-3xl -z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Notices Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest Notices</h2>
              <p className="text-slate-500">Stay informed about school events and news.</p>
            </div>
            <a href="/notices" className="text-primary-600 font-bold hover:text-primary-700 transition-colors">
              View All Notices →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* We'll refine this later with real data */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <span className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-4 block">Exam</span>
              <h3 className="text-xl font-bold mb-4">Final Term Schedule</h3>
              <p className="text-slate-500 text-sm mb-6">Details regarding the upcoming final examination schedule for all grades.</p>
              <button className="text-sm font-semibold text-primary-600">Download PDF</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
