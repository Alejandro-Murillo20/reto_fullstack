import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../mockdata/products';
import { useCartStore } from '../store/useCartStore';

const ProductDetail = () => {
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div className="text-center mt-20 font-serif">Producto no encontrado</div>;

  return (
    <div className="container mx-auto px-6 py-20 max-w-6xl">
      <Link to="/" className="text-xs tracking-widest uppercase text-neutral-400 hover:text-black transition">
        ← Volver a la colección
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10">
        <div className="bg-neutral-100 p-4">
          <img src={product.image} alt={product.title} className="w-full h-auto object-cover shadow-2xl" />
        </div>
        
        <div className="flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-2">{product.category}</span>
          <h1 className="text-4xl font-serif text-neutral-900 mb-6">{product.title}</h1>
          <p className="text-neutral-800 leading-relaxed mb-8 text-base">
  {product.description}
</p>
          <p className="text-3xl font-light text-slate-500 mb-10">${product.price.toFixed(2)}</p>
          
          <button 
            onClick={() => addToCart(product)}
            className="bg-neutral-950 text-white py-5 px-10 text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition shadow-xl"
          >
            Añadir a la Bolsa de Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
