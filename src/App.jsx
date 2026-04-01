import { useState } from 'react'
import Orang from './components/Petani'
import Items from './components/Items'
import Lokasi from './components/Lokasi'
import './index.css'

function App() {
  return (
    <div className="font-poppins flex flex-col items-center min-h-screen bg-[url('/images/bg-stardew-blue.jpg')] bg-cover bg-center bg-fixed drop-shadow-2xl gap-8 p-10">
      <div className="flex gap-6">
        <Lokasi />
      </div>

      <div className='flex gap-6'>
        <Items />
      </div>


      <div className='flex gap-6'>
        <Orang nama="Haley" deskripsiOrang="Berambut kuning dan suka bermain di ladang" alat="Kamera"/>
        <Orang nama="Pierre" deskripsiOrang="Penjaga toko yang kapitalis dan pelit" alat="Kalkulator"/>
        <Orang nama="Demetrius" deskripsiOrang="Seorang ilmuwan yang suka eksperimen" alat="Komputer"/>
      </div>
    </div>
  );
}

export default App
