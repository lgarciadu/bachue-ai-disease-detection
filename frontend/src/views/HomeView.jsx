import React from 'react';
import plantImg from '../assets/plant.png'; // Asegúrate de que esta ruta sea correcta

const HomeView = () => {
    // Estilos de glassmorphism base reutilizables para las tarjetas
    const glassmorphismBaseCardStyle = {
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))', // Fondo blanco muy transparente
        backdropFilter: 'blur(20px) saturate(180%)', // Desenfoque fuerte para el cristal
        WebkitBackdropFilter: 'blur(20px) saturate(180%)', // Prefijo para compatibilidad
        boxShadow: '0 15px 50px 0 rgba(0, 0, 0, 0.2)' // Sombra más grande y difusa
    };

    return (
        // Contenedor principal de la vista.
        // Ocupa toda la altura disponible (ajustada por el padding del App.jsx).
        // Flexbox para centrar el contenido vertical y horizontalmente.
        // Posicionamiento relativo para los elementos decorativos.
        // Aplica la fuente Tinos a toda la vista.
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-7rem)] relative overflow-hidden px-4 sm:px-6 lg:px-8 font-serif">
            {/*
                Elementos decorativos de fondo (ondas o formas sutiles)
                para realzar el efecto glassmorphism y la temática campestre.
                Hemos añadido un tono tierra (ámbar) para complementar los verdes.
            */}
            {/* Onda superior izquierda (verde) */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            {/* Onda inferior derecha (verde) */}
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            {/* Onda central (verde más claro) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            {/* Nueva Onda (tono tierra/ámbar) */}
            <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-6000"></div>


            {/*
                Contenedor de la cuadrícula (grid) para las tarjetas de glassmorphism.
                - grid grid-cols-1: Una columna por defecto en móviles.
                - md:grid-cols-2: Dos columnas en pantallas medianas.
                - lg:grid-cols-3: Tres columnas en pantallas grandes.
                - gap-8: Espacio entre las tarjetas.
                - max-w-6xl mx-auto: Ancho máximo y centrado para la cuadrícula.
                - py-12: Padding vertical para separar del Navbar y el borde inferior.
                - w-full: Asegura que la cuadrícula ocupe el ancho disponible.
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto py-12 w-full">

                {/* Tarjeta 1: Título e Imagen */}
                {/* Ocupa 2 columnas en md, 1 columna en lg. Formas asimétricas para elegancia. */}
                <div
                    className="md:col-span-2 lg:col-span-1 p-8 text-center
                                rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg
                                shadow-xl flex flex-col items-center justify-center
                                transition-all duration-300 ease-in-out hover:scale-105
                                animate-card-fade-in-up animation-delay-100" // Animación de entrada
                    style={{
                        ...glassmorphismBaseCardStyle,
                        border: '1px solid rgba(255, 255, 255, 0.3)' // Borde blanco sutil
                    }}
                >
                    <img
                        src={plantImg}
                        alt="Fresh Plant"
                        className="w-40 h-40 mx-auto mb-6 object-contain drop-shadow-lg"
                    />
                    <h1 className="text-4xl sm:text-4xl font-bold text-green-900 leading-tight drop-shadow-md">
                        Bienvenidos a <span className="text-green-700">Bachue AI</span>
                    </h1>
                </div>

                {/* Tarjeta 2: Descripción del Proyecto (con sombra café sutil) */}
                {/* Ocupa 2 columnas en md y lg. Formas asimétricas opuestas. */}
                <div
                    className="md:col-span-2 lg:col-span-2 p-8 text-left
                                rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg
                                shadow-xl flex flex-col justify-center
                                transition-all duration-300 ease-in-out hover:scale-105
                                animate-card-fade-in-up animation-delay-300" // Animación de entrada con delay
                    style={{
                        ...glassmorphismBaseCardStyle,
                        border: '1px solid rgba(255, 255, 255, 0.3)', // Borde blanco sutil
                        // Sombra adicional con un toque café
                        boxShadow: `${glassmorphismBaseCardStyle.boxShadow}, 0 0 25px 5px rgba(139, 69, 19, 0.08)` // Sombra café difusa
                    }}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4 drop-shadow-sm">
                        Nuestro Propósito
                    </h2>
                    <p className="text-gray-800 text-lg sm:text-xl leading-relaxed">
                        El objetivo del proyecto Bachué es desarrollar un sistema de detección automática de
                        enfermedades en hojas de papa a partir de imágenes tomadas con dispositivos móviles,
                        utilizando modelos de visión por computador como YOLO, con el fin de brindar diagnósticos
                        rápidos y accesibles a pequeños agricultores.
                    </p>
                </div>

                {/* Tarjeta 3: Integrantes (con borde café sutil y nueva forma) */}
                {/* Nueva forma más orgánica: esquinas superior izquierda e inferior derecha muy redondeadas. */}
                <div
                    className="p-8 text-center
                                rounded-3xl rounded-tl-[4rem] rounded-br-[4rem]
                                shadow-xl flex flex-col items-center justify-center
                                transition-all duration-300 ease-in-out hover:scale-105
                                animate-card-fade-in-up animation-delay-500" // Animación de entrada con delay
                    style={{
                        ...glassmorphismBaseCardStyle,
                        border: '1px solid rgba(139, 69, 19, 0.2)' // Borde café sutil
                    }}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4 drop-shadow-sm">
                        Nuestro Equipo
                    </h2>
                    <div className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        <p>Lizeth Mariana Garcia</p>
                        <p>Nicolas Felipe Arciniegas Lizarazo</p>
                        <p>Juan David Guarnizo</p>
                        <p>Diego Andres Alvarez Gonzalez</p>
                    </div>
                </div>

            </div>

            {/*
                Estilos para las animaciones.
                - @keyframes blob: Animación para los elementos decorativos de fondo.
                - @keyframes card-fade-in-up: Nueva animación para las tarjetas de contenido.
            */}
            <style>
                {`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9);
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animation-delay-6000 {
                    animation-delay: 6s;
                }

                /* Nueva animación para las tarjetas: se desvanecen y suben ligeramente al cargar */
                @keyframes card-fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-card-fade-in-up {
                    animation: card-fade-in-up 0.7s ease-out forwards; /* Duración y tipo de curva */
                }
                /* Clases para los retrasos de animación de las tarjetas */
                .animation-delay-100 { animation-delay: 0.1s; }
                .animation-delay-300 { animation-delay: 0.3s; }
                .animation-delay-500 { animation-delay: 0.5s; }
                `}
            </style>
        </div>
    );
};

export default HomeView;

