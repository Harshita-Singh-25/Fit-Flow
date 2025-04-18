import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaEnvelope, FaCalendarAlt, FaDumbbell, FaChartLine } from 'react-icons/fa';

function UserProfile({ user }) {
  const [userPlans, setUserPlans] = useState([]);
  const [workoutStats, setWorkoutStats] = useState({
    totalWorkouts: 0,
    completedWorkouts: 0,
    streak: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    // Simulate fetching user data and plans
    const fetchUserData = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await axios.get(`http://localhost:5000/api/users/${user.id}/profile`);
        
        // Mock data for demonstration
        setTimeout(() => {
          setUserPlans([
            {
              id: 2,
              name: 'Pro',
              price: '$9.99/month',
              purchaseDate: '2023-08-15',
              renewalDate: '2023-09-15',
              status: 'Active'
            }
          ]);
          
          setWorkoutStats({
            totalWorkouts: 24,
            completedWorkouts: 18,
            streak: 5
          });
          
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [user, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
            <h3 className="text-lg leading-6 font-medium">User Profile</h3>
            <p className="mt-1 max-w-2xl text-sm opacity-90">
              Your personal information and subscription details
            </p>
          </div>
          
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 flex items-center">
                  <FaUser className="mr-2" /> Username
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.username}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 flex items-center">
                  <FaEnvelope className="mr-2" /> Email
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 flex items-center">
                  <FaCalendarAlt className="mr-2" /> Member Since
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {new Date().toLocaleDateString()}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Workout Stats */}
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
            <h3 className="text-lg leading-6 font-medium">Your Fitness Journey</h3>
            <p className="mt-1 max-w-2xl text-sm opacity-90">
              Track your progress and achievements
            </p>
          </div>
          <div className="border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
              <div className="bg-indigo-50 rounded-lg p-6 text-center">
                <FaDumbbell className="mx-auto h-8 w-8 text-indigo-500 mb-2" />
                <h4 className="text-lg font-semibold text-indigo-700">{workoutStats.totalWorkouts}</h4>
                <p className="text-sm text-gray-600">Total Workouts</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <FaChartLine className="mx-auto h-8 w-8 text-green-500 mb-2" />
                <h4 className="text-lg font-semibold text-green-700">{workoutStats.completedWorkouts}</h4>
                <p className="text-sm text-gray-600">Completed Workouts</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 text-center">
                <FaCalendarAlt className="mx-auto h-8 w-8 text-purple-500 mb-2" />
                <h4 className="text-lg font-semibold text-purple-700">{workoutStats.streak}</h4>
                <p className="text-sm text-gray-600">Day Streak</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
            <h3 className="text-lg leading-6 font-medium">Your Subscription Plans</h3>
            <p className="mt-1 max-w-2xl text-sm opacity-90">
              Manage your active subscriptions
            </p>
          </div>
          <div className="border-t border-gray-200">
            {userPlans.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Plan
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Purchase Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Renewal Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {userPlans.map((plan) => (
                      <tr key={plan.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{plan.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{plan.price}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{plan.purchaseDate}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{plan.renewalDate}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {plan.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-6 text-center">
                <p className="text-gray-500">You don't have any active subscription plans.</p>
                <button
                  onClick={() => navigate('/pricing')}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Browse Plans
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile; 