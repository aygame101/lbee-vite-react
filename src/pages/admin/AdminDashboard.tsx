import React from 'react';
import { Link } from 'react-router-dom';
import { AdminNavbar } from '../../components/admin/AdminNavbar';
import { Coffee, Calendar, List } from 'lucide-react';

export function AdminDashboard() {
  return (
    <div className="min-h-screen gradient-bg">
      <AdminNavbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-8 neon-text">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/admin/menu"
            className="bg-[#1a0426] p-6 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all group"
          >
            <Coffee className="h-8 w-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Menu Management</h2>
            <p className="text-gray-400">Manage menu items and categories</p>
          </Link>

          <Link
            to="/admin/events"
            className="bg-[#1a0426] p-6 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all group"
          >
            <Calendar className="h-8 w-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Event Management</h2>
            <p className="text-gray-400">Manage upcoming events and schedules</p>
          </Link>

          <Link
            to="/admin/categories"
            className="bg-[#1a0426] p-6 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all group"
          >
            <List className="h-8 w-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Categories</h2>
            <p className="text-gray-400">Manage menu categories</p>
          </Link>
        </div>
      </div>
    </div>
  );
}