export default function Lokasi() {
  const namaLokasiList = [
    {
      id: 1,
      namaLokasi: "Pelican Town",
      lokasiNpc: "Haley, Pierre, Lewis",
      deskripsiLokasi: "Kota di mana para warga hidup berdampingan",
    },
    {
      id: 2,
      namaLokasi: "Cindersap Forest",
      lokasiNpc: "Marnie, Shane, Leah",
      deskripsiLokasi: "Hutan yang berada di pinggir kota",
    },
    {
      id: 3,
      namaLokasi: "The Mountain",
      lokasiNpc: "Demetrius, Robin, Sebastian",
      deskripsiLokasi: "Daerah pegunungan berada di utara Pelicat Town",
    },
    {
      id: 4,
      namaLokasi: "The Mines",
      lokasiNpc: "Clint, Krobus, Dwarf",
      deskripsiLokasi:
        "Tambang yang berada di lokasi yang sama dengan The Mountain",
    },
    {
      id: 5,
      namaLokasi: "Ginger Island",
      lokasiNpc: "Leo, Mr. Qi, Birdie",
      deskripsiLokasi:
        "Sebuah pulau yang berada jauh dari kota pelican town dan hanya bisa di akses dengan menggunakan kapal",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-amber-900 mt-4">Daftar Lokasi</h1>
      <div className="bg-white p-6 rounded-2xl shadow-2xl border-2 border-amber-800 hover:scale-105 transition-transform duration-300">
        <ul clasasName="flex flex-col gap-4">
          {namaLokasiList.map((lokasi) => (
            <li
              key={lokasi.id}
              clasasName="flex justify-between items-center p-3 bg-slate-50 border border-slate-100 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-bold text-slate-700">
                    {lokasi.namaLokasi}
                  </p>
                  <p className="font.bold text-green-600 font-medium">
                    {lokasi.lokasiNpc}
                  </p>
                  <p className="text-sm text-slate-500">
                    {lokasi.deskripsiLokasi}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
