import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaCheck, FaTimes } from 'react-icons/fa';

function Pricing({ plans, user }) {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('fitflow_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (plan) => {
    const updatedCart = [...cart, plan];
    setCart(updatedCart);
    localStorage.setItem('fitflow_cart', JSON.stringify(updatedCart));
    setShowCart(true);
  };

  const removeFromCart = (planId) => {
    const updatedCart = cart.filter(item => item.id !== planId);
    setCart(updatedCart);
    localStorage.setItem('fitflow_cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    setIsProcessing(true);
    // Simulate checkout process
    setTimeout(() => {
      setCart([]);
      localStorage.removeItem('fitflow_cart');
      setShowCart(false);
      setIsProcessing(false);
      navigate('/profile');
    }, 1500);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price;
    }, 0);
  };

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
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => addToCart(plan)}
                      className={`flex-1 py-3 px-4 rounded-lg font-semibold transition duration-300 ${
                        plan.isPopular 
                          ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                      }`}
                    >
                      Add to Cart
                    </button>
                    {user && (
                      <button 
                        onClick={() => navigate('/profile')}
                        className="py-3 px-4 rounded-lg font-semibold transition duration-300 bg-indigo-600 hover:bg-indigo-700 text-white"
                      >
                        View Profile
                      </button>
                    )}
                  </div>
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

        {/* Shopping Cart */}
        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold flex items-center">
                  <FaShoppingCart className="mr-2" /> Your Cart
                </h3>
                <button 
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </button>
              </div>
              
              {cart.length > 0 ? (
                <>
                  <div className="border-t border-b border-gray-200 py-4 mb-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center mb-2">
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-500">{item.price}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Total:</span>
                    <span className="font-bold">${calculateTotal().toFixed(2)}</span>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    disabled={isProcessing}
                    className="w-full py-3 px-4 rounded-lg font-semibold transition duration-300 bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center"
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <FaCheck className="mr-2" /> Checkout
                      </>
                    )}
                  </button>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <button
                    onClick={() => setShowCart(false)}
                    className="py-2 px-4 rounded-lg font-semibold transition duration-300 bg-gray-200 hover:bg-gray-300 text-gray-800"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Pricing;