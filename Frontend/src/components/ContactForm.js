import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required');
      setIsSubmitting(false);
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        setError('Please enter a valid email');
        setIsSubmitting(false);
        return;
      }
      
      // Mock API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({name: '', email: '', message: ''});
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    };
    
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions? Want to learn more about our services? Reach out and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            {isSubmitted ? (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
                <p className="font-semibold">Thank you for your message!</p>
                <p>We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
                    <p>{error}</p>
                  </div>
                )}
                
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : "Reach Out"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    );
  }
  
  export default ContactForm;
  