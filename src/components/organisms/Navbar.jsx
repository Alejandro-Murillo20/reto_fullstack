// src/components/organisms/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';
import { useAuthStore } from '../../store/useAuthStore'; // Importamos el store de usuarios
import { auth as firebaseAuth } from '../../firebase/config';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  const { user, logout } = useAuthStore(); // Traemos al usuario y la función de salir

  const manejarLogout = () => {
    signOut(firebaseAuth);
    logout();
  };

  return (
    <nav className="bg-neutral-950 text-white py-5 px-10 flex justify-between items-center border-b border-neutral-800 sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-serif tracking-widest hover:text-slate-300 transition">
        ALEJANDRO <span className="font-light text-slate-400">STORE</span>
      </Link>
      
      <div className="flex items-center gap-8 text-[10px] tracking-[0.2em] uppercase font-bold">
        <Link to="/" className="hover:text-slate-400 transition">Inicio</Link>
        
        {/* LÓGICA DE USUARIO Y BOTÓN ADMIN */}
        {user ? (
          <div className="flex items-center gap-6 border-l border-neutral-800 pl-6">
            <span className="text-slate-500 lowercase font-normal tracking-normal">{user.email}</span>
            
            {/* Botón Admin con estilo plateado */}
            <Link 
              to="/admin" 
              className="text-slate-200 border border-neutral-700 px-3 py-1 rounded hover:bg-white hover:text-black transition-all duration-300"
            >
              Admin
            </Link>

            <button 
              onClick={manejarLogout} 
              className="text-red-800 hover:text-red-500 transition uppercase tracking-widest"
            >
              Salir
            </button>
          </div>
        ) : (
          <Link to="/auth" className="hover:text-slate-400 transition">Ingresar</Link>
        )}

        {/* Carrito */}
        <Link to="/cart" className="relative group ml-4">
          <span className="text-xl group-hover:scale-110 transition block">🛒</span>
          <span className="bg-white text-black text-[9px] px-1.5 py-0.5 rounded-full absolute -top-2 -right-3 font-bold">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
