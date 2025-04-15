import React from 'react';
import Header from '../Header';
import Footer from '../components/Footer';
import Workouts from '../components/Workouts'; // Import the actual component

const WorkoutLibraryPage = ({ schedules }) => {
  return (
    <>
      <Header />
      <Workouts schedules={schedules} />
      <Footer />
    </>
  );
};

export default WorkoutLibraryPage;
