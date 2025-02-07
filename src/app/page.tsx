export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/timeocafe.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to Time Art Café
            </h1>
            <p className="text-xl mb-8">
              A perfect blend of art, time, and exceptional coffee
            </p>
            <a
              href="/menu"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              View Our Menu
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-4xl mb-4">☕</div>
            <h3 className="text-xl font-semibold mb-2">Premium Coffee</h3>
            <p className="text-gray-600">
              Expertly crafted coffee using the finest beans
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Artistic Atmosphere</h3>
            <p className="text-gray-600">
              A unique space where art meets coffee culture
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🥪</div>
            <h3 className="text-xl font-semibold mb-2">Fresh Food</h3>
            <p className="text-gray-600">
              Delicious bagels, toasties, and healthy bowls
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
