"use client";

import { useState } from "react";
import Character from "../components/Character";

const API_BASE_URL = "https://thesimpsonsapi.com/api";

export default function SimpsonsPage() {
  // Estado para manejar el ID del personaje actual
  const [index, setIndex] = useState(1);

  // Función para ir al personaje anterior
  const handlePrevious = () => {
    // Solo decrementa si el índice es mayor que 1
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Función para ir al siguiente personaje
  const handleNext = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6 [text-shadow:_2px_2px_0_rgb(255,215,0)]">
          The Simpsons
        </h1>
        
        {/* Contenedor para el componente del personaje */}
        <div className="character-container my-4">
          <Character url={`${API_BASE_URL}/characters/${index}`} />
        </div>
        
        {/* Separador visual */}
        <hr className="border-t-2 border-gray-200 my-4" />

        {/* Controles de navegación */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrevious}
            disabled={index <= 1} // Desactiva el botón si el índice es 1 o menor
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Atrás
          </button>

          <input
            type="number"
            value={index}
            min="1"
            className="w-20 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            onChange={(e) => {
              // Aseguramos que el valor no sea menor que 1
              const value = Number(e.target.value);
              setIndex(value > 0 ? value : 1);
            }}
          />

          <button
            onClick={handleNext}
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
          >
            Adelante
          </button>
        </div>
      </div>
    </div>
  );
}