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
  const envio = 15.00;

  const finalizarCompra = async (e) => {
    e.preventDefault(); // Detiene la recarga de página
    if (cart.length === 0) return;
    
    setCargando(true);

    const orden = {
      cliente: {
        uid: user ? user.uid : 'invitado',
        email: user ? user.email : 'anonimo@tienda.com',
        nombre: datos.nombre,
        direccion: datos.direccion,
        ciudad: datos.ciudad
      },
      items: cart.map(item => ({ id: item.id, title: item.title, price: item.price })),
      total: total + envio,
      fecha: serverTimestamp(),
      estado: 'procesando'
    };

    try {
      // Guardar en Firestore
      await addDoc(collection(db, "ordenes"), orden);
      alert("PAGO AUTORIZADO. Su pedido de Alejandro Store ha sido procesado con éxito.");
      clearCart();
      navigate('/');
    } catch (error) {
      console.error("Error Firebase:", error);
      alert("Error en la pasarela de pago. Intente nuevamente.");
    } finally {
      setCargando(false);
    }
  };

  if (cart.length === 0) return <div className="text-center py-40 font-serif uppercase tracking-widest text-neutral-400">Su bolsa está vacía</div>;

  return (
    <div className="container mx-auto px-6 py-20 max-w-6xl">
      {/* TODO el contenido envuelto en el FORM para que el botón funcione */}
      <form onSubmit={finalizarCompra}> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* COLUMNA IZQUIERDA: DATOS DEL CLIENTE */}
          <div className="space-y-10 text-neutral-900">
            <section>
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-8 border-b pb-2 border-neutral-100">1. Detalles de Envío</h2>
              <div className="grid grid-cols-1 gap-8">
                <div className="border-b border-neutral-300 focus-within:border-black transition-colors">
                  <label className="block text-[10px] font-bold text-black mb-1">NOMBRE Y APELLIDOS</label>
                  <input required type="text" className="w-full pb-2 outline-none bg-transparent text-sm" placeholder="Ej. Emiliano Rodríguez" onChange={(e) => setDatos({...datos, nombre: e.target.value})} />
                </div>
                <div className="border-b border-neutral-300 focus-within:border-black transition-colors">
                  <label className="block text-[10px] font-bold text-black mb-1">DIRECCIÓN DE ENTREGA</label>
                  <input required type="text" className="w-full pb-2 outline-none bg-transparent text-sm" placeholder="Calle, Número, Apto" onChange={(e) => setDatos({...datos, direccion: e.target.value})} />
                </div>
                <div className="border-b border-neutral-300 focus-within:border-black transition-colors">
                  <label className="block text-[10px] font-bold text-black mb-1">CIUDAD</label>
                  <input required type="text" className="w-full pb-2 outline-none bg-transparent text-sm" placeholder="Ciudad de destino" onChange={(e) => setDatos({...datos, ciudad: e.target.value})} />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-8 border-b pb-2 border-neutral-100">2. Método de Pago</h2>
              <div className="bg-neutral-50 p-8 space-y-6 border border-neutral-100">
                <p className="text-[10px] tracking-[0.2em] text-neutral-400 italic mb-4">TRANSACCIÓN SEGURA SSL</p>
                <input required placeholder="NÚMERO DE TARJETA" maxLength="16" className="w-full p-4 bg-white border border-neutral-200 outline-none focus:border-black text-xs tracking-[0.2em]" onChange={(e) => setDatos({...datos, tarjeta: e.target.value})} />
                <div className="grid grid-cols-2 gap-4">
                  <input required placeholder="MM/AA" maxLength="5" className="w-full p-4 bg-white border border-neutral-200 outline-none focus:border-black text-xs" onChange={(e) => setDatos({...datos, exp: e.target.value})} />
                  <input required placeholder="CVV" maxLength="3" className="w-full p-4 bg-white border border-neutral-200 outline-none focus:border-black text-xs" onChange={(e) => setDatos({...datos, cvv: e.target.value})} />
                </div>
              </div>
            </section>
          </div>

          {/* COLUMNA DERECHA: RESUMEN Y BOTÓN (DENTRO DEL FORM) */}
          <div className="bg-neutral-900 text-white p-10 h-fit lg:sticky lg:top-32">
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase mb-10 border-b border-neutral-800 pb-4 text-slate-400">Resumen de Orden</h2>
            
            <div className="space-y-6 mb-10 max-h-60 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-neutral-700">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between items-center text-[11px] tracking-widest">
                  <span className="uppercase">{item.title}</span>
                  <span className="font-bold text-slate-300">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t border-neutral-800 pt-6 text-[11px] tracking-widest uppercase text-slate-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Envío Express</span>
                <span className="text-white">${envio.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-serif border-t border-neutral-800 pt-6 mt-6 text-white italic">
                <span>Total Final</span>
                <span className="font-bold not-italic text-slate-200">${(total + envio).toFixed(2)}</span>
              </div>
            </div>

            {/* BOTÓN SUBMIT: Dispara la función finalizarCompra */}
            <button 
              type="submit"
              disabled={cargando}
              className="w-full mt-10 bg-white text-black py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-slate-200 transition-all duration-500 disabled:bg-neutral-600 shadow-2xl"
            >
              {cargando ? 'PROCESANDO TRANSACCIÓN...' : 'CONFIRMAR Y PAGAR AHORA'}
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Checkout;
