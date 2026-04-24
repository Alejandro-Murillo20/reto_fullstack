// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [cargando, setCargando] = useState(false);
  
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const manejarPago = (e) => {
    e.preventDefault();
    setCargando(true);
    
    // Simulación de procesamiento de pago
    setTimeout(() => {
      alert("Pago procesado con éxito. Su pedido de Alejandro Store está en camino.");
      clearCart();
      navigate('/');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-6 py-40 text-center font-serif uppercase tracking-widest text-neutral-500">
        No hay piezas seleccionadas para el pago.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-20 max-w-2xl">
      <h2 className="text-3xl font-serif mb-10 text-center tracking-tight text-neutral-900">FINALIZAR PEDIDO</h2>
      
      <form onSubmit={manejarPago} className="space-y-6 bg-white p-10 border border-neutral-200 shadow-sm">
        <div className="grid grid-cols-1 gap-10">
          
          {/* Campo: Nombre */}
          <div className="border-b border-neutral-400 focus-within:border-black transition-colors">
            <label className="block text-[11px] tracking-[0.2em] text-black font-bold mb-2">NOMBRE COMPLETO</label>
            <input 
              required 
              type="text" 
              className="w-full pb-2 bg-transparent outline-none text-base text-neutral-900 placeholder:text-neutral-300" 
              placeholder="Ej. Emiliano Rodríguez"
            />
          </div>

          {/* Campo: Email */}
          <div className="border-b border-neutral-400 focus-within:border-black transition-colors">
            <label className="block text-[11px] tracking-[0.2em] text-black font-bold mb-2">CORREO ELECTRÓNICO</label>
            <input 
              required 
              type="email" 
              className="w-full pb-2 bg-transparent outline-none text-base text-neutral-900 placeholder:text-neutral-300" 
              placeholder="ejemplo@correo.com"
            />
          </div>

          {/* Campo: Dirección */}
          <div className="border-b border-neutral-400 focus-within:border-black transition-colors">
            <label className="block text-[11px] tracking-[0.2em] text-black font-bold mb-2">DIRECCIÓN DE ENTREGA</label>
            <input 
              required 
              type="text" 
              className="w-full pb-2 bg-transparent outline-none text-base text-neutral-900 placeholder:text-neutral-300" 
              placeholder="Calle, Número, Ciudad"
            />
          </div>
          
          {/* Simulación de Pago */}
          <div className="mt-4 pt-8 bg-neutral-50 p-6 border border-neutral-100">
            <p className="text-[10px] tracking-[0.3em] text-neutral-500 mb-6 text-center font-bold uppercase">Detalles de Pago (Simulado)</p>
            <input 
              required 
              type="text" 
              placeholder="NÚMERO DE TARJETA (16 DÍGITOS)" 
              maxLength="16" 
              className="w-full p-4 border border-neutral-300 outline-none focus:border-black text-sm tracking-[0.2em] text-center bg-white text-black" 
            />
          </div>
        </div>

        <div className="pt-8">
          <div className="flex justify-between mb-8 text-base font-serif border-t border-neutral-200 pt-8">
            <span className="italic text-neutral-600 font-medium">Inversión Total:</span>
            <span className="text-3xl not-italic font-bold text-black">${total.toFixed(2)}</span>
          </div>
          
          <button 
            disabled={cargando}
            type="submit"
            className="w-full bg-black text-white py-5 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-neutral-800 transition-all duration-300 disabled:bg-neutral-400 shadow-xl"
          >
            {cargando ? 'PROCESANDO TRANSACCIÓN...' : 'CONFIRMAR Y PAGAR AHORA'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
