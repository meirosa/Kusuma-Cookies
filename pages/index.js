import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    { name: "Roti Coklat", price: 10000, image: "/kue/kue1.jpg" },
    { name: "Roti Keju", price: 12000, image: "/kue/kue2.jpg" },
    { name: "Croissant Butter", price: 15000, image: "/kue/kue3.jpg" },
    { name: "Donat Gula", price: 8000, image: "/kue/kue4.jpg" },
    { name: "Donat Coklat", price: 9000, image: "/kue/kue5.jpg" },
    { name: "Brownies Slice", price: 20000, image: "/kue/kue6.jpg" },
    { name: "Roti Sosis", price: 13000, image: "/kue/kue7.jpg" },
    { name: "Roti Abon", price: 14000, image: "/kue/kue8.jpg" },
    { name: "Roti Tawar", price: 18000, image: "/kue/kue9.jpg" },
    { name: "Kue Lapis", price: 7000, image: "/kue/kue10.jpg" },
    { name: "Kue Bolu", price: 25000, image: "/kue/kue11.jpg" },
    { name: "Tart Mini", price: 30000, image: "/kue/kue12.jpg" },
    { name: "Pie Buah", price: 15000, image: "/kue/kue13.jpg" },
    { name: "Kue Sus", price: 12000, image: "/kue/kue14.jpg" },
    { name: "Muffin Coklat", price: 11000, image: "/kue/kue15.jpg" },
    { name: "Cupcake Vanilla", price: 10000, image: "/kue/kue16.jpg" },
    { name: "Kue Nastar", price: 5000, image: "/kue/kue17.jpg" },
    { name: "Kue Putri Salju", price: 5000, image: "/kue/kue18.jpg" },
    { name: "Kue Kastengel", price: 6000, image: "/kue/kue19.jpg" },
    { name: "Roti Matcha", price: 16000, image: "/kue/kue20.jpg" },
  ];

  return (
    <div className="bg-orange-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-orange-700 mb-8">
        🥐 Toko Roti Rosa Bakery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
}
