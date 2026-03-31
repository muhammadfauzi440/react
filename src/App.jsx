import { useState } from 'react'
import Orang from './components/Petani'
import Items from './components/Items'
import bgGambar from '/images/bg-stardew-blue.jpg'
import './index.css'
function App() {
  return (
    <div className="font-poppins flex flex-col items-center min-h-screen bg-green-50 gap-8 p-10">
      <h1 className="text-4xl font-bold text-green-800 ">
        Daftar Petani
      </h1>

      <div className='flex gap-6'>
        <Orang nama="Haley" deskripsiOrang="Berambut kuning dan suka bermain di ladang" alat="Kamera"/>
        <Orang nama="Pierre" deskripsiOrang="Penjaga toko yang kapitalis dan pelit" alat="Kalkulator"/>
        <Orang nama="Demetrius" deskripsiOrang="Seorang ilmuwan yang suka eksperimen" alat="Komputer"/>
      </div>

      <div className='flex gap-6 mt-4'>
        <Items namaItems="Prismatic Shard" lokasiDitemukan="Di dalam gua dan di dapatkan dari monster" deskripsiItem="Batuan mineral yang sangat langka dan sangat susah ditemukan"/>
        <Items namaItems="Diamond" lokasiDitemukan="Di dalam gua dan di dapatkan dari monster" deskripsiItem="Mineral yang bisa drop dari monster pada lantai 50-80"/>
        <Items namaItems="Dragon Tooth" lokasiDitemukan="Ditemukan di Volcano Dungeon dari fosil naga" deskripsiItem="Gigi naga yang hanya bisa di temukan di volcano dungeon"/>
      </div>
    </div>
  );
}

export default App
