import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';

const GalleryManager = () => {
  const { gallery, setGallery } = useSchool();
  const [formData, setFormData] = useState({ title: '', url: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setGallery([...gallery, { ...formData, id: Date.now() }]);
    setFormData({ title: '', url: '' });
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this photo?')) {
      setGallery(gallery.filter(img => img.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Manage Gallery</h1>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-10">
          <h2 className="text-xl font-bold mb-6">Upload Photo</h2>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              placeholder="Photo Title" 
              className="flex-grow bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
            <input 
              type="url" 
              placeholder="Image URL" 
              className="flex-grow bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              required
            />
            <button type="submit" className="bg-primary-700 text-white font-bold px-8 py-3 rounded-xl hover:bg-primary-800 transition">
              Add to Gallery
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {gallery.map((img) => (
            <div key={img.id} className="relative group rounded-2xl overflow-hidden shadow-sm aspect-square bg-slate-100">
              <img src={img.url} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 gap-3 text-center">
                <p className="text-white text-xs font-bold">{img.title}</p>
                <button 
                  onClick={() => handleDelete(img.id)}
                  className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryManager;
