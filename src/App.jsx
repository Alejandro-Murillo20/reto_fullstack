// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Importación de Componentes Globales
import Navbar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';
import Notification from './components/atoms/Notification';

// 2. Importación de Páginas
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Auth from './pages/Auth'; // <-- Nueva importación para registro/login

// 3. Importación del Store
import { useCartStore } from './store/useCartStore';

function App() {
  const { showNotification, hideNotification } = useCartStore();

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans flex flex-col relative">
        
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
            
            {/* 4. RUTA REGISTRADA: Página de Autenticación */}
            <Route path="/auth" element={<Auth />} />
            
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
