import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import { Lock } from 'lucide-react';

export function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signIn(username, password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#1a0426] p-8 rounded-lg border border-pink-500/20">
        <div className="text-center mb-8">
          <Lock className="h-12 w-12 text-pink-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white neon-text">Admin</h2>
        </div>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-sm">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="username">
              Utilisateur
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-[#0f0014] border border-pink-500/20 rounded p-2 text-white focus:border-pink-500 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="password">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0f0014] border border-pink-500/20 rounded p-2 text-white focus:border-pink-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded font-semibold hover:bg-pink-600 transition-colors"
          >
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}