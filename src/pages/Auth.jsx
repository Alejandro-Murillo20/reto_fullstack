// src/pages/Auth.jsx
import React, { useState } from 'react';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [esRegistro, setEsRegistro] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      const metodo = esRegistro ? createUserWithEmailAndPassword : signInWithEmailAndPassword;
      const credenciales = await metodo(auth, email, password);
      setUser(credenciales.user);
      navigate('/');
    } catch (error) {
      alert("Error en la autenticación: " + error.message);
    }
  };

  return (
    <div className="container mx-auto px-6 py-20 max-w-md">
      <h2 className="text-3xl font-serif text-center mb-10 tracking-tight uppercase">
        {esRegistro ? 'Crear Cuenta' : 'Ingresar'}
      </h2>
      <form onSubmit={manejarSubmit} className="space-y-6 bg-white p-8 border border-neutral-100 shadow-sm">
        <input 
          type="email" placeholder="CORREO ELECTRÓNICO" required
          className="w-full p-3 border-b border-neutral-200 outline-none focus:border-black text-xs tracking-widest"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" placeholder="CONTRASEÑA" required
          className="w-full p-3 border-b border-neutral-200 outline-none focus:border-black text-xs tracking-widest"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition">
          {esRegistro ? 'Registrarse' : 'Entrar'}
        </button>
      </form>
      <button 
        onClick={() => setEsRegistro(!esRegistro)}
        className="w-full mt-6 text-[10px] uppercase tracking-widest text-neutral-400 hover:text-black transition"
      >
        {esRegistro ? '¿Ya tiene cuenta? Ingrese aquí' : '¿No tiene cuenta? Regístrese aquí'}
      </button>
    </div>
  );
};

export default Auth;
