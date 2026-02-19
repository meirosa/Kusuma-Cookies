import { useState } from "react";

export default function ProductCard({ product }) {
  const phoneNumber = "6281333906323";

  // state ukuran yang dipilih
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  // link WhatsApp otomatis
  const message = `Halo kak, saya mau pesan ${product.name} ukuran ${selectedSize.label} - Rp ${selectedSize.price.toLocaleString(
    "id-ID",
  )}`;
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="p-5 flex flex-col h-full">
      {/* Gambar Produk */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-xl"
      />

      {/* Nama Produk */}
      <h2 className="text-lg font-semibold text-[#6b5b3e] mt-4">
        {product.name}
      </h2>

      {/* Pilihan Ukuran (button group) */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {product.sizes.map((size, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedSize(size)}
            className={`px-3 py-1 rounded-full border transition-colors font-medium ${
              selectedSize.label === size.label
                ? "bg-[#7a5c2e] text-white border-[#7a5c2e]" // aktif
                : "bg-white text-[#6b5b3e] border-[#e5d9c6]" // default
            }`}
          >
            {size.label} - Rp {size.price.toLocaleString("id-ID")}
          </button>
        ))}
      </div>

      {/* Harga */}
      <p className="text-orange-600 text-xl font-bold mt-3">
        Rp {selectedSize.price.toLocaleString("id-ID")}
      </p>

      {/* Tombol Pesan WhatsApp */}
      <div className="mt-auto">
        <a href={waLink} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition">
            Pesan Sekarang
          </button>
        </a>
      </div>
    </div>
  );
}
