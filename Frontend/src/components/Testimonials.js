import React from 'react';

function Testimonials({ testimonials }) {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Members Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read about how FitFlow has transformed the lives of our community members.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.length > 0 ? (
            testimonials.map(testimonial => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex mt-1">
                      {Array(5).fill().map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.text}</p>
              </div>
            ))
          ) : (
            Array(3).fill().map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 animate-pulse">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div className="ml-4">
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="flex space-x-1">
                      {Array(5).fill().map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-gray-300 rounded"></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
