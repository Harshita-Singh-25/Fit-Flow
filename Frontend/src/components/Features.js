import React from 'react';
import { FaDumbbell, FaHeartbeat, FaUserFriends, FaCalendarCheck } from 'react-icons/fa';

function Features({ features = defaultFeatures }) {
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
          {features.map(feature => (
            <div 
              key={feature.id} 
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 text-purple-600">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const defaultFeatures = [
  {
    id: 1,
    icon: <FaDumbbell />,
    title: 'Custom Workouts',
    description: 'Access personalized workout plans tailored to your fitness goals and experience level.'
  },
  {
    id: 2,
    icon: <FaHeartbeat />,
    title: 'Health Tracking',
    description: 'Monitor your progress with comprehensive health and fitness tracking tools.'
  },
  {
    id: 3,
    icon: <FaUserFriends />,
    title: 'Expert Guidance',
    description: 'Get support from certified trainers and connect with a community of fitness enthusiasts.'
  },
  {
    id: 4,
    icon: <FaCalendarCheck />,
    title: 'Flexible Planning',
    description: 'Create and manage your workout schedule with our easy-to-use planning tools.'
  }
];

export default Features;