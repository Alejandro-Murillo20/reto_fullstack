// src/components/organisms/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <nav className="bg-neutral-950 text-white py-5 px-10 flex justify-between items-center border-b border-neutral-800 sticky top-0 z-50">
      {/* Logo Elegante */}
      <Link to="/" className="text-2xl font-serif tracking-widest hover:text-slate-300 transition">
        ALEJANDRO <span className="font-light text-slate-400">STORE</span>
      </Link>
      
      <div className="flex items-center gap-8">
        <Link to="/" className="text-sm uppercase tracking-wider hover:text-slate-400">Inicio</Link>
        
        {/* Carrito con estilo plateado */}
        <Link to="/cart" className="relative flex items-center gap-2 group">
          <span className="text-xl group-hover:scale-110 transition">🛒</span>
          <span className="bg-slate-200 text-black text-[10px] font-bold px-2 py-0.5 rounded-full absolute -top-2 -right-3 shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
