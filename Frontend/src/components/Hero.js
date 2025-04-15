import React from 'react';

function Hero() {
  return (
    <section id="home" className="pt-24 lg:pt-28 relative bg-gray-900 text-white">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Breathe. Move. Transform.</h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl">
          Your journey to a healthier lifestyle starts here. Join our community of wellness enthusiasts today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#pricing" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition duration-300">
            Start Free Trial
          </a>
          <a href="#download" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition duration-300">
            Download App
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;