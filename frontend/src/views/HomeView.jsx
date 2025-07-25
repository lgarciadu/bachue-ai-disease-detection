import React from 'react';

const HomeView = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to Bachue AI Disease Detection</h1>
            <p className="text-lg mb-8">Upload an image of your crops to get disease predictions and recommendations.</p>
            <a href="/upload" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Get Started
            </a>
        </div>
    );
};

export default HomeView;