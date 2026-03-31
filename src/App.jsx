import { useState } from 'react'
import Orang from './components/Petani'
import Items from './components/Items'
import Lokasi from './components/Lokasi'
import './index.css'

function App() {
  return (
    <div className="font-poppins flex flex-col items-center min-h-screen bg-[url('/images/bg-stardew-blue.jpg')] bg-cover bg-center bg-fixed drop-shadow-2xl gap-8 p-10">
      <h1 className="text-4xl font-bold text-amber-400">
        Daftar Petani
      </h1>

      <div className='flex gap-6'>
        <Orang nama="Haley" deskripsiOrang="Berambut kuning dan suka bermain di ladang" alat="Kamera"/>
        <Orang nama="Pierre" deskripsiOrang="Penjaga toko yang kapitalis dan pelit" alat="Kalkulator"/>
        <Orang nama="Demetrius" deskripsiOrang="Seorang ilmuwan yang suka eksperimen" alat="Komputer"/>
      </div>

      <h1 className="text-4xl font-bold text-blue-900 mt-4">
        Daftar Items
      </h1>

      <div className='flex gap-6'>
        <Items />
      </div>

      <h1 className="text-4xl font-bold text-amber-900 mt-4">
        Daftar Lokasi
      </h1>

      <div className="flex gap-6">
        <Lokasi namaLokasi="Pelican Town" lokasiNpc="Haley, Pierre, Lewis" deskripsiLokasi="Kota di mana para warga hidup berdampingan"/>
        <Lokasi namaLokasi="Cindersap Forest" lokasiNpc="Marnie, Shane, Leah" deskripsiLokasi="Hutan yang berada di pinggir kota"/>
        <Lokasi namaLokasi="The Mountain" lokasiNpc="Demetrius, Robin, Sebastian" deskripsiLokasi="Daerah pegunungan berada di utara Pelicat Town"/>
      </div>
    </div>
  );
}

export default App
