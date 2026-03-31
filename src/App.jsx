import { useState } from 'react'
import Ladang from './components/Petani'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 gap-8 p-10">
      <h1 className="text-4xl font-bold text-green-800 ">
        Daftar Ladang Petani
      </h1>

      <div className='flex gap-6'>
        <Ladang nama="Fauzi" alat="Iridium Scythe"/>
        <Ladang nama="Pierre" alat="Traktor"/>
        <Ladang nama="Demetrius" alat="Komputer"/>
      </div>
    </div>
  );
}

export default App
