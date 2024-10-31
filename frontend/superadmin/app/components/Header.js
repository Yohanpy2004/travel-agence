"use client";
import React from 'react';
import './Header.css'; // Importez le CSS pour le Header

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      <h1>Tableau de Bord Super Admin</h1>
    </header>
  );
};

export default Header;
