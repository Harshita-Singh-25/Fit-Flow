import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HealthPlanner() {
  const [plans, setPlans] = useState({ diet: [], workout: [] });
  const [newPlan, setNewPlan] = useState({ type: 'diet', title: '', description: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await axios.get('/api/health-plans');
      setPlans(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching plans:', error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/health-plans', newPlan);
      setPlans(prev => ({
        ...prev,
        [newPlan.type]: [...prev[newPlan.type], response.data]
      }));
      setNewPlan({ type: 'diet', title: '', description: '' });
    } catch (error) {
      console.error('Error adding plan:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Health Planner</h1>
        
        {/* Add New Plan Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Plan</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Plan Type</label>
              <select
                value={newPlan.type}
                onChange={(e) => setNewPlan({ ...newPlan, type: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              >
                <option value="diet">Diet Plan</option>
                <option value="workout">Workout Plan</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={newPlan.title}
                onChange={(e) => setNewPlan({ ...newPlan, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={newPlan.description}
                onChange={(e) => setNewPlan({ ...newPlan, description: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                rows="3"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Add Plan
            </button>
          </form>
        </div>

        {/* Display Plans */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Diet Plans */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Diet Plans</h2>
            {loading ? (
              <p>Loading...</p>
            ) : plans.diet.length === 0 ? (
              <p className="text-gray-500">No diet plans added yet.</p>
            ) : (
              <div className="space-y-4">
                {plans.diet.map((plan) => (
                  <div key={plan._id} className="border-b pb-4">
                    <h3 className="font-medium">{plan.title}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Workout Plans */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Workout Plans</h2>
            {loading ? (
              <p>Loading...</p>
            ) : plans.workout.length === 0 ? (
              <p className="text-gray-500">No workout plans added yet.</p>
            ) : (
              <div className="space-y-4">
                {plans.workout.map((plan) => (
                  <div key={plan._id} className="border-b pb-4">
                    <h3 className="font-medium">{plan.title}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthPlanner; 