import { useState } from "react";

export default function ProductCard({ product }) {
  const phoneNumber = "6281333906323";
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const message = `Halo kak, saya mau pesan ${product.name} ukuran ${selectedSize.label} - Rp ${selectedSize.price}`;
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h2 className="text-lg font-semibold">{product.name}</h2>

        {/* Size Selector */}
        {product.sizes.length > 1 && (
          <select
            className="mt-3 w-full border rounded-lg p-2"
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
        )}

        {/* Harga */}
        <p className="text-orange-600 text-xl font-bold mt-3">
          Rp {selectedSize.price.toLocaleString("id-ID")}
        </p>

        {/* WA Button */}
        <a href={waLink} target="_blank">
          <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition">
            Pesan Sekarang
          </button>
        </a>
      </div>
    </div>
  );
}
