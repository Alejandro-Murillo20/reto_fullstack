// src/components/molecules/CategoryFilters.jsx
import React from 'react';

const CategoryFilters = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {/* Botón para resetear filtros */}
      <button
        onClick={() => onSelectCategory('todos')}
        className={`px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 border ${
          activeCategory === 'todos'
            ? 'bg-neutral-900 text-white border-neutral-900'
            : 'bg-white text-neutral-400 border-neutral-200 hover:border-neutral-900 hover:text-neutral-900'
        }`}
      >
        Todos
      </button>

      {/* Botones dinámicos por categoría */}
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 border ${
            activeCategory === cat
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white text-neutral-400 border-neutral-200 hover:border-neutral-900 hover:text-neutral-900'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
