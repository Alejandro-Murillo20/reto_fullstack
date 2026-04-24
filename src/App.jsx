// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Notification from './components/atoms/Notification'; // 1. Importar
import { useCartStore } from './store/useCartStore'; // 2. Importar Store

function App() {
  const { showNotification, hideNotification } = useCartStore(); // 3. Traer estados

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans flex flex-col">
        {/* 4. Si showNotification es true, mostramos el mensaje */}
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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
