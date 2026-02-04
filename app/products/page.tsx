import Image from "next/image";

const allProducts = [
  { id: 1, title: "App for Profile", image: "/products/app1.png" },
  { id: 2, title: "Delivery App", image: "/products/app2.png" },
  { id: 3, title: "Finance App", image: "/products/app6.png" },
  { id: 4, title: "Weather App", image: "/products/app4.png" },
  { id: 5, title: "Healthcare App", image: "/products/app5.png" },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Flutter Products
        </h1>
        <p className="text-gray-600 mb-12">
          High-performance mobile applications built with Flutter
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-105 relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
