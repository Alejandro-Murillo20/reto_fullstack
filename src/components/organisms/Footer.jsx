// src/components/organisms/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    // Cambiamos bg-neutral-950 por bg-black para máximo contraste
    <footer className="bg-black text-slate-300 py-16 mt-20 border-t border-neutral-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Columna 1: Marca */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-serif tracking-widest uppercase">
            ALEJANDRO <span className="font-light text-slate-400">STORE</span>
          </h3>
          <p className="text-[11px] leading-relaxed tracking-widest uppercase italic text-slate-400">
            Elegancia y distinción en cada costura. 
            La boutique líder en moda formal.
          </p>
        </div>

        {/* Columna 2: Datos del Desarrollador (Tus datos) */}
        <div className="space-y-4">
          {/* Subimos a text-white para que el título resalte */}
          <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase">Desarrollado por</h4>
          <ul className="text-[12px] space-y-2 tracking-widest uppercase">
            <li className="flex items-center gap-2 text-slate-200">
              <span className="text-slate-500">●</span> Emiliano
            </li>
            <li className="flex items-center gap-2 font-medium text-slate-200">
              <span className="text-slate-500">●</span> Proyecto Final E-Commerce
            </li>
            <li className="flex items-center gap-2 text-slate-200">
              <span className="text-slate-500">●</span> 2026
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="space-y-4">
          <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase">Contacto</h4>
          {/* El email ahora es casi blanco para que se lea perfecto */}
          <p className="text-[11px] tracking-widest text-slate-200 font-medium">SOPORTE@ALEJANDROSTORE.COM</p>
          <div className="flex gap-4 pt-2">
            <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:border-white transition cursor-pointer text-[10px]">IG</div>
            <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:border-white transition cursor-pointer text-[10px]">FB</div>
          </div>
        </div>

      </div>

      {/* Barra de Copyright inferior */}
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Cambiamos text-[9px] por text-[10px] y oscurecemos menos el gris */}
        <p className="text-[10px] tracking-[0.3em] uppercase text-slate-500">
          © {new Date().getFullYear()} ALEJANDRO STORE - TODOS LOS DERECHOS RESERVADOS.
        </p>
        <p className="text-[10px] tracking-[0.3em] uppercase text-slate-400 font-bold">
          DESIGNED BY EMILIANO
        </p>
      </div>
    </footer>
  );
};

export default Footer;

