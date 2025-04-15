import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">FitFlow</h3>
            <p className="mb-4 text-gray-400">
              Transform your life with our comprehensive wellness platform designed to help you achieve your fitness goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#workouts" className="text-gray-400 hover:text-white transition duration-300">Workouts</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-white transition duration-300">Trainers</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition duration-300">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Download Our App</h4>
            <p className="text-gray-400 mb-4">Get the FitFlow experience on your mobile device.</p>
            <div className="space-y-3">
              <a href="#" className="flex items-center border border-gray-700 rounded-lg px-4 py-2 hover:bg-gray-800 transition duration-300">
                <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.9 19.9l-3.6-3.6L5 25c.6.6 1.5 1 2.5 1l11-6.1zm-1.7-7.7l-2.5-2.5-2.4-2.4-3.1 3.1 5.5 5.5 3.1-3.1c.8-.8.8-2.1 0-2.9-1.1-.7-1.4.3-.6.3zm-4.9-4.9L8.1 4.1 6.4 5.8l4.2 4.2 1.4-1.4c.8-.8.8-2.1 0-2.9-.8-.8-2.1-.8-2.9 0l-3.6 3.6L1 25l16.3-16.3-6-6-1 1z" />
                </svg>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center border border-gray-700 rounded-lg px-4 py-2 hover:bg-gray-800 transition duration-300">
                <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5V3.5c0-.96.72-1.76 1.66-1.89l.15-.01c.33 0 .65.1.92.26l.13.07 7.05 4.11c.45.26.8.7.95 1.2a2 2 0 01-.95 2.31L7.8 12l5.11 2.84c.9.5 1.24 1.63.75 2.52-.23.42-.6.73-1.04.87l-.15.03-7.05 4.11c-.28.16-.59.25-.92.25h-.15a1.9 1.9 0 01-1.66-1.89v.77z" />
                </svg>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 FitFlow. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white mx-2 transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2 transition duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2 transition duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;