import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { useState } from 'react'

import Orang from './components/Petani'
import Items from './components/Items'
import Lokasi from './components/Lokasi'
import './index.css'

function App() {
  return (
    <Router>
    <div className="font-poppins flex flex-col items-center min-h-screen bg-[url('/images/bg-stardew-blue.jpg')] bg-cover bg-center bg-fixed drop-shadow-2xl gap-8 p-10">
      <div className="flex gap-6">
        <Lokasi />
      </div>

      <div className='flex gap-6'>
        <Orang />
      </div>

      <div className='flex gap-6'>
        <Items />
      </div>
    </div>
    </Router>
  );
}

export default App
