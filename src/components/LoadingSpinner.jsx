import React from 'react';
import { Loader } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <Loader className="w-12 h-12 text-black-600 animate-spin mb-6" />
      <p className="text-center text-gray-800 text-lg px-8 max-w-md">
        Espere um pouquinho, estamos preparando tudo pra você curtir o app!
      </p>
    </div>
  );
};

export default LoadingScreen;