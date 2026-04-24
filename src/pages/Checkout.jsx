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
  const [datos, setDatos] = useState({ nombre: '', direccion: '', telefono: '' });
  
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const finalizarCompra = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setCargando(true);

    // Creamos el objeto de la orden de gala
    const orden = {
      cliente: {
        uid: user ? user.uid : 'invitado',
        email: user ? user.email : 'anonimo@tienda.com',
        nombre: datos.nombre,
        direccion: datos.direccion,
        telefono: datos.telefono
      },
      items: cart.map(item => ({ id: item.id, title: item.title, price: item.price })),
      total: total,
      fecha: serverTimestamp(),
      estado: 'pagado'
    };

    try {
      // Guardamos en Firebase Firestore
      await addDoc(collection(db, "ordenes"), orden);
      alert("¡PEDIDO CONFIRMADO! Gracias por su confianza en Alejandro Store.");
      clearCart();
      navigate('/');
    } catch (error) {
      console.error("Error al procesar:", error);
      alert("Hubo un fallo en la conexión con el servidor.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-20 max-w-2xl text-neutral-900">
      <h2 className="text-3xl font-serif mb-10 text-center tracking-tight">FINALIZAR PEDIDO</h2>
      <form onSubmit={finalizarCompra} className="space-y-6 bg-white p-10 border border-neutral-200 shadow-sm">
        <input required placeholder="NOMBRE COMPLETO" className="w-full p-3 border-b border-neutral-300 outline-none focus:border-black text-xs tracking-widest uppercase" onChange={(e) => setDatos({...datos, nombre: e.target.value})} />
        <input required placeholder="DIRECCIÓN DE ENTREGA" className="w-full p-3 border-b border-neutral-300 outline-none focus:border-black text-xs tracking-widest uppercase" onChange={(e) => setDatos({...datos, direccion: e.target.value})} />
        <input required placeholder="TELÉFONO" className="w-full p-3 border-b border-neutral-300 outline-none focus:border-black text-xs tracking-widest uppercase" onChange={(e) => setDatos({...datos, telefono: e.target.value})} />
        
        <div className="pt-8 flex justify-between items-center border-t border-neutral-100">
          <span className="font-serif italic">Total Inversión:</span>
          <span className="text-2xl font-bold">${total.toFixed(2)}</span>
        </div>
        <button disabled={cargando} className="w-full bg-black text-white py-5 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-neutral-800 transition disabled:bg-neutral-400">
          {cargando ? 'PROCESANDO...' : 'CONFIRMAR Y PAGAR'}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
