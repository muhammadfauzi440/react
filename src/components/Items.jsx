import { use, useState } from "react";

export default function Items() {
  const [isiRansel, setIsiRansel] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);

  const daftarBarang = [
    { id: 1, nama: "Parsnip", harga: 35},
    { id: 2, nama: "Prismatic Shard", harga: 2000},
    { id: 3, nama: "Diamond", harga: 750},
    { id: 4, nama: "Ancient Fruit Wine", harga: 2310},
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-amber-200 w-full max-w-full">
      <div className="flex justify-between items-center mb-6 border-b pb-4 gap-4">
        <h2 className="text-2xl font-bold text-amber-800">Toko Pierre 🏪</h2>
        <div className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-full">
          Ransel: {isiRansel} item
        </div>
        <div className="bg-green-100 text-amber-800 font-bold px-4 py-2 rounded-full">
          Total: {totalHarga} Gold
        </div>
      </div>

      <ul className="flex flex-col gap-3">
        {daftarBarang.map((barang) => (
          <li
            key={barang.id}
            className="flex justify-between items-center p-3 bg-slate-50 border border-slate-100 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div>
                <p className="font-bold text-slate-700">{barang.nama}</p>
                <p className="text-sm text-green-600 font-medium">
                  {barang.harga} Gold
                </p>
              </div>
            </div>

            <button
            disabled={isiRansel >= 10}
             onClick={() => {
              setIsiRansel(isiRansel + 1);
              setTotalHarga(totalHarga + barang.harga);
             }}
              className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 active:scale-95 transition-all cursor-pointer font-medium"
            >
              Beli
            </button>
          </li>
        ))}
      </ul>

      {isiRansel >= 10 && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-center font-bold text-sm">
          ⚠️ Ranselmu sudah penuh!
        </div>
      )}
      <button 
      onClick={() => {
        setIsiRansel(0);
        setTotalHarga(0);
      }}
      className="bg-red-600 px-4 py-2 rounded-lg text-white font-bold hover:bg-red-700 hover:scale-105 mt-2 cursor-pointer transition-all active:scale-95">
        Reset
      </button>
    </div>
  );
}
