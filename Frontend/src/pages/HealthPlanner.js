import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HealthPlanner() {
  const [plans, setPlans] = useState({ diet: [], workout: [] });
  const [newPlan, setNewPlan] = useState({ type: 'diet', title: '', description: '' });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/health-plans');
      setPlans(response.data);
    } catch (error) {
      console.error('Error fetching plans:', error);
      setMessage({ text: 'Failed to load plans. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/health-plans', newPlan);
      
      setPlans(prev => ({
        ...prev,
        [newPlan.type]: [...prev[newPlan.type], response.data]
      }));
      
      setNewPlan({ type: 'diet', title: '', description: '' });
      setMessage({ text: 'Plan added successfully!', type: 'success' });
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setMessage({ text: '', type: '' });
      }, 3000);
    } catch (error) {
      console.error('Error adding plan:', error);
      setMessage({ text: 'Failed to add plan. Please try again.', type: 'error' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Health Planner</h1>
        
        {message.text && (
          <div className={`mb-4 p-4 rounded ${
            message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {message.text}
          </div>
        )}
        
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
            {plans.diet.length === 0 ? (
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
            {plans.workout.length === 0 ? (
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