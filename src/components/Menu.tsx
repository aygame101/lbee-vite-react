import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../utils/store';
import { MenuItem } from '../utils/types';

export function Menu() {
  const [menuItems, setMenuItems] = React.useState<MenuItem[]>([]);
  
  React.useEffect(() => {
    // Get initial items
    setMenuItems(store.getMenuItems());

    // Setup interval to check for updates
    const interval = setInterval(() => {
      setMenuItems(store.getMenuItems());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Filter to show only 4 cocktails for the preview
  const featuredCocktails = menuItems
    .filter(item => item.category === 'cocktails')
    .slice(0, 4);

  return (
    <section id="menu" className="py-20 gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
          Cocktail <span className="text-pink-500">Création</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {featuredCocktails.map((cocktail) => (
            <div
              key={cocktail.id}
              className="bg-[#1a0426] p-6 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-colors backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-pink-500 mb-2">
                {cocktail.name}
              </h3>
              <p className="text-gray-400 mb-4">{cocktail.description}</p>
              <p className="text-white font-medium">{cocktail.price}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-block border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-colors neon-box"
          >
            Voir tout
          </Link>
        </div>
      </div>
    </section>
  );
}