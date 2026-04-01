export default function Orang({ nama, deskripsiOrang, alat }) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-amber-400">Daftar Petani</h1>

      <div className="bg-white p-6 rounded-2xl shadow-2xl border-2 border-green-200 hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-bold text-green-700 mb-2">{nama}</h2>
        <p className="text-gray-600 font-bold mt-2">{deskripsiOrang}</p>
        <p className="text-slate-600 font-bold mt-2">
          Alat Favorit:{" "}
          <span className="text-orange-600 font-bold">{alat}</span>
        </p>
      </div>
    </div>
  );
}
