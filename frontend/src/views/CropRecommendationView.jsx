import React, { useState, useRef } from 'react';

const CropRecommendationView = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fileInputRef = useRef(null);
    const cameraInputRef = useRef(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // Para mostrar la imagen seleccionada

    // Estilos de glassmorphism base reutilizables para las tarjetas
    const glassmorphismBaseCardStyle = {
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))', // Fondo blanco muy transparente
        backdropFilter: 'blur(20px) saturate(180%)', // Desenfoque fuerte para el cristal
        WebkitBackdropFilter: 'blur(20px) saturate(180%)', // Prefijo para compatibilidad
        boxShadow: '0 15px 50px 0 rgba(0, 0, 0, 0.2)' // Sombra más grande y difusa
    };

    // Evento que envia la imagen seleccionada al backend
    const handleFileSelect = async (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file)); // Muestra la imagen seleccionada
            setLoading(true);
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('http://localhost:8000/predict/', {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                setResult(data);
            } catch (error) {
                // En lugar de alert, usamos un mensaje en la UI
                setResult({ error: 'Error al analizar la imagen. Por favor, inténtalo de nuevo.' });
            } finally {
                setLoading(false);
            }
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
        setIsModalOpen(false);
    };

    const handleCameraClick = () => {
        cameraInputRef.current.click();
        setIsModalOpen(false);
    };

    return (
        // Contenedor principal de la vista.
        // Aplica el fondo degradado y las animaciones de ondas como en HomeView.
        // min-h-[calc(100vh-7rem)] para dejar espacio al Navbar.
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-7rem)] relative overflow-hidden px-4 sm:px-6 lg:px-8 font-serif">
            {/* Elementos decorativos de fondo (ondas o formas sutiles) */}
            {/* Onda superior izquierda (verde) */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            {/* Onda inferior derecha (verde) */}
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            {/* Onda central (verde más claro) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            {/* Nueva Onda (tono tierra/ámbar) */}
            <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-6000"></div>

            {/* Contenedor principal del contenido de la página */}
            <div className="container mx-auto py-12 text-center relative z-10 max-w-4xl">

                {/* Tarjeta de Instrucciones (Glassmorphism) */}
                <div
                    className="p-8 mb-12 rounded-3xl shadow-xl animate-card-fade-in-up animation-delay-100"
                    style={{
                        ...glassmorphismBaseCardStyle,
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        // Sombra adicional con un toque de azul/violeta sutil para un contraste fresco
                        boxShadow: `${glassmorphismBaseCardStyle.boxShadow}, 0 0 25px 5px rgba(100, 149, 237, 0.08)`
                    }}
                >
                    <h1 className="text-4xl font-bold text-green-800 mb-6 drop-shadow-sm">
                        ¿Cómo funciona Bachue AI?
                    </h1>
                    <ol className="text-gray-800 text-lg list-decimal list-inside mb-8 space-y-4 text-left max-w-xl mx-auto">
                        <li>Sube o toma una foto clara de tu cultivo de papa.</li>
                        <li>Asegúrate de que la imagen esté bien iluminada para obtener mejores resultados.</li>
                        <li>¡Listo! Recibirás diagnósticos y recomendaciones automáticamente.</li>
                    </ol>
                </div>

                {/* Botón principal para abrir el modal */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="relative w-20 h-20 flex items-center justify-center rounded-full shadow-2xl mx-auto mb-12
                               transition-all duration-300 ease-in-out hover:scale-110 animate-pulse-subtle"
                    style={{
                        background: 'linear-gradient(45deg, rgba(34, 197, 94, 0.8), rgba(22, 163, 74, 0.8))', // Verde vibrante
                        border: '2px solid rgba(255, 255, 255, 0.5)',
                        boxShadow: '0 0 25px 5px rgba(34, 197, 94, 0.5), 0 0 40px 10px rgba(255, 255, 255, 0.2)' // Sombra verde y blanca
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white drop-shadow-md"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M3 7h2l2-3h6l2 3h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
                        <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                </button>

                {/* Área de visualización de imagen seleccionada */}
                {selectedImage && (
                    <div className="mb-8 animate-card-fade-in-up animation-delay-700">
                        <h2 className="text-2xl font-bold text-green-800 mb-4 drop-shadow-sm">Imagen Seleccionada:</h2>
                        <img src={selectedImage} alt="Selected for analysis" className="max-w-xs max-h-64 mx-auto rounded-xl shadow-lg border border-gray-200 object-contain" />
                    </div>
                )}

                {/* Indicador de carga */}
                {loading && (
                    <div className="mt-8 animate-pulse text-green-700 text-xl font-semibold drop-shadow-sm">
                        Analizando imagen...
                    </div>
                )}

                {/* Sección de Resultados (Glassmorphism) */}
                {result && (
                    <div
                        className={`p-8 mt-12 rounded-3xl shadow-xl text-left animate-card-fade-in-up animation-delay-900 ${result.error ? 'border-red-400' : 'border-green-400'}`}
                        style={{
                            ...glassmorphismBaseCardStyle,
                            border: result.error ? '1px solid rgba(255, 99, 71, 0.4)' : '1px solid rgba(144, 238, 144, 0.4)', // Borde rojo para error, verde para éxito
                            // Sombra adicional con un toque de rojo o verde según el resultado
                            boxShadow: result.error ? `${glassmorphismBaseCardStyle.boxShadow}, 0 0 25px 5px rgba(255, 99, 71, 0.15)` : `${glassmorphismBaseCardStyle.boxShadow}, 0 0 25px 5px rgba(60, 179, 113, 0.15)`
                        }}
                    >
                        <h2 className={`text-3xl font-bold mb-4 drop-shadow-sm ${result.error ? 'text-red-600' : 'text-green-700'}`}>
                            {result.error ? '¡Error!' : 'Resultado del Análisis:'}
                        </h2>
                        {result.error ? (
                            <p className="text-red-700 text-lg">{result.error}</p>
                        ) : (
                            result.predicted_classes[0] === "healthy" ? (
                                <div>
                                    <p className="font-semibold text-green-600 text-xl mb-2">¡Planta sana, felicitaciones!</p>
                                    <p className="text-gray-800 text-lg mb-2">{result.info[0]?.description}</p>
                                    <p className="text-green-700 font-semibold text-lg">{result.info[0]?.treatment}</p>
                                </div>
                            ) : (
                                result.predicted_classes.map((clase, idx) => (
                                    <div key={idx} className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
                                        <p className="font-semibold text-green-600 text-xl mb-1">{clase}</p>
                                        <p className="text-gray-700 text-lg mb-1">Confianza: <span className="font-bold">{(result.confidences[idx] * 100).toFixed(2)}%</span></p>
                                        <p className="text-gray-800 text-lg mb-1">{result.info[idx]?.description}</p>
                                        <p className="text-green-700 font-semibold text-lg">{result.info[idx]?.treatment}</p>
                                    </div>
                                ))
                            )
                        )}
                    </div>
                )}
            </div>

            {/* Modal de selección de imagen (Glassmorphism) */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
                    <div
                        className="rounded-3xl p-8 shadow-2xl w-80 max-w-xs text-center space-y-6 animate-scale-in"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))', // Fondo blanco más transparente
                            backdropFilter: 'blur(25px) saturate(180%)', // Mayor desenfoque para el modal
                            WebkitBackdropFilter: 'blur(25px) saturate(180%)',
                            border: '1px solid rgba(255, 255, 255, 0.4)', // Borde más pronunciado
                            boxShadow: '0 20px 60px 0 rgba(0, 0, 0, 0.3)' // Sombra más grande para el modal
                        }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-sm">Selecciona una opción</h2>
                        <button
                            onClick={handleCameraClick}
                            className="w-full py-3 text-lg font-semibold rounded-full text-white
                                       transition duration-300 ease-in-out hover:scale-105"
                            style={{
                                background: 'linear-gradient(45deg, #4CAF50, #2E8B57)', // Verde esmeralda a bosque
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                            }}
                        >
                            Tomar foto
                        </button>
                        <button
                            onClick={handleUploadClick}
                            className="w-full py-3 text-lg font-semibold rounded-full text-white
                                       transition duration-300 ease-in-out hover:scale-105"
                            style={{
                                background: 'linear-gradient(45deg, #66BB6A, #4CAF50)', // Verde más claro a esmeralda
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                            }}
                        >
                            Subir desde galería
                        </button>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="w-full py-3 text-lg font-semibold rounded-full text-gray-700
                                       transition duration-300 ease-in-out hover:scale-105"
                            style={{
                                background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))', // Fondo transparente blanco
                                border: '1px solid rgba(255, 255, 255, 0.4)',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                            }}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}

            {/* Inputs ocultos */}
            <input
                type="file"
                accept="image/*"
                capture="environment"
                ref={cameraInputRef}
                onChange={handleFileSelect}
                className="hidden"
            />
            <input
                type="file"
                accept="image/png, image/jpeg, image/jpg, image/webp"
                ref={fileInputRef}
                onChange={handleFileSelect}
                className="hidden"
            />

            {/* Estilos para las animaciones (iguales que en HomeView y nuevas para esta vista) */}
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
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }
                .animation-delay-6000 { animation-delay: 6s; }

                /* Animación de entrada para las tarjetas */
                @keyframes card-fade-in-up {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-card-fade-in-up {
                    animation: card-fade-in-up 0.7s ease-out forwards;
                }
                /* Clases para los retrasos de animación de las tarjetas */
                .animation-delay-100 { animation-delay: 0.1s; }
                .animation-delay-300 { animation-delay: 0.3s; }
                .animation-delay-500 { animation-delay: 0.5s; }
                .animation-delay-700 { animation-delay: 0.7s; } /* Nuevo delay */
                .animation-delay-900 { animation-delay: 0.9s; } /* Nuevo delay */

                /* Animación de entrada para el modal */
                @keyframes fade-in {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }

                /* Animación de escala para el contenido del modal */
                @keyframes scale-in {
                    0% { transform: scale(0.8); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .animate-scale-in {
                    animation: scale-in 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }

                /* Animación sutil de pulsación para el botón principal */
                @keyframes pulse-subtle {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.03); }
                }
                .animate-pulse-subtle {
                    animation: pulse-subtle 2s infinite ease-in-out;
                }
                `}
            </style>
        </div>
    );
};

export default CropRecommendationView;

