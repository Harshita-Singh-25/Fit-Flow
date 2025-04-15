import React from 'react';

function Features({ features }) {
  return (
    <section id="workouts" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Life With FitFlow</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover a comprehensive wellness platform designed to help you achieve your fitness goals and improve your overall wellbeing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.length > 0 ? (
            features.map(feature => (
              <div 
                key={feature.id} 
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))
          ) : (
            <div className="col-span-4 text-center py-12">
              <div className="animate-pulse flex justify-center">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Features;