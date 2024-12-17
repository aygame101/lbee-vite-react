import { MapPin, Clock, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export function Contact() {
  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
          Retrouvez <span className="text-pink-500">nous</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <MapPin className="h-8 w-8 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Adresse</h3>
            <p className="text-gray-400">69 Pl. Drouet d'Erlon</p>
            <p className="text-gray-400">51100 Reims</p>
          </div>
          
          <div className="text-center">
            <Clock className="h-8 w-8 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Horaires</h3>
            <p className="text-gray-400">Mercredi - Samedi</p>
            <p className="text-gray-400">11h00 - 3h00</p>
          </div>
          
          <div className="text-center">
            <Phone className="h-8 w-8 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
            <p className="text-gray-400">+33 3 26 47 05 04</p>
            <p className="text-gray-400">@l.beebar</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="tel:+33326470504"
            className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
          >
            Faire une réservation
          </a>
        </div>

        <div className="mt-12 flex justify-center space-x-6">
          <a href="https://www.facebook.com/LBee.bar/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="h-8 w-8 text-pink-500 mx-auto mb-4"/>
          </a>
          <a href="https://www.instagram.com/l.beebar/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-8 w-8 text-pink-500 mx-auto mb-4"/>
          </a>
        </div>
      </div>
    </section>
  );
}