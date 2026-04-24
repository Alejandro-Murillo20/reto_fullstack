// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importación de Componentes
import Navbar from './components/organisms/Navbar';

// Importación de Páginas
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart'; // 1. Importación agregada

function App() {
  return (
    <Router>
      {/* Contenedor principal con Flexbox para manejar el alto de la pantalla */}
      <div className="min-h-screen bg-white font-sans flex flex-col">
        
        {/* Barra de navegación superior */}
        <Navbar />
        
        {/* Contenido dinámico de las páginas */}
        <main className="flex-grow">
          <Routes>
            {/* Ruta para la página principal (Catálogo y Hero) */}
            <Route path="/" element={<Home />} />

            {/* Ruta para ver el detalle de cada prenda (usando el ID) */}
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Ruta para la Bolsa de Compra (2. Ruta actualizada) */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        {/* Aquí irá el Footer más adelante */}
      </div>
    </Router>
  );
}

export default App;

