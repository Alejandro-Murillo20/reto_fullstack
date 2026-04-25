// src/components/organisms/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';
import { useAuthStore } from '../../store/useAuthStore';
import { auth as firebaseAuth } from '../../firebase/config';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  const { user, logout } = useAuthStore();

  const manejarLogout = () => {
    signOut(firebaseAuth);
    logout();
  };

  return (
    <nav className="bg-neutral-950 text-white py-5 px-4 md:px-10 flex justify-between items-center border-b border-neutral-800 sticky top-0 z-50">
      {/* Logo: Reducimos un poco el tamaño en móvil para ganar espacio */}
      <Link to="/" className="text-lg md:text-2xl font-serif tracking-widest hover:text-slate-300 transition">
        ALEJANDRO <span className="font-light text-slate-400">STORE</span>
      </Link>
      
      <div className="flex items-center gap-4 md:gap-8 text-[9px] md:text-[10px] tracking-[0.1em] md:tracking-[0.2em] uppercase font-bold">
        <Link to="/" className="hidden sm:block hover:text-slate-400 transition">Inicio</Link>
        
        {user ? (
          <div className="flex items-center gap-3 md:gap-6 border-l border-neutral-800 pl-4 md:pl-6">
            {/* CORREO: 'hidden' en móvil, 'md:block' en pantallas medianas/grandes */}
            <span className="hidden md:block text-slate-500 lowercase font-normal tracking-normal">
              {user.email}
            </span>
            
            <Link 
              to="/admin" 
              className="text-slate-200 border border-neutral-700 px-2 md:px-3 py-1 rounded hover:bg-white hover:text-black transition-all duration-300"
            >
              Admin
            </Link>

            <button 
              onClick={manejarLogout} 
              className="text-red-800 hover:text-red-500 transition uppercase"
            >
              {/* En móvil dice 'X', en PC dice 'Salir' */}
              <span className="md:hidden">X</span>
              <span className="hidden md:block">Salir</span>
            </button>
          </div>
        ) : (
          <Link to="/auth" className="hover:text-slate-400 transition">Ingresar</Link>
        )}

        {/* Carrito */}
        <Link to="/cart" className="relative group">
          <span className="text-lg md:text-xl group-hover:scale-110 transition block">🛒</span>
          <span className="bg-white text-black text-[8px] md:text-[9px] px-1.5 py-0.5 rounded-full absolute -top-2 -right-3 font-bold shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
