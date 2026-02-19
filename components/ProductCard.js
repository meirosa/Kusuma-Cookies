import { useState } from "react";

export default function ProductCard({ product }) {
  const phoneNumber = "6281333906323";

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const message = `Halo kak, saya mau pesan ${product.name} ukuran ${selectedSize.label} - Rp ${selectedSize.price}`;
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="p-5 flex flex-col h-full">
      {/* Gambar */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-xl"
      />

      {/* Nama Produk */}
      <h2 className="text-lg font-semibold text-[#6b5b3e] mt-4">
        {product.name}
      </h2>

      {/* Dropdown Ukuran (selalu ada) */}
      <div className="mt-3 min-h-[48px]">
        <select
          className="w-full border rounded-lg p-2 bg-white disabled:bg-gray-100 disabled:text-gray-500"
          disabled={product.sizes.length === 1}
          onChange={(e) =>
            setSelectedSize(product.sizes[e.target.selectedIndex])
          }
        >
          {product.sizes.map((size, index) => (
            <option key={index}>
              {size.label} - Rp {size.price.toLocaleString("id-ID")}
            </option>
          ))}
        </select>
      </div>

      {/* Harga */}
      <p className="text-orange-600 text-xl font-bold mt-3">
        Rp {selectedSize.price.toLocaleString("id-ID")}
      </p>

      {/* Tombol selalu di bawah */}
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
