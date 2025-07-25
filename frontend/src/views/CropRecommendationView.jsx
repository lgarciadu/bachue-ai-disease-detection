import React, { useState, useRef } from 'react';

const CropRecommendationView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
    setIsModalOpen(false);
  };

  const handleCameraClick = () => {
    cameraInputRef.current.click();
    setIsModalOpen(false);
  };

  //Evento que envia la imagen seleccionada al backend
  const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (file) {
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
        alert('Error al analizar la imagen');
        }
        setLoading(false);
    }
    };


  return (
    <div className="bg-green-50 min-h-screen flex flex-col">
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-6">INSTRUCCIONES</h1>

        <ol className="text-gray-800 text-md list-decimal list-inside mb-10 space-y-3 text-left max-w-xl mx-auto">
          <li>Sube o toma una foto clara de tu cultivo.</li>
          <li>Asegúrate de que la imagen esté bien iluminada para obtener mejores resultados.</li>
          <li>¡Listo! Recibirás recomendaciones automáticamente.</li>
        </ol>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-md hover:bg-green-600 transition mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 7h2l2-3h6l2 3h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
            <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </button>

        {loading && <p className="text-green-700 mt-6">Analizando imagen...</p>}

        {result && (
        <div className="bg-white rounded-xl shadow p-6 mt-6 max-w-xl mx-auto">
            <h2 className="text-lg font-bold text-green-700 mb-2">Resultado:</h2>
            {result.predicted_classes[0] === "healthy" ? (
            <div>
                <p className="font-semibold text-green-600">Planta sana, felicitaciones!!</p>
                <p className="text-gray-700">{result.info[0]?.description}</p>
                <p className="text-green-700 font-semibold">{result.info[0]?.treatment}</p>
            </div>
            ) : (
            result.predicted_classes.map((clase, idx) => (
                <div key={idx} className="mb-4">
                <p className="font-semibold text-green-600">{clase}</p>
                <p className="text-gray-700">Confianza: {(result.confidences[idx] * 100).toFixed(2)}%</p>
                <p className="text-gray-700">{result.info[idx]?.description}</p>
                <p className="text-green-700 font-semibold">{result.info[idx]?.treatment}</p>
                </div>
            ))
            )}
        </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 shadow-lg w-80 text-center space-y-4">
              <h2 className="text-xl font-bold text-green-600">Selecciona una opción</h2>
              <button
                onClick={handleCameraClick}
                className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Tomar foto
              </button>
              <button
                onClick={handleUploadClick}
                className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Subir desde galería
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-2 text-gray-500 hover:text-gray-700"
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
      </div>
    </div>
  );
};

export default CropRecommendationView;
