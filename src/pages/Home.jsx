// src/pages/Home.jsx
import React, { useState } from 'react';
import Hero from '../components/organisms/Hero';
import SearchBar from '../components/molecules/SearchBar';
import CategoryFilters from '../components/molecules/CategoryFilters'; // Importamos los filtros
import { products } from '../mockdata/products';
import ProductCard from '../components/molecules/ProductCard';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('todos');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // 1. Lógica de Filtrado Doble (Nombre + Categoría)
  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'todos' || item.category === category;
    return matchesSearch && matchesCategory;
  });

  // 2. Extraer categorías únicas para los botones
  const uniqueCategories = [...new Set(products.map((p) => p.category))];

  // 3. Paginación sobre los productos ya filtrados
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="bg-white pb-20">
      <Hero />
      
      <div className="container mx-auto px-4">
        {/* Buscador */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Filtros de Categoría */}
        <CategoryFilters 
          categories={uniqueCategories} 
          activeCategory={category} 
          onSelectCategory={(cat) => {
            setCategory(cat);
            setCurrentPage(1); // Resetear a pág 1 al filtrar
          }} 
        />

        <h2 id="nuestra-coleccion" className="text-center text-3xl font-serif mb-12 text-neutral-800 tracking-widest uppercase">
          Nuestras Piezas
        </h2>
        
        {/* Grid de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {currentProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 gap-4">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-4 py-2 border border-neutral-300 text-[10px] tracking-widest uppercase hover:bg-neutral-900 hover:text-white disabled:opacity-30 transition-colors"
            >
              Anterior
            </button>
            <span className="text-xs font-serif italic text-neutral-500">
              Página {currentPage} de {totalPages}
            </span>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-4 py-2 border border-neutral-300 text-[10px] tracking-widest uppercase hover:bg-neutral-900 hover:text-white disabled:opacity-30 transition-colors"
            >
              Siguiente
            </button>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <p className="text-center text-neutral-400 mt-10 uppercase tracking-widest text-[10px]">
            No se encontraron piezas en esta selección.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
