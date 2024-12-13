import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../utils/auth';

export function AdminNavbar() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
    navigate('/admin');
  };

  return (
    <nav className="bg-[#1a0426] border-b border-pink-500/20 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/admin/dashboard" className="text-pink-500 font-semibold">
              Dashboard
            </Link>
            <Link to="/admin/menu" className="text-gray-300 hover:text-pink-500">
              Menu
            </Link>
            <Link to="/admin/events" className="text-gray-300 hover:text-pink-500">
              Events
            </Link>
            <Link to="/admin/categories" className="text-gray-300 hover:text-pink-500">
              Categories
            </Link>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-300 hover:text-pink-500"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}