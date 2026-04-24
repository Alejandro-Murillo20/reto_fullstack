// src/pages/Home.jsx
import React, { useState } from 'react';
import Hero from '../components/organisms/Hero';
import SearchBar from '../components/molecules/SearchBar';
import { products } from '../mockdata/products';
import ProductCard from '../components/molecules/ProductCard';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // --- LÓGICA DE PAGINACIÓN ---
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const productsPerPage = 8; // Queremos 8 productos por página

  // 1. Primero filtramos por búsqueda
  const filteredProducts = products.filter((item) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  // 2. Calculamos los índices para cortar la lista
  const indexOfLastProduct = currentPage * productsPerPage; // Ejemplo: 1 * 8 = 8
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // 8 - 8 = 0
  
  // 3. Cortamos la lista original para mostrar solo 8
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // 4. Calculamos cuántas páginas hay en total
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="bg-white pb-20">
      <Hero />
      
      <div className="container mx-auto px-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <h2 
  id="nuestra-coleccion" 
  className="text-center text-3xl font-serif mb-12 text-neutral-800 tracking-widest uppercase"
>
  Nuestras Piezas
</h2>
        {/* Grid de Productos (Máximo 8 por página) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {currentProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {/* --- CONTROLES DE PAGINACIÓN --- */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 gap-4">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-4 py-2 border border-neutral-300 text-xs tracking-widest uppercase hover:bg-neutral-900 hover:text-white disabled:opacity-30 transition-colors"
            >
              Anterior
            </button>

            <span className="text-sm font-serif italic text-neutral-500">
              Página {currentPage} de {totalPages}
            </span>

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-4 py-2 border border-neutral-300 text-xs tracking-widest uppercase hover:bg-neutral-900 hover:text-white disabled:opacity-30 transition-colors"
            >
              Siguiente
            </button>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <p className="text-center text-neutral-400 mt-10 uppercase tracking-widest text-xs">
            No se encontraron piezas.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
