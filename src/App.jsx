import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { SchoolProvider } from './context/SchoolContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Teachers from './pages/Teachers';
import Gallery from './pages/Gallery';
import Notices from './pages/Notices';
import Contact from './pages/Contact';

// Admin Pages
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import NoticeManager from './pages/admin/NoticeManager';
import TeacherManager from './pages/admin/TeacherManager';
import GalleryManager from './pages/admin/GalleryManager';
import AnnouncementManager from './pages/admin/AnnouncementManager';
import InfoManager from './pages/admin/InfoManager';

// Admin Sidebar Component
const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/admin/login');
  };

  const navItems = [
    { label: 'Overview', path: '/admin/dashboard', icon: '📊' },
    { label: 'Notices', path: '/admin/notices', icon: '📢' },
    { label: 'Teachers', path: '/admin/teachers', icon: '👨‍🏫' },
    { label: 'Gallery', path: '/admin/gallery', icon: '🖼️' },
    { label: 'Announcements', path: '/admin/announcements', icon: '✨' },
    { label: 'School Info', path: '/admin/info', icon: '🏫' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <aside className="w-72 bg-slate-900 text-white fixed h-full z-20 hidden md:block shadow-2xl">
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">SD</div>
            <div>
              <span className="block font-bold leading-none tracking-tight">Admin Panel</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1 block">Management Suite</span>
            </div>
          </div>
          
          <nav className="space-y-2 flex-grow">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-medium ${location.pathname === item.path ? 'bg-primary-600/10 text-primary-400 border border-primary-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
              >
                <span className="text-xl">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="pt-8 border-t border-slate-800">
            <button 
              onClick={handleLogout} 
              className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-red-400 hover:bg-red-400/10 transition-colors font-bold text-sm tracking-widest group"
            >
              <span className="group-hover:translate-x-1 transition-transform">Logout ➔</span>
            </button>
          </div>
        </div>
      </aside>
      <main className="flex-grow md:ml-72 min-h-screen">
        <div className="p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <SchoolProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Routes>
            {/* Public Container */}
            <Route path="*" element={
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/academics" element={<Academics />} />
                    <Route path="/teachers" element={<Teachers />} />
                    <Route path="/notices" element={<Notices />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            } />

            {/* Admin Container */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
            <Route path="/admin/notices" element={<AdminLayout><NoticeManager /></AdminLayout>} />
            <Route path="/admin/teachers" element={<AdminLayout><TeacherManager /></AdminLayout>} />
            <Route path="/admin/gallery" element={<AdminLayout><GalleryManager /></AdminLayout>} />
            <Route path="/admin/announcements" element={<AdminLayout><AnnouncementManager /></AdminLayout>} />
            <Route path="/admin/info" element={<AdminLayout><InfoManager /></AdminLayout>} />
          </Routes>
        </div>
      </Router>
    </SchoolProvider>
  );
}

export default App;
