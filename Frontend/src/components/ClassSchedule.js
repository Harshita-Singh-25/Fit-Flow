import React, { useState } from 'react';

function ClassSchedule({ schedules }) {
  const [selectedDay, setSelectedDay] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  
  const days = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const types = ['All', 'Yoga', 'HIIT', 'Meditation'];
  
  const filteredSchedules = schedules.filter(schedule => {
    return (selectedDay === 'All' || schedule.day === selectedDay) &&
           (selectedType === 'All' || schedule.type === selectedType);
  });
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Class Schedule</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect class to fit your schedule. Filter by day or class type to find what works for you.
          </p>
        </div>
        
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Day</label>
            <select 
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              {days.map(day => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Class Type</label>
            <select 
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Day</th>
                <th className="py-3 px-4 text-left">Time</th>
                <th className="py-3 px-4 text-left">Class</th>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Instructor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredSchedules.length > 0 ? (
                filteredSchedules.map(schedule => (
                  <tr key={schedule.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">{schedule.day}</td>
                    <td className="py-3 px-4">{schedule.time}</td>
                    <td className="py-3 px-4">{schedule.class}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        schedule.type === 'Yoga' ? 'bg-green-100 text-green-800' :
                        schedule.type === 'HIIT' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {schedule.type}
                      </span>
                    </td>
                    <td className="py-3 px-4">{schedule.instructor}</td>
                  </tr>
                ))
              ) : schedules.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-12 text-center text-gray-500">
                    Loading schedule...
                  </td>
                </tr>
              ) : (
                <tr>
                  <td colSpan="5" className="py-12 text-center text-gray-500">
                    No classes found for the selected filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ClassSchedule;