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
import Auth from './pages/Auth';
import Admin from './pages/Admin'; // <-- Importación del Administrador

// 3. Importación del Store (Cerebro del sitio)
import { useCartStore } from './store/useCartStore';

function App() {
  // Traemos los estados para mostrar la notificación plateada de éxito
  const { showNotification, hideNotification } = useCartStore();

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans flex flex-col relative">
        
        {/* Notificación elegante que aparece arriba a la derecha */}
        {showNotification && (
          <Notification 
            message="Pieza añadida a la bolsa" 
            onClose={hideNotification} 
          />
        )}
        
        {/* Navbar con logo de Alejandro Store */}
        <Navbar />
        
        {/* Contenido principal que cambia según la URL */}
        <main className="flex-grow">
          <Routes>
            {/* Ruta: Inicio y Catálogo */}
            <Route path="/" element={<Home />} />

            {/* Ruta: Detalle de cada prenda */}
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Ruta: Bolsa de Compra */}
            <Route path="/cart" element={<Cart />} />

            {/* Ruta: Formulario de Pago y Envío */}
            <Route path="/checkout" element={<Checkout />} />
            
            {/* Ruta: Registro e Ingreso de Usuarios (Firebase) */}
            <Route path="/auth" element={<Auth />} />

            {/* Ruta: Panel de Ventas para el Administrador */}
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        {/* Pie de página con tus datos de desarrollador */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
