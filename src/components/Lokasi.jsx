import { useState, useEffect } from "react";

export default function Lokasi() {
  const [daftarLokasi, setDaftarLokasi] = useState(() => {
    const dataSimpanan = localStorage.getItem("simpananDaftarLokasi");

    if (dataSimpanan) {
      return JSON.parse(dataSimpanan);
    } else {
      return [
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
    }
  }
);

  const [inputLokasi, setInputLokasi] = useState("");
  const [inputNpc, setInputNpc] = useState("");
  const [inputDeskripsi, setInputDeskripsi] = useState("");
  const [pesanSukses, setPesanSukses] = useState("");

  useEffect (() => {
    localStorage.setItem("simpananDaftarLokasi", JSON.stringify(daftarLokasi));
  }, [daftarLokasi]);

  function handleSubmit(event) {
    event.preventDefault();

    const lokasiBaru = {
      id: Date.now(),
      namaLokasi: inputLokasi,
      lokasiNpc: inputNpc,
      deskripsiLokasi: inputDeskripsi
    }; setDaftarLokasi([...daftarLokasi, lokasiBaru]);


    setInputLokasi("");
    setInputNpc("");
    setInputDeskripsi("");
    setPesanSukses("Data berhasil disimpan!");

    setTimeout(() => {
      setPesanSukses("");
    }, 5000);
  }

  return (
    <div className="w-full">
        <h1 className="text-4xl text-white font-bold drop-shadow-2xl text-center mb-6 mt-4">
            Daftar Lokasi
        </h1>

        {pesanSukses && (  
        <div className="bg-emerald-200 border-border-emerald-300 text-green-800 font-bold px-4 py-3 shadow-md mb-6 animate-pulse rounded-lg">
          {pesanSukses}
        </div>
        )}

        <form className="bg-white p-6 rounded-2xl shadow-2xl mb-8 flex flex-col gap-4 max-w-2xl border-2 border-amber-800 mx-auto"
        onSubmit={handleSubmit}
        >
            <h2 className="font-bold text-2xl text-slate-700">
              Tambah Lokasi Baru 
            </h2>

            <input
            type="text"
            placeholder="Nama Lokasi (examples: The Mines)"
            value={inputLokasi}
            onChange={(event) => setInputLokasi(event.target.value)}
            className="border-2 p-2 rounded-lg"
            required
            />

            <input 
            type="text"
            placeholder="Npc yang berada di lokasi tersebut"
            value={inputNpc}
            onChange={(event) => setInputNpc(event.target.value)}
            className="border-2 p-2 rounded-lg"
            required
            />

            <textarea
            placeholder="Deskripsi singkat lokasi ini"
            value={inputDeskripsi}
            onChange={(event) => setInputDeskripsi(event.target.value)}
            className="border-2 p-2 rounded-lg"
            required
            />
            
            <button
            type="submit"
            className="bg-green-600 text-white font-bold py-2 px-4 rounded-2xl hover:bg-green-700 transition-colors duration-300 hover:scale-105 active:scale-95">
              Simpan Data
            </button>
        </form>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {daftarLokasi.map((lokasi) => (
            <li key={lokasi.id} 
            className="bg-white p-6 rounded-2xl shadow-2xl border-2 border-amber-800 hover:scale-105 transition-transform duration-300 flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-slate-600">
                    {lokasi.namaLokasi}
                </h2>

                <p className="font-bold text-emerald-600 text-sm">
                    Npc: {lokasi.lokasiNpc}
                </p>

                <hr className="my-2 border-slate-200"/>

                <p className="text-sm font-bold text-slate-600 leading-relaxed">
                    {lokasi.deskripsiLokasi}
                </p>
            </li>
        ))}
        </ul>
    </div>
  );
}
