import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        // Contenedor principal del Navbar.
        // Posicionamiento fijo en la parte superior, centrado horizontalmente.
        // Ancho limitado para que sea un "pequeño coso".
        // z-50 para asegurar que siempre esté por encima de otros elementos.
        // rounded-3xl para un redondeo elegante.
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 max-w-fit px-32 py-2 shadow-2xl rounded-3xl overflow-hidden z-50"
             style={{
                 // Fondo con degradado verde muy sutil y mayor transparencia para el efecto glassmorphism.
                 background: 'linear-gradient(to right, rgba(144, 238, 144, 0.8), rgba(60, 179, 113, 0.7))', // Verde claro a medio con más transparencia
                 // Efecto de desenfoque y saturación para el "cristal".
                 backdropFilter: 'blur(18px) saturate(150%)', // Mayor desenfoque para un efecto más suave
                 WebkitBackdropFilter: 'blur(18px) saturate(150%)', // Prefijo para compatibilidad
                 // Bordes sutiles para el efecto de cristal.
                 border: '1px solid rgba(255, 255, 255, 0.8)', // Borde blanco muy sutil
                 // Sombra más pronunciada para dar la sensación de flotar.
                 boxShadow: '0 10px 40px 0 rgba(0, 0, 0, 0.1)' // Sombra más grande y oscura
             }}
        >
            {/* Elementos decorativos para un brillo sutil, simulando la luz en el cristal */}
            <div className="absolute top-0 left-0 w-full h-full"
                 style={{
                     background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 50%)',
                     pointerEvents: 'none', // No interfiere con los clics
                     borderRadius: 'inherit' // Hereda el redondeo del padre
                 }}>
            </div>

            {/* Contenedor del contenido del Navbar, asegura que el texto esté por encima de los efectos */}
            <div className="flex justify-between items-center space-x-8 relative z-10">
                {/* Nombre de la marca */}
                <div className=" text-emerald-600 text-3xl font-bold font-serif tracking-wide drop-shadow-md">
                    Bachue AI
                </div>

                {/* Contenedor de los enlaces de navegación */}
                <div className="flex space-x-4"> {/* Espacio entre los enlaces */}
                    {/* Enlace "Nosotros" */}
                    <Link
                        to="/"
                        className="text-emerald-500 text-lg font-medium px-5 py-2
                                   hover:bg-white hover:bg-opacity-25 hover:text-white
                                   transition duration-300 ease-in-out
                                   flex items-center justify-center"
                    >
                        Nosotros
                    </Link>
                    {/* Enlace "Empezar" */}
                    <Link
                        to="/inicio"
                        className="text-emerald-500 text-lg font-medium px-5 py-2
                                   hover:bg-white hover:bg-opacity-25 hover:text-white
                                   transition duration-300 ease-in-out
                                   flex items-center justify-center"
                    >
                        Empezar
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

