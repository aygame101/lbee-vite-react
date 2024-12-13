import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FullMenuPage } from './pages/FullMenuPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { MenuManagement } from './pages/admin/MenuManagement';
import { EventManagement } from './pages/admin/EventManagement';
import { CategoryManagement } from './pages/admin/CategoryManagement';
import { useAuth } from './utils/auth';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<FullMenuPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/menu"
          element={
            <PrivateRoute>
              <MenuManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/events"
          element={
            <PrivateRoute>
              <EventManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/categories"
          element={
            <PrivateRoute>
              <CategoryManagement />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;