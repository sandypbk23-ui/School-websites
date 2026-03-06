import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';

const AnnouncementManager = () => {
  const { announcements, setAnnouncements } = useSchool();
  const [newText, setNewText] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newText.trim()) return;
    setAnnouncements([...announcements, { id: Date.now(), text: newText, active: true }]);
    setNewText('');
  };

  const toggleStatus = (id) => {
    setAnnouncements(announcements.map(a => 
      a.id === id ? { ...a, active: !a.active } : a
    ));
  };

  const handleDelete = (id) => {
    setAnnouncements(announcements.filter(a => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Home Announcements</h1>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-10">
          <h2 className="text-xl font-bold mb-6">Create Announcement</h2>
          <form onSubmit={handleAdd} className="flex gap-4">
            <input 
              type="text" 
              placeholder="Announcement text..." 
              className="flex-grow bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              required
            />
            <button type="submit" className="bg-primary-700 text-white font-bold px-8 py-3 rounded-xl hover:bg-primary-800 transition">
              Add
            </button>
          </form>
        </div>

        <div className="space-y-4">
          {announcements.map((ann) => (
            <div key={ann.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex justify-between items-center group">
              <div className="flex items-center gap-4">
                <span className={`w-3 h-3 rounded-full ${ann.active ? 'bg-green-500' : 'bg-slate-300'}`}></span>
                <p className={`text-sm font-medium ${ann.active ? 'text-slate-800' : 'text-slate-400 line-through'}`}>
                  {ann.text}
                </p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => toggleStatus(ann.id)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-colors ${ann.active ? 'text-amber-600 border-amber-200 bg-amber-50' : 'text-green-600 border-green-200 bg-green-50'}`}
                >
                  {ann.active ? 'Deactivate' : 'Activate'}
                </button>
                <button onClick={() => handleDelete(ann.id)} className="text-red-500 p-1.5 hover:bg-red-50 rounded-lg">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementManager;
