// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import HomePage from './pages/HomePage';
import Workout from './pages/Workout';
import HealthPlanner from './pages/HealthPlanner';
import UserProfile from './pages/UserProfile';
import Login from './components/Login';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header user={user} setUser={setUser} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/workouts" element={<Workout />} />
            <Route 
              path="/health-planner" 
              element={
                <ProtectedRoute user={user}>
                  <HealthPlanner />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute user={user}>
                  <UserProfile user={user} />
                </ProtectedRoute>
              } 
            />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Protected Route component
function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default App;


