// src/components/organisms/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[500px] w-full bg-neutral-900 overflow-hidden mb-16">
      {/* Imagen de fondo con opacidad para resaltar el texto */}
      <img 
        src="https://unsplash.com" 
        alt="Banner Gala" 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      
      {/* Contenido del Banner */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-serif mb-4 tracking-tight">
          Colección de Gala
        </h1>
        <p className="text-slate-300 text-lg md:text-xl mb-8 font-light tracking-widest uppercase">
          Elegancia atemporal para momentos inolvidables
        </p>
        <button className="bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-200 transition-all duration-300 border border-white hover:border-slate-300 shadow-lg">
          Ver Colección
        </button>
      </div>
    </div>
  );
};

export default Hero;
