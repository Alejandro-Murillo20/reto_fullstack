// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail'; // Importamos la nueva página
/* Importa aquí el Carrito cuando lo creemos */

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans flex flex-col">
        <Navbar />
        
        {/* El main flex-grow asegura que el contenido ocupe el espacio y empuje al footer si hay poco texto */}
        <main className="flex-grow">
          <Routes>
            {/* Ruta Principal */}
            <Route path="/" element={<Home />} />

            {/* Ruta de Detalle: El ':id' es la parte que cambia según el producto */}
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Ruta del Carrito (La usaremos en el siguiente paso) */}
            <Route path="/cart" element={<div className="text-center mt-20 font-serif text-2xl uppercase tracking-widest text-neutral-400">Próximamente: Tu Bolsa de Compra</div>} />
          </Routes>
        </main>

        {/* Aquí puedes agregar el Footer después */}
      </div>
    </Router>
  );
}

export default App;
