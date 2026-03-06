import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const Dashboard = () => {
  const { notices, teachers, gallery } = useSchool();

  const enrollmentData = [
    { year: '2020', students: 420 },
    { year: '2021', students: 450 },
    { year: '2022', students: 480 },
    { year: '2023', students: 512 },
    { year: '2024', students: 545 },
  ];

  const attendanceData = [
    { day: 'Mon', percentage: 92 },
    { day: 'Tue', percentage: 95 },
    { day: 'Wed', percentage: 88 },
    { day: 'Thu', percentage: 94 },
    { day: 'Fri', percentage: 91 },
  ];

  const stats = [
    { label: 'Total Students', value: '545', icon: '👥', color: 'bg-blue-500' },
    { label: 'Total Teachers', value: teachers.length, icon: '👨‍🏫', color: 'bg-emerald-500' },
    { label: 'Active Notices', value: notices.length, icon: '📢', color: 'bg-amber-500' },
    { label: 'Gallery Photos', value: gallery.length, icon: '🖼️', color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-500 mt-1">Glimpse of school performance and activities.</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-5">
              <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-8">Student Enrollment Growth</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={enrollmentData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="students" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-8">Weekly Attendance (%)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" />
                  <YAxis domain={[80, 100]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="percentage" stroke="#10b981" strokeWidth={3} dot={{ r: 6, fill: '#10b981' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activity Log */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-50">
            <h3 className="font-bold text-slate-900">Recent Activity Log</h3>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { text: 'New teacher profile added: Ram Bahadur', time: '2 hours ago', type: 'teacher' },
              { text: 'Annual Exam Schedule notice published', time: '5 hours ago', type: 'notice' },
              { text: 'Gallery updated with 5 new photos', time: 'Yesterday', type: 'gallery' },
              { text: 'School info updated (Contact Number)', time: '2 days ago', type: 'info' },
            ].map((log, i) => (
              <div key={i} className="px-8 py-5 flex justify-between items-center group hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                  <p className="text-sm text-slate-600 font-medium">{log.text}</p>
                </div>
                <span className="text-xs text-slate-400">{log.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
