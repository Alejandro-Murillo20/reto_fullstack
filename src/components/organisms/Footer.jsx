// src/components/organisms/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    // bg-black asegura el fondo más oscuro posible para que el texto resalte
    <footer className="bg-black text-white py-16 mt-20 border-t border-neutral-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Columna 1: Marca */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-serif tracking-widest uppercase">
            ALEJANDRO <span className="font-light text-neutral-400">STORE</span>
          </h3>
          {/* DESCRIPCIÓN: Cambiada a text-neutral-100 (Blanco casi puro) */}
          <p className="text-[12px] leading-relaxed tracking-widest uppercase italic text-neutral-100 font-medium">
            Elegancia y distinción en cada costura. 
            La boutique líder en moda formal.
          </p>
        </div>

        {/* Columna 2: Desarrollador */}
        <div className="space-y-4">
          <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase border-b border-neutral-800 pb-2 w-fit">Desarrollado por</h4>
          <ul className="text-[13px] space-y-2 tracking-widest uppercase font-bold text-white">
            <li>ALEJANDRO</li>
            <li className="text-neutral-300 font-medium">PROYECTO FINAL E-COMMERCE</li>
            <li className="text-neutral-300 font-medium">2026</li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="space-y-4">
  <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase border-b border-neutral-700 pb-2 w-fit">
    Contacto
  </h4>
  
  {/* CORREO ELECTRÓNICO: Máxima visibilidad */}
  <p className="text-[14px] md:text-[13px] tracking-[0.1em] text-white font-black block mt-4">
    JAMER153@OUTLOOK.COM
  </p>

  <div className="flex gap-4 pt-4">
    <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white font-bold hover:bg-white hover:text-black transition-all cursor-pointer">
      IG
    </div>
    <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white font-bold hover:bg-white hover:text-black transition-all cursor-pointer">
      FB
    </div>
  </div>
</div>

      </div>

      {/* Barra de Copyright inferior */}
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* DERECHOS RESERVADOS: Cambiados a text-neutral-200 y fuente más gruesa */}
        <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-200 font-semibold">
          © {new Date().getFullYear()} ALEJANDRO STORE - TODOS LOS DERECHOS RESERVADOS.
        </p>
        <p className="text-[11px] tracking-[0.3em] uppercase text-white font-black">
          DESIGNED BY EMILIANO
        </p>
      </div>
    </footer>
  );
};

export default Footer;

