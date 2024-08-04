import React from 'react';

const EstacioCard = () => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-xl overflow-hidden shadow-md">
        <div className="h-[130px] bg-blue-600 relative">
          <div className="absolute inset-0 bg-white opacity-30"></div>
          <img 
            src="https://logodownload.org/wp-content/uploads/2014/12/estacio-logo-0.png" 
            alt="Estácio" 
            className="h-[160px] relative top-10 transform -translate-y-1/2"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-evenly">
            <div className=''>
              <p className="text-gray-600 text-xs">Matrícula</p>
              <p className="text-black font-semibold">2018 0932 7512</p>
            </div>
            <div className=''>
              <p className="text-gray-600 text-xs">Validade</p>
              <p className="text-black font-semibold">Dez 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstacioCard;