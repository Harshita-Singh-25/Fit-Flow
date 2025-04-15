import React from 'react';
import Hero from '../components/Hero';
import Header from '../Header';
import Features from '../components/Features';
import Footer from '../components/Footer';

const HomePage = ({ features, schedules, trainers, plans, testimonials }) => {
  return (
    <>
      <Hero />
      <Features features={features} />
      <Footer />
    </>
  );
};

export default HomePage;
