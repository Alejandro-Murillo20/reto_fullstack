// src/store/useCartStore.js
import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],
  // Acción para añadir un traje o accesorio
  addToCart: (product) => 
    set((state) => ({ cart: [...state.cart, product] })),
  // Acción para vaciar el carrito tras una compra
  clearCart: () => set({ cart: [] }),
  // Acción para eliminar una prenda específica
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
}));
