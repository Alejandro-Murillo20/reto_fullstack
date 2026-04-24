// src/pages/Admin.jsx
import React, { useEffect, useState } from 'react';
import { getOrdersFromFirebase } from '../services/orderService';

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrdersFromFirebase();
      setOrders(data);
      setLoading(false);
    };
    fetchOrders();
  }, []);

  if (loading) return <div className="text-center mt-20 font-serif uppercase tracking-widest text-neutral-400">Consultando registros...</div>;

  return (
    <div className="container mx-auto px-6 py-20 max-w-6xl">
      <h1 className="text-3xl font-serif mb-10 text-neutral-900 tracking-tight uppercase">Panel de Ventas</h1>
      <div className="overflow-hidden border border-neutral-200 bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-neutral-950 text-white text-[10px] uppercase tracking-widest">
              <th className="p-5 font-bold">Cliente</th>
              <th className="p-5 font-bold">Prendas</th>
              <th className="p-5 font-bold">Total</th>
              <th className="p-5 font-bold">Fecha</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-neutral-100 hover:bg-neutral-50 transition">
                <td className="p-5">
                  <p className="font-bold text-neutral-800 uppercase">{order.cliente.nombre}</p>
                  <p className="text-[10px] text-neutral-400 lowercase">{order.cliente.email}</p>
                </td>
                <td className="p-5">
                  {order.items.map((item, i) => (
                    <span key={i} className="text-[9px] bg-slate-100 text-slate-600 px-2 py-1 rounded-sm mr-1 uppercase font-bold tracking-tighter">
                      {item.title}
                    </span>
                  ))}
                </td>
                <td className="p-5 font-bold text-black">${order.total.toFixed(2)}</td>
                <td className="p-5 text-[10px] text-neutral-400 uppercase">
                  {order.fecha?.toDate().toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
