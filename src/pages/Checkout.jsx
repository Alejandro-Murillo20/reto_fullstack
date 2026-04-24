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
    
    // Simulamos un tiempo de procesamiento de pago
    setTimeout(() => {
      alert("Pago procesado con éxito. Gracias por elegir Alejandro Store.");
      clearCart(); // Vaciamos la bolsa
      navigate('/'); // Volvemos al inicio
    }, 2000);
  };

  if (cart.length === 0) return <div className="text-center mt-20 font-serif">Su bolsa está vacía</div>;

  return (
    <div className="container mx-auto px-6 py-20 max-w-2xl">
      <h2 className="text-3xl font-serif mb-10 text-center tracking-tight">Finalizar Pedido</h2>
      
      <form onSubmit={manejarPago} className="space-y-6 bg-white p-8 border border-neutral-100 shadow-sm">
        <div className="grid grid-cols-1 gap-6">
          {/* Información de Envío */}
          <input required type="text" placeholder="NOMBRE COMPLETO" className="w-full p-3 border-b border-neutral-200 outline-none focus:border-black text-xs tracking-widest uppercase" />
          <input required type="email" placeholder="CORREO ELECTRÓNICO" className="w-full p-3 border-b border-neutral-200 outline-none focus:border-black text-xs tracking-widest uppercase" />
          <input required type="text" placeholder="DIRECCIÓN DE ENTREGA" className="w-full p-3 border-b border-neutral-200 outline-none focus:border-black text-xs tracking-widest uppercase" />
          
          {/* Simulación de Pago */}
          <div className="mt-6 pt-6 border-t border-neutral-100">
            <p className="text-[10px] tracking-[0.3em] text-neutral-400 mb-4 uppercase text-center">Detalles de Pago (Simulado)</p>
            <input required type="text" placeholder="NÚMERO DE TARJETA" maxLength="16" className="w-full p-3 border border-neutral-200 outline-none focus:border-black text-xs tracking-widest" />
          </div>
        </div>

        <div className="pt-6">
          <div className="flex justify-between mb-6 text-sm font-serif italic">
            <span>Total a pagar:</span>
            <span className="text-xl not-italic font-bold">${total.toFixed(2)}</span>
          </div>
          
          <button 
            disabled={cargando}
            type="submit"
            className="w-full bg-neutral-950 text-white py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition disabled:bg-neutral-400"
          >
            {cargando ? 'PROCESANDO...' : 'CONFIRMAR Y PAGAR'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
