import React from 'react';
import { useSchool } from '../../context/SchoolContext';

const InfoManager = () => {
  const { schoolInfo, setSchoolInfo } = useSchool();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchoolInfo({ ...schoolInfo, [name]: value });
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">School Information</h1>

        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">School Name</label>
                <input name="name" value={schoolInfo.name} onChange={handleChange} className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input name="email" value={schoolInfo.email} onChange={handleChange} className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                <input name="phone" value={schoolInfo.phone} onChange={handleChange} className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Address</label>
                <input name="address" value={schoolInfo.address} onChange={handleChange} className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Mission Statement</label>
              <textarea name="mission" value={schoolInfo.mission} onChange={handleChange} rows="3" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Vision Statement</label>
              <textarea name="vision" value={schoolInfo.vision} onChange={handleChange} rows="3" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">School History</label>
              <textarea name="history" value={schoolInfo.history} onChange={handleChange} rows="6" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500" />
            </div>

            <div className="pt-4">
              <div className="bg-primary-50 p-4 rounded-2xl border border-primary-100 flex items-center gap-4">
                <span className="text-2xl">💡</span>
                <p className="text-sm text-primary-700 font-medium">Changes are saved automatically to the local database as you type.</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InfoManager;
