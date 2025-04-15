import React from 'react';

function Pricing({ plans }) {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include access to our mobile app.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {plans.length > 0 ? (
            plans.map(plan => (
              <div 
                key={plan.id} 
                className={`flex-1 max-w-sm mx-auto lg:mx-0 rounded-lg shadow-lg overflow-hidden transform transition duration-300 ${
                  plan.isPopular ? 'lg:scale-105 border-2 border-purple-500 shadow-xl' : ''
                }`}
              >
                {plan.isPopular && (
                  <div className="bg-purple-500 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-6">{plan.price}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition duration-300 ${
                      plan.isPopular 
                        ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                    }`}
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            Array(3).fill().map((_, index) => (
              <div key={index} className="flex-1 max-w-sm mx-auto lg:mx-0 rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="p-8">
                  <div className="h-8 bg-gray-300 rounded w-1/2 mb-4"></div>
                  <div className="h-10 bg-gray-300 rounded w-1/3 mb-6"></div>
                  <div className="space-y-3 mb-8">
                    {Array(4).fill().map((_, i) => (
                      <div key={i} className="h-4 bg-gray-300 rounded w-full"></div>
                    ))}
                  </div>
                  <div className="h-12 bg-gray-300 rounded w-full"></div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Pricing;