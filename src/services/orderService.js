// src/services/orderService.js
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";

export const getOrdersFromFirebase = async () => {
  try {
    // Pedimos la colección 'ordenes' de la más nueva a la más vieja
    const q = query(collection(db, "ordenes"), orderBy("fecha", "desc"));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error al obtener ventas:", error);
    return [];
  }
};
