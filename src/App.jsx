// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Importación de Componentes Globales (Organisms y Atoms)
import Navbar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';
import Notification from './components/atoms/Notification';

// 2. Importación de Páginas
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

// 3. Importación del "Cerebro" (Store) para las notificaciones
import { useCartStore } from './store/useCartStore';

function App() {
  // Traemos el estado de la notificación desde el Store
  const { showNotification, hideNotification } = useCartStore();

  return (
    <Router>
      {/* 
        Contenedor Principal: 
        'flex-col' y 'min-h-screen' aseguran que el Footer siempre esté al fondo 
      */}
      <div className="min-h-screen bg-white font-sans flex flex-col relative">
        
        {/* Muestra el mensaje de éxito solo cuando se agrega un producto */}
        {showNotification && (
          <Notification 
            message="Pieza añadida a la bolsa" 
            onClose={hideNotification} 
          />
        )}
        
        {/* Barra de navegación superior */}
        <Navbar />
        
        {/* 
          Cuerpo de la aplicación:
          'flex-grow' hace que este espacio se estire para ocupar la pantalla 
        */}
        <main className="flex-grow">
          <Routes>
            {/* Ruta: Inicio (Colección de 16 productos) */}
            <Route path="/" element={<Home />} />

            {/* Ruta: Detalle del Producto */}
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Ruta: Bolsa de Compra */}
            <Route path="/cart" element={<Cart />} />

            {/* Ruta: Formulario de Pago y Envío */}
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>

        {/* Pie de página con tus datos de desarrollador */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
