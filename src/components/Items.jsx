export default function Items({namaItems, lokasiDitemukan, deskripsiItem}) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-2xl border-2 border-blue-200 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-blue-900">
                {namaItems}
            </h2>
            <p className="text-slate-600 font-bold mt-2">
                {deskripsiItem}
            </p>
            <p className="text-grey-600 font-semibold mt-2">
                Lokasi Ditemukan: {lokasiDitemukan}
            </p>
        </div>
    )
}