// src/components/organisms/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore'; // <--- ESTA ES LA LÍNEA QUE FALTA
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
    <nav className="bg-neutral-950 text-white py-5 px-10 flex justify-between items-center border-b border-neutral-800 sticky top-0 z-50">
      <Link to="/" className="text-2xl font-serif tracking-widest">
        ALEJANDRO <span className="font-light text-slate-400">STORE</span>
      </Link>
      
      <div className="flex items-center gap-8 text-[10px] tracking-[0.2em] uppercase font-bold">
        <Link to="/" className="hover:text-slate-400">Inicio</Link>
        
        {user ? (
          <div className="flex items-center gap-4 border-l border-neutral-700 pl-4">
            <span className="text-slate-400 lowercase font-normal">{user.email}</span>
            <button onClick={manejarLogout} className="hover:text-red-400 transition">Salir</button>
          </div>
        ) : (
          <Link to="/auth" className="hover:text-slate-400">Ingresar</Link>
        )}

        <Link to="/cart" className="relative group">
          <span className="text-xl">🛒</span>
          <span className="bg-white text-black text-[10px] px-1.5 rounded-full absolute -top-2 -right-3">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;