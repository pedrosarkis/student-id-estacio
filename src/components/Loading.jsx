import React from 'react';
import logo from '../assets/estacioLogo.png';
const EstacioLoadingScreen = ({progress}) => {
 

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-600">
      <img 
        src={logo}
        alt="Estácio Logo" 
        className="w-32 h-auto mb-4"
      />
      <div className="w-64 bg-blue-400 rounded-full h-2 mb-4">
        <div 
          className="bg-white rounded-full h-2 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-white">{`${progress}%`}</p>
    </div>
  );
};

export default EstacioLoadingScreen;