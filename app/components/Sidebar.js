// app/components/Sidebar.js
"use client";
import React from 'react';
import { FaTachometerAlt, FaUsers, FaFileAlt, FaCalendarAlt, FaBan, FaCommentDots, FaCog, FaChartPie, FaBell, FaLifeRing, FaSignOutAlt } from 'react-icons/fa';
import { useMenu } from '../context/MenuContext';
import './Sidebar.css';

const Sidebar = ({ isSidebarOpen }) => {
  const { setSelectedMenu } = useMenu();

  const handleMenuClick = (menuName) => {
    setSelectedMenu(menuName);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <h2>Super Admin</h2>

      {/* Dashboard Section */}
      <div className="sidebar-section">
        <h3>Dashboard</h3>
        <ul>
          <li><a onClick={() => handleMenuClick('Tableau de Bord')}><FaTachometerAlt /> Tableau de Bord</a></li>
          <li><a onClick={() => handleMenuClick('Analyse')}><FaChartPie /> Analyse</a></li>
        </ul>
      </div>

      {/* Users Management Section */}
      <div className="sidebar-section">
        <h3>Gestion des Utilisateurs</h3>
        <ul>
          <li><a onClick={() => handleMenuClick('Utilisateurs')}><FaUsers /> Utilisateurs</a></li>
          <li><a onClick={() => handleMenuClick('Rôles et Permissions')}><FaUsers /> Rôles et Permissions</a></li>
          <li><a onClick={() => handleMenuClick('Feedbacks')}><FaCommentDots /> Feedbacks</a></li>
        </ul>
      </div>

      {/* Bookings Management Section */}
      <div className="sidebar-section">
        <h3>Gestion des Réservations</h3>
        <ul>
          <li><a onClick={() => handleMenuClick('Réservations')}><FaCalendarAlt /> Réservations</a></li>
          <li><a onClick={() => handleMenuClick('Annulations')}><FaBan /> Annulations</a></li>
        </ul>
      </div>

      {/* Reports Section */}
      <div className="sidebar-section">
        <h3>Rapports et Documentation</h3>
        <ul>
          <li><a onClick={() => handleMenuClick('Rapports')}><FaFileAlt /> Rapports</a></li>
          <li><a onClick={() => handleMenuClick('Documentation')}><FaFileAlt /> Documentation</a></li>
        </ul>
      </div>

      {/* System Settings Section */}
      <div className="sidebar-section">
        <h3>Paramètres Système</h3>
        <ul>
          <li><a onClick={() => handleMenuClick('Paramètres')}><FaCog /> Paramètres</a></li>
          <li><a onClick={() => handleMenuClick('Notifications')}><FaBell /> Notifications</a></li>
          <li><a onClick={() => handleMenuClick('Support')}><FaLifeRing /> Support</a></li>
        </ul>
      </div>

      {/* Account Section */}
      <div className="sidebar-section">
        <h3>Compte</h3>
        <ul>
          <li><a onClick={() => handleMenuClick('Profil')}><FaUsers /> Profil</a></li>
          <li><a onClick={() => handleMenuClick('Déconnexion')}><FaSignOutAlt /> Déconnexion</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
