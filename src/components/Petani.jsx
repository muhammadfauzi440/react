export default function Orang() {
  const namaOrangList = [
    {
      id: 1,
      namaOrang: "Haley",
      ciriCiri:
        "Rambut kuning, sering berada di Cindersap Forest, sering membawa kamera",
      itemsFavorit: "Coconut, Sunflower, Pink Cake",
    },
    {
      id: 2,
      namaOrang: "Pierre",
      ciriCiri:
        "Rambut coklat, sering berada di Pelican Town, memiliki toko bahan makanan dan bibit tanaman",
      itemsFavorit: "Fried Calamari, Price Catalogue, Prismatic Shard",
    },
    {
      id: 3,
      namaOrang: "Lewis",
      ciriCiri:
        "Rambut abu-abu, sering berada di Pelican Town, merupakan walikota kota pelican town",
      itemsFavorit: "Green Tea, Vegetable Medley, Hot Pepper",
    },
    {
      id: 4,
      namaOrang: "Emily",
      ciriCiri:
        "Rambut biru, sering berada di Pelican Town, memiliki toko pakaian dan perhiasan dan merupakan seorang penjahit",
      itemsFavorit:
        "Topaz, Diamond, Emerald, Aquamarine, Amethyst, Jade, Ruby, Prismatic Shard, Cloth",
    },
    {
      id: 5,
      namaOrang: "Wizard",
      ciriCiri:
        "Rambut ungu, sering berada di Wizard Tower, merupakan seorang penyihir yang memiliki pengetahuan tentang dunia magis",
      itemsFavorit: "Purple Mushroom, Solar Essence, Void Essence",
    },
    {
      id: 6,
      namaOrang: "Demetrius",
      ciriCiri:
        "Rambut hitam, sering berada di The Mountain, merupakan seorang ilmuwan yang suka eksperimen",
      itemsFavorit: "Rice Puding, Bean Hotpot, Ice Cream, Strawberry",
    },
  ];

  return (
    <div className="w-full">
      <h1 className="text-4xl text-emerald-800 font-bold drop-shadow-2xl text-center mb-6 mt-4">
        Nama NPC
      </h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {namaOrangList.map((orang) => (
          <li
            key={orang.id}
            className="bg-white p-6 rounded-2xl shadow-2xl border-2 border-blue-800 hover:scale-105 transition-transform duration-300 flex flex-col gap-2"
          >
            <h2 className="text-2xl font-bold text-grey-600">
              {orang.namaOrang}
            </h2>

            <p className="text-sm text-blue-600 font-bold">
              {orang.itemsFavorit}
            </p>

            <hr className="my-2 border-slate-200" />

            <p className="text-sm text-emerald-600 font-bold">
              Ciri-ciri: {orang.ciriCiri}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
