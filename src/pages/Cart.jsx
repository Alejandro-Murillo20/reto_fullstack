// src/pages/Cart.jsx
import React from 'react';
import { useCartStore } from '../store/useCartStore';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Traemos los productos guardados y las funciones para editar el carrito
  const { cart, clearCart, removeFromCart } = useCartStore();

  // Cálculo del total
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <h1 className="text-4xl font-serif text-neutral-900 mb-10 tracking-tight">Tu Bolsa de Compra</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20 border-t border-neutral-100">
          <p className="text-neutral-400 font-serif italic mb-8">Su bolsa está actualmente vacía.</p>
          <Link to="/" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-black pb-1 hover:text-slate-400 hover:border-slate-400 transition">
            Volver a la Colección
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Lista de productos en el carrito */}
          <div className="border-t border-neutral-100">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-6 border-b border-neutral-50 (x2)0 flex items-center gap-6">
                <img src={item.image} alt={item.title} className="w-20 h-24 object-cover bg-neutral-100" />
                <div>
                  <h3 className="font-serif text-lg text-neutral-800">{item.title}</h3>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest">{item.category}</p>
                  <p className="text-slate-500 mt-1">${item.price.toFixed(2)}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-[10px] uppercase tracking-widest text-red-800 hover:text-red-500 transition"
                >
                  Quitar
                </button>
              </div>
            ))}
          </div>

          {/* Resumen y Total */}
          <div className="bg-neutral-50 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-1">Total del Pedido</p>
              <h3 className="text-3xl font-serif text-neutral-900">${total.toFixed(2)}</h3>
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <button 
                onClick={clearCart}
                className="flex-1 md:flex-none border border-neutral-300 px-6 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-neutral-100 transition"
              >
                Vaciar Bolsa
              </button>
              <button className="flex-1 md:flex-none bg-neutral-950 text-white px-10 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-neutral-800 shadow-xl transition">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
