'use client';
import { useGetClassById } from '@/hooks/api/useGetClassById';
import FadeLoader from 'react-spinners/FadeLoader';
import { ModuleItemTeacher } from '../../components/ModuleItemTeacher';

export default function Classes({ params }: { params: { id: string } }) {
  const { id } = params;

  const { data, isLoading } = useGetClassById(id as string);

  if (isLoading || !data) {
    return (
      <div className="flex flex-col items-center justify-center">
        <FadeLoader color="#263A60" />
      </div>
    );
  }

  const { name, Module } = data;

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid w-full flex flex-row justify-between py-4">
        <p className="font-bold text-primary text-3xl">{name}</p>
        <button className="bg-primary text-white-secondary border border-solid border-primary px-4 rounded-sm hover:opacity-90">
          Criar
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-primary font-semibold">Modulos</p>
          <div
            className={`w-full h-72 flex flex-col items-center justify-${
              !Module ? 'center' : 'start'
            }`}
          >
            {!Module && (
              <p className="font-bold text-gray-400">
                Não há modulo cadastrado
              </p>
            )}

            {Module &&
              Module.map((module, index) => (
                <ModuleItemTeacher data={module} key={index} />
              ))}
          </div>
        </div>
        <div>
          <p className="text-primary font-semibold">Lições</p>
          <div className="w-full h-72 flex flex-col items-center justify-center">
            <p className="font-bold text-gray-400">
              Não há lições para serem exibidas
            </p>
          </div>
        </div>
        <div>
          <p className="text-primary font-semibold">Alunos</p>
          <div className="w-full h-72 flex flex-col items-center justify-center">
            <p className="font-bold text-gray-400">
              Não há alunos cadastrados nessa turma
            </p>
          </div>
        </div>
        <div>
          <p className="text-primary font-semibold">Notificações</p>
          <div className="w-full h-72 flex flex-col items-center justify-center">
            <p className="font-bold text-gray-400">
              Você não possui notificações
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
