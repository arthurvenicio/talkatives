'use client';
import { GanttChart, Gem, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { LogoutButton } from './components/LogoutButton';
import { useUserContext } from '@/contexts/user/userContext';

export const Menu = () => {
  const { user, isLoading } = useUserContext();

  const isTeacher = user?.userType === 'TEACHER';

  if (isLoading) {
    return (
      <div className="w-full h-screen  bg-primary flex flex-col items-start justify-start p-4 gap-4">
        <div>
          <p className="font-bold text-lg text-white-primary">TALKATIVES</p>
        </div>
        <div className="flex flex-col gap-3 justify-start">
          <p className="text-white font-bold text-xs">Carregando...</p>
        </div>
        <div className="mt-auto">
          <LogoutButton />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen  bg-primary flex flex-col items-start justify-start p-4 gap-4">
      <div>
        <p className="font-bold text-lg text-white-primary">TALKATIVES</p>
      </div>
      <div className="flex flex-col gap-3 justify-start">
        {!isTeacher && (
          <Link
            className="flex flex-row items-center gap-1 hover:opacity-50 text-white-primary"
            href="/dashboard/modules"
          >
            <GanttChart size={17} />
            Modulos
          </Link>
        )}
        <Link
          className="flex flex-row items-center gap-1 hover:opacity-50 text-white-primary"
          href="/dashboard/ranking"
        >
          <Gem size={17} />
          Ranking
        </Link>

        {isTeacher && (
          <Link
            className="flex flex-row items-center gap-1 hover:opacity-50 text-white-primary"
            href="/dashboard/classes"
          >
            <UserCircle size={17} />
            Turmas
          </Link>
        )}
        {isTeacher && (
          <Link
            className="flex flex-row items-center gap-1 hover:opacity-50 text-white-primary"
            href="/dashboard/students"
          >
            <UserCircle size={17} />
            Alunos
          </Link>
        )}
        <Link
          className="flex flex-row items-center gap-1 hover:opacity-50 text-white-primary"
          href="/dashboard/account"
        >
          <UserCircle size={17} />
          Minha conta
        </Link>
      </div>
      <div className="mt-auto">
        <LogoutButton />
      </div>
    </div>
  );
};
