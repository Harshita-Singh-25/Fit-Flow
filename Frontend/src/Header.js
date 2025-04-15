import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">FitFlow</h1>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-8">
            <li><a href="#home" className="hover:text-purple-200 transition duration-300">Home</a></li>
            <li><a href="#workouts" className="hover:text-purple-200 transition duration-300">Workouts</a></li>
            <li><a href="#trainers" className="hover:text-purple-200 transition duration-300">Trainers</a></li>
            <li><a href="#pricing" className="hover:text-purple-200 transition duration-300">Pricing</a></li>
            <li><a href="#contact" className="hover:text-purple-200 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden bg-indigo-600 py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#home" className="block py-2 hover:text-purple-200" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#workouts" className="block py-2 hover:text-purple-200" onClick={() => setIsOpen(false)}>Workouts</a></li>
            <li><a href="#trainers" className="block py-2 hover:text-purple-200" onClick={() => setIsOpen(false)}>Trainers</a></li>
            <li><a href="#pricing" className="block py-2 hover:text-purple-200" onClick={() => setIsOpen(false)}>Pricing</a></li>
            <li><a href="#contact" className="block py-2 hover:text-purple-200" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;