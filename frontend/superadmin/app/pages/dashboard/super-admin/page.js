
"use client"
import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import DashboardStats from '../../../components/DashboardStats';
import './page.css'; // Assurez-vous que le fichier CSS est importé


const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`dashboard-layout ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar isSidebarOpen={!isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
        <Header toggleSidebar={toggleSidebar} />
        <DashboardStats isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
};

export default DashboardPage;

