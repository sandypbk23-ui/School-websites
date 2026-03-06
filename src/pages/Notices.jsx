import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { motion } from 'framer-motion';

const Notices = () => {
  const { notices } = useSchool();

  return (
    <div className="pt-20">
      <div className="bg-primary-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notice Board</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">Official announcements, event schedules, and important information.</p>
        </div>
      </div>

      <section className="py-24 bg-slate-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {notices.map((notice, idx) => (
              <motion.div 
                key={notice.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start md:items-center group hover:shadow-md transition-shadow"
              >
                <div className="bg-primary-50 px-6 py-4 rounded-2xl text-center min-w-[120px]">
                  <span className="block text-primary-600 font-bold text-2xl">{new Date(notice.date).getDate()}</span>
                  <span className="block text-primary-400 text-xs font-bold uppercase tracking-widest">
                    {new Date(notice.date).toLocaleString('default', { month: 'short' })} {new Date(notice.date).getFullYear()}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors uppercase">{notice.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {notice.content}
                  </p>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-primary-600 font-bold text-sm hover:underline">
                      <span>📥</span> Download PDF
                    </button>
                    <button className="flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-slate-600">
                      <span>🔗</span> Share Link
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notices;
