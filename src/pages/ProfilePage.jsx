import React from 'react';
import { Camera, MoveDiagonal } from 'lucide-react';
import NavBar from '../components/NavBar';
import EstacioCard from '../components/EstacioCard';
import ProfileMenuItem from '../components/ProfileMenuItem';
//when click on carteirinha redirtect do home, import useNavigate
import { useNavigate } from 'react-router-dom';

const EstacioProfilePage = () => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate('/student-id');
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-blue-600 text-white pb-0 mt-10 relative">
        <div className="flex flex-col items-center mt-4">
          <div className="relative">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-2xl font-bold">
              PV
            </div>
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1">
              <Camera size={20} className="text-black" />
            </div>
          </div>
          <h2 className="text-xl font-bold mt-2">Pedro Penha Verani</h2>
          <p className="text-sm mt-3">pedrosarkisverani@gmail.com</p>
          <p className="text-sm mt-1 font-bold">(48) 98849-5570</p>
        </div>
        <p className="text-sm mt-10 ml-5">Análise e Desenvolvimento de sistemas</p>
        <div className="inset-x-0 abolute">
            <EstacioCard />
        </div>
      </div>
      
      <div className="flex-grow bg-gray-100 px-4 pt-8">
        <div className='flex justify-center' onClick={handleCardClick}> 
          <MoveDiagonal color='gray'/> <span className="ml-1 text-gray-600 font-semibold">Acessar carteirinha</span> 
        </div>
       
        <div className='mt-10'>
          <h3 className="text-xl text-black font-bold mb-4">Menu perfil</h3>
          <div className="grid grid-cols-2 gap-4">
          <ProfileMenuItem 
              icon={<svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>}
              text="Meus dados"
            />
             <ProfileMenuItem 
              icon={<svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>}
              text="Privacidade"
            />
             <ProfileMenuItem 
              icon={<svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>}
              text="Envio de documentação"
            />
          </div>
          </div>
      </div>
      <NavBar />
    </div>
  );
};

export default EstacioProfilePage;