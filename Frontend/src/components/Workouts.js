import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorkoutLibrary = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    type: '',
    difficulty: '',
    bodyPart: ''
  });
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  // Fetch workouts from ExerciseDB API
  const fetchWorkouts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://exercisedb.p.rapidapi.com/exercises', {
        headers: {
          'x-rapidapi-key': '4825ac50ccmsh6b1710eae6e6cf0p13d2fdjsn932f05cdfdb2',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        },
        params: {
          pageNumber: page,
          type: filters.type || undefined,
          difficulty: filters.difficulty || undefined,
          bodyPart: filters.bodyPart || undefined
        }
      });
      
      setWorkouts(response.data);
      // Here, setPages logic would need to adjust based on the API response
      setPages(5);  // Example page count, you can adjust it based on your pagination logic.
      setLoading(false);
    } catch (error) {
      setError('Failed to load workouts');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, [page, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    setPage(1); // Reset to first page when filters change
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Workout Library</h2>
        
        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">All Types</option>
            <option value="Yoga">Yoga</option>
            <option value="HIIT">HIIT</option>
            <option value="Meditation">Meditation</option>
            <option value="Strength">Strength</option>
            <option value="Cardio">Cardio</option>
            <option value="Flexibility">Flexibility</option>
          </select>
          
          <select
            name="difficulty"
            value={filters.difficulty}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">All Difficulties</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          
          <select
            name="bodyPart"
            value={filters.bodyPart}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">All Body Parts</option>
            <option value="back">Back</option>
            <option value="cardio">Cardio</option>
            <option value="chest">Chest</option>
            <option value="lower arms">Lower Arms</option>
            <option value="lower legs">Lower Legs</option>
            <option value="shoulders">Shoulders</option>
            <option value="upper arms">Upper Arms</option>
            <option value="upper legs">Upper Legs</option>
            <option value="waist">Waist</option>
          </select>
        </div>
        
        {/* Workout Grid */}
        {workouts.length === 0 ? (
          <div className="text-center text-gray-600">
            No workouts found matching your criteria.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workouts.map((workout) => (
                <div 
                  key={workout.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative pb-2/3 h-48 bg-gray-200">
                    {workout.locked ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="text-white text-center p-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          <p className="font-medium">Upgrade to {workout.requiresSubscription}</p>
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={workout.gifUrl} 
                        alt={workout.name} 
                        className="absolute h-full w-full object-cover"
                        onError={(e) => {
                          e.target.src = '/api/placeholder/400/300'; // Fallback image
                        }}
                      />
                    )}
                  </div>
                  

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 text-xs font-bold rounded ${
                        workout.type === 'Yoga' ? 'bg-green-100 text-green-800' :
                        workout.type === 'HIIT' ? 'bg-red-100 text-red-800' :
                        workout.type === 'Meditation' ? 'bg-blue-100 text-blue-800' :
                        workout.type === 'Strength' ? 'bg-purple-100 text-purple-800' :
                        workout.type === 'Cardio' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {workout.type}
                      </span>
                      <span className={`px-2 py-1 text-xs font-bold rounded ${
                        workout.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        workout.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {workout.difficulty}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-1">{workout.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{workout.bodyPart} • {workout.duration} mins</p>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">{workout.description}</p>
                    
                    <button 
                      className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                        workout.locked ? 
                        'bg-gray-400 cursor-not-allowed' : 
                        'bg-purple-600 hover:bg-purple-700'
                      }`}
                      disabled={workout.locked}
                    >
                      {workout.locked ? 'Locked' : 'View Details'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            {pages > 1 && (
              <div className="mt-8 flex justify-center">
                <div className="flex">
                  <button 
                    onClick={() => setPage(old => Math.max(old - 1, 1))} 
                    disabled={page === 1}
                    className="px-4 py-2 border border-gray-300 rounded-l-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  
                  {[...Array(pages).keys()].map(x => (
                    <button
                      key={x + 1}
                      onClick={() => setPage(x + 1)}
                      className={`px-4 py-2 border-t border-b border-gray-300 ${
                        page === x + 1 ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {x + 1}
                    </button>
                  ))}
                  
                  <button 
                    onClick={() => setPage(old => Math.min(old + 1, pages))} 
                    disabled={page === pages}
                    className="px-4 py-2 border border-gray-300 rounded-r-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default WorkoutLibrary;
