import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-[#22c55e] p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-white text-2xl font-bold">Bachue AI</div>
                <div>
                    <Link to="/" className="text-white text-lg hover:text-green-100 px-4">Nosotros</Link>
                    <Link to="/inicio" className="text-white text-lg hover:text-green-100 px-4">Empezar</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;