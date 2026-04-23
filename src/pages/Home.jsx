// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/organisms/Hero';
import { products } from '../mockdata/products';
import ProductCard from '../components/molecules/ProductCard';

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      
      <div className="container mx-auto px-4 pb-20">
        <h2 className="text-center text-3xl font-serif mb-12 text-neutral-800">Nuestras Piezas</h2>
        
        {/* Grid de 16 productos: 1 col en móvil, 2 en tablet, 4 en PC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
