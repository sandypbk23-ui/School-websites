import React from 'react';

const Academics = () => {
  const levels = [
    { title: 'Primary Level', grades: 'Class 1 - 5', subjects: ['Mathematics', 'Science', 'English', 'Nepali', 'Social Studies'], icon: '🏫' },
    { title: 'Lower Secondary', grades: 'Class 6 - 8', subjects: ['Algebra', 'Biology', 'English Literature', 'Computer Science', 'Nepali'], icon: '📚' },
    { title: 'Secondary Level', grades: 'Class 9 - 10', subjects: ['Opt. Mathematics', 'Physics', 'History', 'Civics', 'Environment Science'], icon: '🎓' },
  ];

  return (
    <div className="pt-20">
      <div className="bg-primary-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">Explore our curriculum and the levels of education we offer.</p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {levels.map((level, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                  {level.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{level.title}</h3>
                <p className="text-primary-600 font-semibold mb-6 italic">{level.grades}</p>
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Key Subjects</h4>
                  <ul className="space-y-2">
                    {level.subjects.map((sub, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600">
                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Curriculum</h2>
          <p className="text-slate-600 leading-relaxed text-lg mb-12">
            We follow the National Curriculum of Nepal, enhanced with modern teaching methodologies and practical learning experiences. Our goal is to ensure students are well-prepared for higher education and future challenges.
          </p>
          <div className="inline-flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-2xl">📑</div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">Academic Calendar 2024</p>
              <p className="text-xs text-slate-500">Download the full schedule for the current year</p>
            </div>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary-700 transition">Download</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
