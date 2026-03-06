import React, { createContext, useContext, useState, useEffect } from 'react';

const SchoolContext = createContext();

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};

export const SchoolProvider = ({ children }) => {
  const [schoolInfo, setSchoolInfo] = useState(() => {
    const saved = localStorage.getItem('schoolInfo');
    return saved ? JSON.parse(saved) : {
      name: 'Shree Dudhkoshi School',
      address: 'Dudhkoshi, Solukhumbu, Nepal',
      phone: '+977 123456789',
      email: 'info@shreedudhkoshi.edu.np',
      logo: 'SD',
      mission: 'To provide quality education and foster excellence in every student.',
      vision: 'To be a leading educational institution in the region, empowering students for a better future.',
      history: 'Founded in 1995, Shree Dudhkoshi School has been a cornerstone of the community for decades...',
    };
  });

  const [notices, setNotices] = useState(() => {
    const saved = localStorage.getItem('notices');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: 'Annual Examination Schedule 2024', date: '2024-03-20', content: 'The annual examinations will begin from April 5th...', file: '#' },
      { id: 2, title: 'School Reopening Notice', date: '2024-01-15', content: 'The school will reopen on January 20th after winter vacation.', file: '#' },
    ];
  });

  const [teachers, setTeachers] = useState(() => {
    const saved = localStorage.getItem('teachers');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'Ram Bahadur', subject: 'Mathematics', photo: 'https://images.unsplash.com/photo-1544717297-fa154da09f5b?w=400&h=400&fit=crop', bio: 'Expert in Algebra and Calculus with 10 years experience.' },
      { id: 2, name: 'Sita Kumari', subject: 'Science', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop', bio: 'Passionate about Biology and Chemistry.' },
    ];
  });

  const [gallery, setGallery] = useState(() => {
    const saved = localStorage.getItem('gallery');
    return saved ? JSON.parse(saved) : [
      { id: 1, url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80', title: 'School Building' },
      { id: 2, url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80', title: 'Classroom Activity' },
    ];
  });

  const [announcements, setAnnouncements] = useState(() => {
    const saved = localStorage.getItem('announcements');
    return saved ? JSON.parse(saved) : [
      { id: 1, text: 'Admissions open for Session 2024-25!', active: true },
      { id: 2, text: 'New Computer Lab inaugurated.', active: true },
    ];
  });

  useEffect(() => {
    localStorage.setItem('schoolInfo', JSON.stringify(schoolInfo));
    localStorage.setItem('notices', JSON.stringify(notices));
    localStorage.setItem('teachers', JSON.stringify(teachers));
    localStorage.setItem('gallery', JSON.stringify(gallery));
    localStorage.setItem('announcements', JSON.stringify(announcements));
  }, [schoolInfo, notices, teachers, gallery, announcements]);

  const value = {
    schoolInfo, setSchoolInfo,
    notices, setNotices,
    teachers, setTeachers,
    gallery, setGallery,
    announcements, setAnnouncements
  };

  return (
    <SchoolContext.Provider value={value}>
      {children}
    </SchoolContext.Provider>
  );
};
