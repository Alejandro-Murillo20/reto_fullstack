// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="container mx-auto mt-10">
          <Routes>
            <Route path="/" element={<h1 className="text-center text-4xl font-serif mt-20">Bienvenido a la Colección de Gala</h1>} />
            {/* Aquí iremos agregando las demás páginas */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
