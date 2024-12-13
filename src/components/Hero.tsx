

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=2000"
          alt="Bar interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0014]/80 to-[#0f0014]/90"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 neon-text">
            Bienvenue au <span className="text-pink-500">LBee</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Laissez vos chevaux à l’entrée et venez boire une bière ! 
          </p>
          <a
            href="#menu"
            className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
          >
            Voir la carte
          </a>
        </div>
      </div>
    </div>
  );
}