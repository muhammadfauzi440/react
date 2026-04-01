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
    {
        id: 6,
        namaLokasi: "The Desert",
        lokasiNpc: "Sandy, Emily, Pam",
        deskripsiLokasi:
            "Sebuah gurun yang berada di sebelah timur kota pelican town dan hanya bisa di akses dengan menggunakan bus",
    }
  ];

  return (
    <div className="w-full">
        <h1 className="text-4xl text-white font-bold drop-shadow-2xl text-center mb-6 mt-4">
            Daftar Lokasi
        </h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {namaLokasiList.map((lokasi) => (
            <li key={lokasi.id} 
            className="bg-white p-6 rounded-2xl shadow-2xl border-2 border-amber-800 hover:scale-105 transition-transform duration-300 flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-slate-600">
                    {lokasi.namaLokasi}
                </h2>

                <p className="font-bold text-emerald-600 text-sm">
                    Npc: {lokasi.lokasiNpc}
                </p>

                <hr className="my-2 border-slate-200"/>

                <p className="text-sm text-slate-600 leading-relaxed">
                    {lokasi.deskripsiLokasi}
                </p>
            </li>
        ))}
        </ul>
    </div>
  );
}
