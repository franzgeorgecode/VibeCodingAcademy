import React from 'react';
// Adjust the import path if your placeholder is elsewhere or has a different name
import SrCodePlaceholder from '../assets/images/srcode_placeholder.svg';

const LandingPage: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-6">
      {/* SrCode Character Placeholder - positioned to the right as in the prompt */}
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 w-1/4 md:w-1/3 lg:w-1/4 max-w-xs md:max-w-sm lg:max-w-md opacity-80">
        {/* Using img tag for SVG. For more control (like changing colors with CSS),
            consider using it as a component or inline SVG. */}
        <img src={SrCodePlaceholder} alt="SrCode Placeholder" className="w-full h-auto" />
        {/* Placeholder for speech bubble if needed later */}
        {/* <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-purple-700 p-2 rounded-lg shadow-xl">
          <p className="text-sm">¡Hola! Soy SrCode 🤖✨</p>
        </div> */}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Aprende a Programar con el Poder de la
          <span className="block sm:inline bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mt-2 sm:mt-0 sm:ml-2">
            Inteligencia Artificial
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          SrCode, tu mentor IA personal, te guiará en una aventura épica para
          dominar la programación con poderes sobrenaturales de aprendizaje.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-lg hover:scale-105 transform transition-all duration-200 text-lg">
            🚀 Comenzar Aventura con SrCode
          </button>

          <button className="px-8 py-4 border-2 border-purple-500 text-purple-300 font-bold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200 text-lg">
            🎮 Ver Demo Interactiva
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
