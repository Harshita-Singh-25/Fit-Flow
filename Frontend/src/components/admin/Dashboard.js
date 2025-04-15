// components/admin/Dashboard.js
import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import ContactManagement from './ContactManagement';
import UserManagement from './UserManagement';
import WorkoutManagement from './WorkoutManagement';

const AdminDashboard = ({ auth }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Redirect if not admin
  if (!auth.isAuthenticated || !auth.user.isAdmin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block md:w-64 bg-gray-800 text-white p-4 flex-shrink-0`}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold">FitFlow Admin</h2>
          <button 
            className="md:hidden text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav>
          <ul className="space-y-2">
            <li>
              <Link to="/admin" className="block py-2 px-4 rounded hover:bg-gray-700">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/contacts" className="block py-2 px-4 rounded hover:bg-gray-700">
                Contact Management
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className="block py-2 px-4 rounded hover:bg-gray-700">
                User Management
              </Link>
            </li>
            <li>
              <Link to="/admin/workouts" className="block py-2 px-4 rounded hover:bg-gray-700">
                Workout Management
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white shadow">
          <div className="px-4 py-3 flex justify-between items-center">
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <div className="flex items-center">
              <span className="mr-2">{auth.user.name}</span>
              <Link to="/logout" className="text-red-600 hover:text-red-800">Logout</Link>
            </div>
          </div>
        </header>
        
        {/* Main content area */}
        <main className="p-6 overflow-y-auto h-[calc(100vh-64px)]">
          <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="/contacts" element={<ContactManagement />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/workouts" element={<WorkoutManagement />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const AdminHome = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/admin/contacts" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Contact Management</h2>
          <p className="text-gray-600">Manage customer inquiries and messages.</p>
        </Link>
        <Link to="/admin/users" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">User Management</h2>
          <p className="text-gray-600">Manage user accounts and subscriptions.</p>
        </Link>
        <Link to="/admin/workouts" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Workout Management</h2>
          <p className="text-gray-600">Add and manage workout content.</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;

