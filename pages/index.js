import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    {
      name: "Kue Kacang",
      image: "/kuekacang.jpeg",
      sizes: [
        { label: "400ml", price: 20000 },
        { label: "800ml", price: 40000 },
      ],
    },
    {
      name: "Lidah Kucing",
      image: "/lidahkucing.jpeg",
      sizes: [
        { label: "800ml", price: 35000 },
      ],
    },
    {
      name: "Nastar",
      image: "/nastar.jpeg",
      sizes: [
        { label: "400ml", price: 23000 },
        { label: "800ml", price: 45000 },
      ],
    },
    {
      name: "Salju Nyesss",
      image: "/putrisalju.jpeg",
      sizes: [
        { label: "400ml", price: 20000 },
        { label: "800ml", price: 40000 },
      ],
    },
    {
      name: "Sagu Keju Pandan",
      image: "/sagukejupandan.jpeg",
      sizes: [
        { label: "400ml", price: 23000 },
        { label: "800ml", price: 45000 },
      ],
    },
    {
      name: "Semprit Susu",
      image: "/sempritsusu.jpeg",
      sizes: [
        { label: "400ml", price: 20000 },
        { label: "800ml", price: 40000 },
      ],
    },
  ];

  const sliderImages = [
    "/janit.jpeg",
    "/thumbrinthcookies.jpeg",
    "/kuekacang.jpeg",
    "/nastar.jpeg",
    "/putrisalju.jpeg",
    "/lidahkucing.jpeg",
  ];

  return (
    <div className="min-h-screen bg-[#f8f5ef] scroll-smooth">
      {/* ================= HEADER ================= */}
      <header className="bg-[#f5efe4] shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#7a5c2e] tracking-wide">
            Kusuma Cookies
          </h1>

          <nav className="flex gap-8 text-sm font-medium text-[#6b5b3e]">
            <a href="#home" className="hover:text-[#a67c3c] transition">
              Home
            </a>
            <a href="#products" className="hover:text-[#a67c3c] transition">
              Our Products
            </a>
            <a href="#location" className="hover:text-[#a67c3c] transition">
              Store Location
            </a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="pt-28 pb-16 px-6 text-center">
        <h2 className="text-5xl font-bold text-[#7a5c2e] mb-6">
          Special Lebaran Collection
        </h2>

        <p className="text-[#6b5b3e] max-w-2xl mx-auto leading-relaxed text-lg mb-12">
          Rayakan momen kebersamaan bersama keluarga dengan aneka kue premium
          dari Kusuma Cookies yang dibuat dengan bahan berkualitas dan penuh
          cinta.
        </p>

        {/* ===== SLIDER ===== */}
        <div className="overflow-hidden">
          <div className="flex gap-6 slider-track">
            {[...sliderImages, ...sliderImages].map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-64 h-64 object-cover rounded-2xl shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section id="products" className="pb-20 px-8 scroll-mt-28">
        <h3 className="text-3xl font-semibold text-center text-[#7a5c2e] mb-12">
          Our Products
        </h3>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-[#e5d9c6]"
            >
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section
        id="location"
        className="bg-[#e8dfcf] py-16 px-6 text-center text-[#6b5b3e] scroll-mt-28"
      >
        <h3 className="text-2xl font-semibold mb-6">Store Location</h3>

        <p className="mb-6 font-medium">
          UD. Kusuma Cookies – Badegan, Ponorogo
        </p>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=UD.+Kusuma+Cookies+Badegan+Ponorogo&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#f5efe4] py-6 text-center text-sm text-[#6b5b3e]">
        © 2026 Kusuma Cookies • Made with Love 🤎
      </footer>

      {/* ===== SLIDER STYLE (NO GLOBAL CSS) ===== */}
      <style jsx>{`
        .slider-track {
          width: max-content;
          animation: slide 25s linear infinite;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
