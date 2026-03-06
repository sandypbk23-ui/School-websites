import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { motion } from 'framer-motion';

const Teachers = () => {
  const { teachers } = useSchool();

  return (
    <div className="pt-20">
      <div className="bg-primary-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Teachers</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">Meet the dedicated professionals who inspire our students every day.</p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher) => (
              <motion.div 
                key={teacher.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group"
              >
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img 
                    src={teacher.photo} 
                    alt={teacher.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{teacher.name}</h3>
                  <p className="text-primary-600 font-medium text-sm mb-4">{teacher.subject}</p>
                  <p className="text-slate-500 text-xs leading-relaxed italic">
                    "{teacher.bio}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;
