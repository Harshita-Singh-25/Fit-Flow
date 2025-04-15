import React from 'react';

function Trainers({ trainers }) {
  return (
    <section id="trainers" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Trainers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our certified instructors bring years of experience and passion to help you achieve your fitness goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.length > 0 ? (
            trainers.map(trainer => (
              <div 
                key={trainer.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
                  <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-semibold mb-4">
                    {trainer.specialization}
                  </span>
                  <p className="text-gray-600">{trainer.bio}</p>
                </div>
              </div>
            ))
          ) : (
            Array(4).fill().map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="w-full h-64 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2 mb-4"></div>
                  <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-full"></div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Trainers;