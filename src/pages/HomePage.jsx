import React from 'react';
import { Bell } from 'lucide-react';
import NavBar from '../components/NavBar';
import ProfileMenuItem from '../components/ProfileMenuItem';

function HomePage() {
  return (
    <div className="pb-16 min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white pb-2">
        <div className="px-4 pt-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-xl font-bold">Olá, Pedro</h1>
              <h2 className="text-lg">Análise e desenvolvimento de sistemas</h2>
            </div>
            <div className="flex items-center">
              <Bell className="mr-4" />
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold">PV</span>
              </div>
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2">Disciplinas em andamento</h3>
          <section className="mt-4">
          <div className="bg-white rounded-lg p-4 text-black mb-2 shadow">
            <h4 className="font-semibold">Estagio supervisionado Digitro tecnologia</h4>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '0%'}}></div>
            </div>
            <p className="text-right text-sm mt-1">0%</p>
          </div>
        </section>
        </div>
      </div>

      <div className="px-4 mt-4">
        <section className="mb-4">
          <div className="bg-white rounded-lg p-4 text-black shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Minha renovação</h3>
              <div className="flex items-center">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2">Disponível</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </div>
            </div>
            <div className='bg-blue-600 rounded-lg text-white p-4'>
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Alteração de grade</h4>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-sm mt-1">Precisa trocar disciplinas e mudar sua grade? É só clicar e começar.</p>
            </div>
          </div>
        </section>

        <section className="mb-4 bg-blue-700 rounded-lg p-4 shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Programa Singular</h3>
              <p className="text-sm text-white uppercase">Conheça a sua trilha de sucesso na área de carreiras do app.</p>
            </div>
            <div className="flex">
              <div className="w-8 h-8 bg-white rounded-full mr-2"></div>
              <div className="w-8 h-8 bg-white rounded-full mr-2"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
        </section>

        <section>
        <h3 className="text-lg font-semibold mb-2 text-black">Meu curso</h3>
        <div className="grid grid-cols-2 gap-4">
          <ProfileMenuItem 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="" viewBox="0 0 24 24" stroke="black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            }
            text="Disciplinas e avaliações"
          />
          <ProfileMenuItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            text="Calendário acadêmico"
          />
          <ProfileMenuItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
            text="Notas e informações"
          />
          <ProfileMenuItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            text="Provas no polo"
          />
        </div>
      </section>
      </div>
      <NavBar />
    </div>
  );
}

export default HomePage;