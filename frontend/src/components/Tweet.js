import React from 'react';

function Tweet() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          Tailwind CSS is working!
        </h1>
        <p className="mt-4 text-center text-white-700">
          This is a simple demo to check if Tailwind CSS is working correctly.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-2 text-black bg-blue-500 hover:bg-blue-700 rounded-full">
            Button 1
          </button>
          <button className="px-6 py-2 text-black bg-green-500 hover:bg-green-700 rounded-full">
            Button 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
