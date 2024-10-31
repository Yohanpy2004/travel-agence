// app/context/MenuContext.js
"use client"
import React, { createContext, useState, useContext } from 'react';

// Création du contexte
const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  return (
    <MenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte du menu
export const useMenu = () => useContext(MenuContext);
