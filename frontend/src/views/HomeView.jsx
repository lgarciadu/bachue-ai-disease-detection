import React from 'react';
import plantImg from '../assets/plant.png';

const HomeView = () => {
    return (
        <div className="flex flex-col justify-between items-center h-screen bg-green-50 relative overflow-hidden">

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center text-center px-9 py-20">
                {/* Plant image */}
                <img
                    src={plantImg}
                    alt="Fresh Plant"
                    className="w-40 h-40 mb-4"
                />

                {/* Title */}
                <h1 className="text-2xl font-bold text-green-600 mb-8">Bienvenidos a Bachue AI</h1>

                {/* Description */}
                <p className="text-gray-500 text-md mb-24">
                    El objetivo del proyecto Bachué es desarrollar un
                    sistema de detección automática de
                    enfermedades en hojas de papa a partir de
                    imágenes tomadas con dispositivos móviles,
                    utilizando modelos de visión por computador
                    como YOLO, con el fin de brindar diagnósticos
                    rápidos y accesibles a pequeños agricultores.
                </p>

                {/* Integrantes */}
                <p className="text-gray-500 text-sm mb-4">
                    <strong>Integrantes:</strong><br />
                    Lizeth Mariana Garcia <br />
                    Nicolas Felipe Arciniegas Lizarazo<br />
                    Juan David Guarnizo<br />
                    Diego Andres Alvarez Gonzalez<br />
                </p>

            </div>

            {/* Decorative Waves at Bottom */}
            <div className="absolute bottom-0 left-0 w-full">
                <svg
                    viewBox="0 0 1440 320"
                    className="w-full h-64"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#22c55e"
                        fillOpacity="1"
                        d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,154.7C672,149,768,139,864,138.7C960,139,1056,149,1152,154.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default HomeView;
