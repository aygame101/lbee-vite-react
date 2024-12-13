import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { store } from '../utils/store';
import { MenuItem } from '../utils/types';

export function FullMenuPage() {
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

  // Group items by category
  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-pink-500 hover:text-pink-400">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-12 text-center neon-text">
          La <span className="text-pink-500">Carte</span>
        </h1>

        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold text-pink-500 mb-6 capitalize neon-text">
              {category}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1a0426] p-6 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-colors backdrop-blur-sm"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {item.name}
                    </h3>
                    <span className="text-pink-500 font-medium">{item.price}</span>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}