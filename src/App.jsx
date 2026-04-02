import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Orang from './components/Petani'
import Items from './components/Items'
import Lokasi from './components/Lokasi'
import Home from './components/Home'
import Crops from './components/Crops'
import './index.css'

function App() {
  return (
    <Router>
    <div className="font-poppins flex flex-col items-center min-h-screen bg-[url('/images/bg-stardew-blue.jpg')] bg-cover bg-center bg-fixed drop-shadow-2xl gap-8 p-10">
      <nav className="w-full text-gray-200 p-4 shadow-xl rounded-2xl flex justify-around gap-8 font-bold text-lg">
        <Link to="/" className="hover:underline hover:scale-105 transition-all">Home</Link>
        <Link to="/location" className="hover:underline hover:scale-105 transition-all">Location</Link>
        <Link to="/villagers" className="hover:underline hover:scale-105 transition-all">Villagers</Link>
        <Link to="/items" className="hover:underline hover:scale-105 transition-all">Items</Link>
        <Link to="/crops" className="hover:underline hover:scale-105 transition-all">Crops</Link>
      </nav>

      <div className='p-10 grow flex flex-col items-center'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lokasi" element={<Lokasi />} />
          <Route path="/penduduk" element={<Orang />} />
          <Route path="/items" element={<Items />} />
          <Route path="/crops" element={<Crops />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App
