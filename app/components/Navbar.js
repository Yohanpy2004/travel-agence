// components/Navbar.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Importer useRouter pour la redirection
import './Navbar.css';

const Navbar = () => {
  const router = useRouter(); // Initialiser le router
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [role, setRole] = useState(""); // État pour le rôle de l'utilisateur

  const handleRegisterSubmit = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page

    // Logique d'inscription (exemple)
    // Remplacez ceci par votre logique d'inscription
    const isRegistered = true; // Simulez un succès d'inscription
    if (isRegistered) {
      // Rediriger en fonction du rôle choisi
      if (role === "super-admin") {
        router.push('/pages/dashboard/super-admin'); // Redirection vers le tableau de bord du Super Admin
      } else if (role === "manager") {
        router.push('/pages/dashboard/manager'); // Redirection vers le tableau de bord du Manager
      }
      // Afficher un message de succès ici si nécessaire
      setShowRegisterPopup(false); // Fermer le pop-up d'inscription
    }
  };

  const openLoginFromRegister = () => {
    setShowRegisterPopup(false);
    setShowLoginPopup(true);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/1.png" alt="Logo" />
        <span>Travelo</span>
      </div>

      <div className="navbar-links">
        <Link href="/">Accueil</Link>
        <Link href="/destinations">Destinations</Link>
        <Link href="/agences">Agences</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="navbar-auth">
        <button onClick={() => setShowRegisterPopup(true)}>S'inscrire</button>
        <button onClick={() => setShowLoginPopup(true)}>Se connecter</button>
      </div>

      {/* Pop-up d'inscription */}
      {showRegisterPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Inscription</h2>
            <form onSubmit={handleRegisterSubmit}>
              <input type="text" placeholder="Nom" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Mot de passe" required />
              <input type="password" placeholder="Confirmer le mot de passe" required />
              <select required onChange={(e) => setRole(e.target.value)}>
                <option value="">Choisir un rôle</option>
                <option value="super-admin">Super Admin</option>
                <option value="manager">Manager d'Agence</option>
              </select>
              <div className="popup-buttons">
                <button type="button" onClick={() => setShowRegisterPopup(false)}>Annuler</button>
                <button type="submit">Soumettre</button>
              </div>
            </form>
            <p className="already-registered">
              Vous êtes déjà inscrit ? <span onClick={openLoginFromRegister} className="popup-link">Se connecter</span>
            </p>
          </div>
        </div>
      )}

      {/* Pop-up de connexion */}
      {showLoginPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Connexion</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Mot de passe" required />
              <div className="popup-buttons">
                <button type="button" onClick={() => setShowLoginPopup(false)}>Annuler</button>
                <button type="submit">Soumettre</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
