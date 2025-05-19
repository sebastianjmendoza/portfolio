
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404: Page Not Found</h1>
      <p className="text-gray-600 mb-8">Sorry, the page you are looking for doesn't exist.</p>
      <a 
        href="/" 
        className="px-6 py-3 bg-black text-white rounded-md hover:bg-white hover:text-black border border-black transition-colors"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
