// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Importación de Componentes Globales
import Navbar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';
import Notification from './components/atoms/Notification';
import ScrollToTop from './components/atoms/ScrollToTop'; // <-- Componente para suavizar el scroll

// 2. Importación de Páginas
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Auth from './pages/Auth';
import Admin from './pages/Admin';

// 3. Importación del Store
import { useCartStore } from './store/useCartStore';

function App() {
  const { showNotification, hideNotification } = useCartStore();

  return (
    <Router>
      {/* 
        ScrollToTop debe estar dentro del Router para detectar los cambios de página.
        Asegura que el usuario siempre inicie arriba al cambiar de sección.
      */}
      <ScrollToTop />

      <div className="min-h-screen bg-white font-sans flex flex-col relative">
        
        {/* Notificación de éxito al agregar piezas */}
        {showNotification && (
          <Notification 
            message="Pieza añadida a la bolsa" 
            onClose={hideNotification} 
          />
        )}
        
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
