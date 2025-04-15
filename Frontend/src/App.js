// src/App.js
import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ClassSchedule from './components/ClassSchedule';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [features, setFeatures] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [plans, setPlans] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  
  useEffect(() => {
    // Mocking API calls with setTimeout
    setTimeout(() => {
      setFeatures([
        { id: 1, icon: '🧘', title: 'Yoga Routines', description: 'For all levels from beginner to advanced' },
        { id: 2, icon: '🏋️', title: 'Guided HIIT', description: 'High intensity interval training for maximum results' },
        { id: 3, icon: '🍎', title: 'Wellness Tips', description: 'Daily nutrition and wellness advice' },
        { id: 4, icon: '📅', title: 'Personalized Plans', description: 'Custom workout schedules tailored to your goals' }
      ]);
      
      setSchedules([
        { id: 1, day: 'Monday', time: '7:00 AM', class: 'Morning Yoga', type: 'Yoga', instructor: 'Sarah' },
        { id: 2, day: 'Monday', time: '9:00 AM', class: 'HIIT Blast', type: 'HIIT', instructor: 'Mike' },
        { id: 3, day: 'Monday', time: '6:00 PM', class: 'Evening Meditation', type: 'Meditation', instructor: 'Lisa' },
        { id: 4, day: 'Tuesday', time: '8:00 AM', class: 'Power Yoga', type: 'Yoga', instructor: 'John' },
        { id: 5, day: 'Tuesday', time: '5:30 PM', class: 'Cardio Rush', type: 'HIIT', instructor: 'Mike' },
        { id: 6, day: 'Wednesday', time: '7:00 AM', class: 'Morning Yoga', type: 'Yoga', instructor: 'Sarah' },
        { id: 7, day: 'Wednesday', time: '12:00 PM', class: 'Lunchtime Meditation', type: 'Meditation', instructor: 'Lisa' },
        { id: 8, day: 'Thursday', time: '6:00 AM', class: 'HIIT Express', type: 'HIIT', instructor: 'Mike' },
        { id: 9, day: 'Thursday', time: '7:30 PM', class: 'Restorative Yoga', type: 'Yoga', instructor: 'John' },
        { id: 10, day: 'Friday', time: '8:00 AM', class: 'Full Body HIIT', type: 'HIIT', instructor: 'Mike' },
        { id: 11, day: 'Friday', time: '5:00 PM', class: 'Weekend Wind-Down', type: 'Meditation', instructor: 'Lisa' },
        { id: 12, day: 'Saturday', time: '9:00 AM', class: 'Weekend Warrior', type: 'HIIT', instructor: 'Mike' },
        { id: 13, day: 'Saturday', time: '11:00 AM', class: 'Flow Yoga', type: 'Yoga', instructor: 'Sarah' },
        { id: 14, day: 'Sunday', time: '10:00 AM', class: 'Sunday Stretch', type: 'Yoga', instructor: 'John' },
        { id: 15, day: 'Sunday', time: '5:00 PM', class: 'Mindful Meditation', type: 'Meditation', instructor: 'Lisa' }
      ]);
      
      setTrainers([
        { 
          id: 1, 
          name: 'Sarah Johnson', 
          image: '/api/placeholder/300/300', 
          specialization: 'Yoga', 
          bio: 'Certified yoga instructor with 10+ years of experience in Hatha and Vinyasa yoga.' 
        },
        { 
          id: 2, 
          name: 'Mike Chen', 
          image: '/api/placeholder/300/300', 
          specialization: 'HIIT & Strength', 
          bio: 'Former athlete turned trainer, specializing in high-intensity workouts and strength conditioning.' 
        },
        { 
          id: 3, 
          name: 'Lisa Patel', 
          image: '/api/placeholder/300/300', 
          specialization: 'Meditation & Wellness', 
          bio: 'Mindfulness expert and holistic health coach focused on mental wellbeing and stress reduction.' 
        },
        { 
          id: 4, 
          name: 'John Smith', 
          image: '/api/placeholder/300/300', 
          specialization: 'Yoga & Flexibility', 
          bio: 'Expert in restorative yoga and mobility training, helping clients improve flexibility and reduce pain.' 
        }
      ]);
      
      setPlans([
        {
          id: 1,
          name: 'Free',
          price: '$0',
          features: [
            'Access to 5 basic workout videos',
            'Limited wellness articles',
            'Basic progress tracking',
            'Ad-supported experience'
          ],
          isPopular: false
        },
        {
          id: 2,
          name: 'Pro',
          price: '$9.99/month',
          features: [
            'Unlimited workout access',
            'Personalized workout plans',
            'Ad-free experience',
            'Progress tracking and analytics',
            'Access to live classes'
          ],
          isPopular: true
        },
        {
          id: 3,
          name: 'Premium',
          price: '$19.99/month',
          features: [
            'Everything in Pro plan',
            '1-on-1 virtual coaching session monthly',
            'Nutrition planning tools',
            'Priority support',
            'Early access to new features',
            'Offline downloads'
          ],
          isPopular: false
        }
      ]);
      
      setTestimonials([
        {
          id: 1,
          name: 'Emma R.',
          image: '/api/placeholder/100/100',
          rating: 5,
          text: 'FitFlow transformed my approach to fitness. The yoga classes are amazing and I love the personalized plans!'
        },
        {
          id: 2,
          name: 'David T.',
          image: '/api/placeholder/100/100',
          rating: 5,
          text: 'As someone who travels a lot, having FitFlow is like carrying a personal trainer in my pocket. Worth every penny!'
        },
        {
          id: 3,
          name: 'Maria C.',
          image: '/api/placeholder/100/100',
          rating: 4,
          text: "'The HIIT workouts are challenging but effective. I've seen major improvements in just 2 months.'"
        }
      ]);
    }, 500);
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Features features={features} />
      <ClassSchedule schedules={schedules} />
      <Trainers trainers={trainers} />
      <Pricing plans={plans} />
      <Testimonials testimonials={testimonials} />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

// src/components/Header.js
// src/components/Hero.js
// src/components/Features.js
// src/components/ClassSchedule.js
// src/components/Trainers.js


// src/components/Pricing.js


// src/components/Testimonials.js

// src/components/ContactForm.js
