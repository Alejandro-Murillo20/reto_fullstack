// src/components/organisms/Hero.jsx
import React from 'react';

const Hero = () => {
  // Función para bajar suavemente a los productos
  const irAColeccion = () => {
    const seccionProductos = document.getElementById('nuestra-coleccion');
    if (seccionProductos) {
      seccionProductos.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[500px] w-full bg-neutral-900 overflow-hidden mb-16">
      <img 
        src="/images/banner-gala.webp" 
        alt="Alejandro Store Collection" 
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-serif mb-4 tracking-tight">
          Colección de Gala
        </h1>
        <p className="text-slate-200 text-lg md:text-xl mb-8 font-light tracking-[0.2em] uppercase">
          Elegancia atemporal para momentos inolvidables
        </p>
        
        {/* AGREGAMOS EL ONCLICK AQUÍ */}
        <button 
          onClick={irAColeccion}
          className="bg-white text-black px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-slate-200 transition-all duration-300 shadow-xl"
        >
          Ver Colección
        </button>
      </div>
    </div>
  );
};

export default Hero;
