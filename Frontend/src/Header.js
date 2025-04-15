import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg fixed w-full z-40">
      <div className="max-w-[1400px] mx-auto py-4 px-6 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">FitFlow</Link>

        <nav className="hidden lg:flex space-x-8">
          <Link to="/" className="hover:text-purple-200">Home</Link>
          <Link to="/workouts" className="hover:text-purple-200">Workouts</Link>
          <Link to="/health-planner" className="hover:text-purple-200">Health Planner</Link>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="hover:text-purple-200 flex items-center">
                <FaUserCircle size={24} className="mr-2" />
                <span className="font-medium">{user.username}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-white text-purple-700 px-3 py-1 rounded hover:bg-purple-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="bg-white text-purple-700 px-3 py-1 rounded hover:bg-purple-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-purple-700 text-white px-3 py-1 rounded hover:bg-purple-800 border border-white"
              >
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
