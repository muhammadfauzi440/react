export default function Lokasi({namaLokasi, lokasiNpc, deskripsiLokasi}) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-2xl border-2 border-amber-800 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-amber-700">
                {namaLokasi}
            </h2>
            <p className="text-slate-600 font-bold mt-2">
                Npc: {lokasiNpc}
            </p>
            <p className="text-slate-600 font-bold mt-2">
                {deskripsiLokasi}
            </p>
        </div>
    );
}