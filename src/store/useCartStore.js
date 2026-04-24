// src/store/useCartStore.js
import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],
  showNotification: false, // Estado para saber si mostrar el mensaje

  addToCart: (product) => {
    set((state) => ({ 
      cart: [...state.cart, product],
      showNotification: true // Activamos la notificación al agregar
    }));
  },

  // Función para ocultar el mensaje
  hideNotification: () => set({ showNotification: false }),

  clearCart: () => set({ cart: [] }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
}));
