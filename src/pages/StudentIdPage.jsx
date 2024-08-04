import React from 'react';
import { ArrowLeft, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/estacioLogo.png';

const StudentIDCard = () => {
  const navigate = useNavigate(); 


  const handleBackClick = () => {
    navigate('/profile');
  };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col p-4 text-black">
      <div className="text-gray-600 mb-6">
        <ArrowLeft className="w-6 h-6" onClick={handleBackClick} />
      </div>
     
      <div className="flex-grow flex flex-col items-center">
        <div className="relative mb-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-2xl font-bold">
            PE
          </div>
          <button className="text-teal-500 absolute bottom-0 right-0">
            <div className="flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full">
                <Plus className="text-white" size={24} />
            </div>
          </button>
        </div>
        
        <h1 className="text-xl  font-semibold mb-6">Pedro Penha Verani</h1>
        
        <div className="w-full max-w-xs grid grid-cols-2 gap-y-4 mb-6">
          <div>
            <p className="text-xs text-gray-500">CPF</p>
            <p className="text-sm">104.885.819-74</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Nascimento</p>
            <p className="text-sm">10 Set 1996</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Matrícula</p>
            <p className="text-sm">2018 0932 7512</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Validade</p>
            <p className="text-sm">Dez 2024</p>
          </div>
        </div>
        
        <div className="w-full max-w-xs mb-2">
          <p className="text-xs text-gray-500">Curso (Ativo)</p>
          <p className="text-sm">Análise e desenvolvimento de sistemas</p>
        </div>
        <div className="w-full max-w-xs mb-8">
          <p className="text-xs text-gray-500">Campus</p>
          <p className="text-sm">SÃO JOSÉ</p>
        </div>
       
        <div className="mb-0">
          <img src={logo} alt="Estácio Logo" className="h-[50px]" />
        </div>
        
        <p className="text-center mt-2 text-xs text-gray-500">
          Válida mediante apresentação de documento com foto
        </p>
      </div>
    </div>
  );
};

export default StudentIDCard;