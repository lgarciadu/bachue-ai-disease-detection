import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-white text-lg font-bold">Bachue AI</div>
                <div>
                    <Link to="/" className="text-gray-300 hover:text-white px-4">Home</Link>
                    <Link to="/crop-recommendation" className="text-gray-300 hover:text-white px-4">Crop Recommendations</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;