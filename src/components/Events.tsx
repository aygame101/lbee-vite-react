import React from 'react';
import { Music2, Mic2, Wine } from 'lucide-react';
import { store } from '../utils/store';
import { Event } from '../utils/types';

export function Events() {
  const [events, setEvents] = React.useState<Event[]>([]);
  
  React.useEffect(() => {
    // Get initial events
    setEvents(store.getEvents());

    // Setup interval to check for updates
    const interval = setInterval(() => {
      setEvents(store.getEvents());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getEventIcon = (icon: Event['icon']) => {
    switch (icon) {
      case 'music':
        return <Music2 className="h-8 w-8 text-pink-500 mb-4" />;
      case 'mic':
        return <Mic2 className="h-8 w-8 text-pink-500 mb-4" />;
      case 'wine':
        return <Wine className="h-8 w-8 text-pink-500 mb-4" />;
      default:
        return null;
    }
  };

  return (
    <section id="events" className="py-20 bg-[#0f0014]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
          <span className="text-pink-500">Évènements</span> à venir
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-[#1a0426] p-6 rounded-lg border border-pink-500/20">
              {getEventIcon(event.icon)}
              <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
              <p className="text-gray-400 mb-4">{event.schedule}</p>
              <p className="text-gray-300">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}