import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { motion } from 'framer-motion';

const About = () => {
  const { schoolInfo } = useSchool();

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-primary-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our School</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">Discover the history, mission, and vision that drive Shree Dudhkoshi School forward.</p>
        </div>
      </div>

      {/* History Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Our History</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  {schoolInfo.history}
                </p>
                <p>
                  Over the years, we have grown from a small community initiative to a leading government school, consistently producing students who excel in both academics and extra-curricular activities.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?w=800&q=80" 
                alt="School History" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-primary-600 text-2xl mb-8">
                👁️
              </div>
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                {schoolInfo.vision}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-primary-600 text-2xl mb-8">
                🚀
              </div>
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                {schoolInfo.mission}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', icon: '⚖️' },
              { title: 'Excellence', icon: '🏆' },
              { title: 'Inclusivity', icon: '🤝' },
              { title: 'Innovation', icon: '💡' }
            ].map((v, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h4 className="font-bold text-slate-900">{v.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
