import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';

const TeacherManager = () => {
  const { teachers, setTeachers } = useSchool();
  const [formData, setFormData] = useState({ name: '', subject: '', photo: '', bio: '' });
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setTeachers(teachers.map(t => t.id === editingId ? { ...t, ...formData } : t));
      setEditingId(null);
    } else {
      setTeachers([...teachers, { ...formData, id: Date.now() }]);
    }
    setFormData({ name: '', subject: '', photo: '', bio: '' });
  };

  const handleEdit = (teacher) => {
    setFormData({ name: teacher.name, subject: teacher.subject, photo: teacher.photo, bio: teacher.bio });
    setEditingId(teacher.id);
  };

  const handleDelete = (id) => {
    if (window.confirm('Remove this teacher?')) {
      setTeachers(teachers.filter(t => t.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Manage Teachers</h1>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-10">
          <h2 className="text-xl font-bold mb-6">{editingId ? 'Edit Profile' : 'Add Teacher'}</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
              <input 
                type="url" 
                placeholder="Photo URL" 
                className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500"
                value={formData.photo}
                onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
                required
              />
            </div>
            <div className="space-y-4">
              <textarea 
                placeholder="Brief Bio" 
                className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500 min-h-[120px]"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                required
              ></textarea>
              <div className="flex gap-3">
                <button type="submit" className="flex-grow bg-primary-700 text-white font-bold py-3 rounded-xl hover:bg-primary-800 transition shadow-lg">
                  {editingId ? 'Save Changes' : 'Add Teacher'}
                </button>
                {editingId && (
                  <button type="button" onClick={() => { setEditingId(null); setFormData({ name: '', subject: '', photo: '', bio: '' }); }} className="bg-slate-100 text-slate-600 font-bold px-6 py-3 rounded-xl hover:bg-slate-200 transition">
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4 group">
              <img src={teacher.photo} alt="" className="w-16 h-16 rounded-2xl object-cover shrink-0" />
              <div className="flex-grow">
                <h3 className="font-bold text-slate-800">{teacher.name}</h3>
                <p className="text-xs text-primary-600 font-bold uppercase">{teacher.subject}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => handleEdit(teacher)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg">✏️</button>
                <button onClick={() => handleDelete(teacher.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherManager;
