// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [cargando, setCargando] = useState(false);
  
  // Cálculo del total para mostrar en el resumen
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const manejarPago = (e) => {
    e.preventDefault();
    setCargando(true);
    
    // Simulación de proceso de pago de lujo
    setTimeout(() => {
      alert("Pago procesado con éxito. Su pedido de Alejandro Store está en camino.");
      clearCart(); // Vaciamos la bolsa
      navigate('/'); // Redirigimos al inicio
    }, 2000);
  };

  // Si el usuario llega aquí con el carrito vacío
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-6 py-40 text-center font-serif uppercase tracking-widest text-neutral-400">
        No hay piezas seleccionadas para el pago.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-20 max-w-2xl">
      <h2 className="text-3xl font-serif mb-10 text-center tracking-tight text-neutral-900">FINALIZAR PEDIDO</h2>
      
      <form onSubmit={manejarPago} className="space-y-6 bg-white p-10 border border-neutral-100 shadow-sm">
        <div className="grid grid-cols-1 gap-8">
          
          {/* Campo: Nombre */}
          <div className="border-b border-neutral-200 focus-within:border-black transition-colors">
            <label className="block text-[9px] tracking-[0.2em] text-neutral-400 mb-1">NOMBRE COMPLETO</label>
            <input 
              required 
              type="text" 
              className="w-full pb-2 bg-transparent outline-none text-sm text-neutral-800" 
              placeholder="Ej. Emiliano Rodríguez"
            />
          </div>

          {/* Campo: Email */}
          <div className="border-b border-neutral-200 focus-within:border-black transition-colors">
            <label className="block text-[9px] tracking-[0.2em] text-neutral-400 mb-1">CORREO ELECTRÓNICO</label>
            <input 
              required 
              type="email" 
              className="w-full pb-2 bg-transparent outline-none text-sm text-neutral-800" 
              placeholder="ejemplo@correo.com"
            />
          </div>

          {/* Campo: Dirección */}
          <div className="border-b border-neutral-200 focus-within:border-black transition-colors">
            <label className="block text-[9px] tracking-[0.2em] text-neutral-400 mb-1">DIRECCIÓN DE ENTREGA</label>
            <input 
              required 
              type="text" 
              className="w-full pb-2 bg-transparent outline-none text-sm text-neutral-800" 
              placeholder="Calle, Número, Ciudad"
            />
          </div>
          
          {/* Sección de Pago Simulada */}
          <div className="mt-6 pt-6 bg-neutral-50 p-6 rounded-sm">
            <p className="text-[10px] tracking-[0.3em] text-neutral-400 mb-6 text-center italic">MÉTODO DE PAGO (SÓLO SIMULACIÓN)</p>
            <input 
              required 
              type="text" 
              placeholder="NÚMERO DE TARJETA (16 DÍGITOS)" 
              maxLength="16" 
              className="w-full p-4 border border-neutral-200 outline-none focus:border-black text-xs tracking-widest text-center" 
            />
          </div>
        </div>

        <div className="pt-8">
          <div className="flex justify-between mb-8 text-sm font-serif border-t border-neutral-100 pt-6">
            <span className="italic text-neutral-500">Inversión Total:</span>
            <span className="text-2xl not-italic font-bold text-neutral-900">${total.toFixed(2)}</span>
          </div>
          
          <button 
            disabled={cargando}
            type="submit"
            className="w-full bg-neutral-950 text-white py-5 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-neutral-800 transition-all duration-500 disabled:bg-neutral-300 shadow-xl"
          >
            {cargando ? 'PROCESANDO TRANSACCIÓN...' : 'CONFIRMAR Y PAGAR AHORA'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
