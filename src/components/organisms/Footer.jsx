// src/components/organisms/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 mt-20 border-t border-neutral-900">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Columna 1: Marca */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-serif tracking-widest uppercase">
            ALEJANDRO <span className="font-light text-slate-500">STORE</span>
          </h3>
          <p className="text-[10px] leading-relaxed tracking-widest uppercase italic">
            Elegancia y distinción en cada costura. 
            La boutique líder en moda formal.
          </p>
        </div>

        {/* Columna 2: Datos del Desarrollador (Tus datos) */}
        <div className="space-y-4">
          <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase">Desarrollado por</h4>
          <ul className="text-[11px] space-y-2 tracking-widest uppercase">
            <li className="flex items-center gap-2">
              <span className="text-slate-500">●</span> Alejandro Murillo.
            </li>
            <li className="flex items-center gap-2 font-medium text-slate-300">
              <span className="text-slate-500">●</span> Proyecto Final E-Commerce
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <span className="text-slate-500">●</span> 2026
            </li>
          </ul>
        </div>

        {/* Columna 3: Atención al Cliente */}
        <div className="space-y-4">
          <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase">Contacto</h4>
          <p className="text-[11px] tracking-widest">jamer.murillo@upb.edu.co</p>
          <div className="flex gap-4 pt-2">
            {/* Iconos simulados en plateado */}
            <div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-slate-400 transition cursor-pointer">IG</div>
            <div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-slate-400 transition cursor-pointer">FB</div>
          </div>
        </div>

      </div>

      {/* Barra de Copyright inferior */}
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[9px] tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} ALEJANDRO STORE - TODOS LOS DERECHOS RESERVADOS.
        </p>
        <p className="text-[9px] tracking-[0.3em] uppercase text-slate-600">
          DESIGNED BY ALEJANDRO
        </p>
      </div>
    </footer>
  );
};

export default Footer;
