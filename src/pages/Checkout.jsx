// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Checkout = () => {
  const { cart, clearCart } = useCartStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [cargando, setCargando] = useState(false);
  const [datos, setDatos] = useState({ nombre: '', direccion: '', ciudad: '', tarjeta: '', exp: '', cvv: '' });
  
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const envio = 15.00; // Costo de envío simulado para realismo

  const finalizarCompra = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setCargando(true);

    const orden = {
      cliente: {
        uid: user ? user.uid : 'invitado',
        email: user ? user.email : 'anonimo@tienda.com',
        ...datos
      },
      items: cart.map(item => ({ id: item.id, title: item.title, price: item.price })),
      total: total + envio,
      fecha: serverTimestamp(),
      estado: 'procesando'
    };

    try {
      await addDoc(collection(db, "ordenes"), orden);
      alert("PAGO AUTORIZADO. Su pedido de Alejandro Store ha sido procesado con éxito.");
      clearCart();
      navigate('/');
    } catch (error) {
      alert("Error en la pasarela de pago.");
    } finally {
      setCargando(false);
    }
  };

  if (cart.length === 0) return <div className="text-center py-40 font-serif uppercase tracking-widest text-neutral-400">Su bolsa está vacía</div>;

  return (
    <div className="container mx-auto px-6 py-20 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* COLUMNA IZQUIERDA: FORMULARIO */}
        <div className="space-y-10">
          <section>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-8 border-b pb-2 border-neutral-100">1. Detalles de Envío</h2>
            <div className="grid grid-cols-1 gap-6">
              <input required placeholder="NOMBRE Y APELLIDOS" className="w-full p-3 border-b border-neutral-300 outline-none focus:border-black text-xs tracking-widest" onChange={(e) => setDatos({...datos, nombre: e.target.value})} />
              <input required placeholder="DIRECCIÓN DE ENTREGA" className="w-full p-3 border-b border-neutral-300 outline-none focus:border-black text-xs tracking-widest" onChange={(e) => setDatos({...datos, direccion: e.target.value})} />
              <input required placeholder="CIUDAD" className="w-full p-3 border-b border-neutral-300 outline-none focus:border-black text-xs tracking-widest" onChange={(e) => setDatos({...datos, ciudad: e.target.value})} />
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-8 border-b pb-2 border-neutral-100">2. Método de Pago</h2>
            <div className="bg-neutral-50 p-6 space-y-6 border border-neutral-100">
              <div className="flex gap-2 mb-4 italic text-[10px] text-neutral-400">PAGOS SEGUROS CIFRADOS SSL</div>
              <input required placeholder="NÚMERO DE TARJETA" maxLength="16" className="w-full p-3 bg-white border border-neutral-200 outline-none focus:border-black text-xs tracking-[0.2em]" onChange={(e) => setDatos({...datos, tarjeta: e.target.value})} />
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="MM/AA" className="w-full p-3 bg-white border border-neutral-200 outline-none focus:border-black text-xs" onChange={(e) => setDatos({...datos, exp: e.target.value})} />
                <input required placeholder="CVV" maxLength="3" className="w-full p-3 bg-white border border-neutral-200 outline-none focus:border-black text-xs" onChange={(e) => setDatos({...datos, cvv: e.target.value})} />
              </div>
            </div>
          </section>
        </div>

        {/* COLUMNA DERECHA: RESUMEN DE COMPRA */}
        <div className="bg-neutral-900 text-white p-10 h-fit sticky top-32">
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase mb-10 border-b border-neutral-800 pb-4 text-slate-400">Resumen de Orden</h2>
          
          <div className="space-y-6 mb-10 max-h-60 overflow-y-auto pr-4">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between items-center text-[11px] tracking-widest">
                <span className="uppercase">{item.title}</span>
                <span className="font-bold text-slate-300">${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4 border-t border-neutral-800 pt-6 text-[11px] tracking-widest uppercase">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Envío Express</span>
              <span>${envio.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-serif border-t border-neutral-800 pt-4 mt-4 text-white">
              <span className="italic">Total Final</span>
              <span className="font-bold text-slate-200">${(total + envio).toFixed(2)}</span>
            </div>
          </div>

          <button 
            onClick={finalizarCompra}
            disabled={cargando}
            className="w-full mt-10 bg-white text-black py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-slate-200 transition-all disabled:bg-neutral-600"
          >
            {cargando ? 'VALIDANDO TRANSACCIÓN...' : 'FINALIZAR Y PAGAR'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
