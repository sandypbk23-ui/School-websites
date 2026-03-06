import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';

const NoticeManager = () => {
  const { notices, setNotices } = useSchool();
  const [formData, setFormData] = useState({ title: '', date: '', content: '' });
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setNotices(notices.map(n => n.id === editingId ? { ...n, ...formData } : n));
      setEditingId(null);
    } else {
      setNotices([...notices, { ...formData, id: Date.now(), file: '#' }]);
    }
    setFormData({ title: '', date: '', content: '' });
  };

  const handleEdit = (notice) => {
    setFormData({ title: notice.title, date: notice.date, content: notice.content });
    setEditingId(notice.id);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      setNotices(notices.filter(n => n.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Manage Notices</h1>

        {/* Add/Edit Form */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-10">
          <h2 className="text-xl font-bold mb-6">{editingId ? 'Edit Notice' : 'Add New Notice'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Notice Title" 
                className="bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
              <input 
                type="date" 
                className="bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>
            <textarea 
              placeholder="Notice Content" 
              className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500 min-h-[120px]"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              required
            ></textarea>
            <div className="flex gap-3">
              <button 
                type="submit" 
                className="bg-primary-700 text-white font-bold px-8 py-3 rounded-xl hover:bg-primary-800 transition shadow-lg shadow-primary-100"
              >
                {editingId ? 'Update Notice' : 'Post Notice'}
              </button>
              {editingId && (
                <button 
                  type="button" 
                  onClick={() => { setEditingId(null); setFormData({ title: '', date: '', content: '' }); }}
                  className="bg-slate-100 text-slate-600 font-bold px-8 py-3 rounded-xl hover:bg-slate-200 transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* List of Notices */}
        <div className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex justify-between items-center group">
              <div>
                <h3 className="font-bold text-slate-800 uppercase tracking-tight">{notice.title}</h3>
                <p className="text-xs text-slate-400 mt-1 font-medium">{notice.date}</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleEdit(notice)}
                  className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                  title="Edit"
                >
                  ✏️
                </button>
                <button 
                  onClick={() => handleDelete(notice.id)}
                  className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeManager;
