import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link
import { useCartStore } from '../../store/useCartStore';

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="group bg-white p-4 transition-all duration-500 border border-transparent hover:border-neutral-100">
      {/* Enlace en la imagen */}
      <Link to={`/product/${product.id}`} className="overflow-hidden mb-4 bg-neutral-100 aspect-[3/4] block">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        />
      </Link>

      <div className="text-center">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1">{product.category}</p>
        
        {/* Enlace en el título */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-serif text-neutral-800 mb-2 h-10 overflow-hidden px-2 hover:text-slate-500 transition">
            {product.title}
          </h3>
        </Link>
        
        <p className="text-slate-500 font-medium text-lg mb-4">
          ${product.price.toFixed(2)}
        </p>

        <button 
          onClick={() => addToCart(product)}
          className="w-full border border-neutral-800 py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-neutral-900 hover:text-white transition-colors duration-300"
        >
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
