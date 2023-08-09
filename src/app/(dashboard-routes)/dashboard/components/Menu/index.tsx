'use client';
import { GanttChart, Gem, Home, User, UserCircle, Users2 } from 'lucide-react';
import Link from 'next/link';
import { LogoutButton } from './LogoutButton';
import { useUserContext } from '@/contexts/user/userContext';
import { MenuItem } from './MenuItem';
import SubMenu from './SubMenu';

export const Menu = () => {
  const { user } = useUserContext();

  const isTeacher = user?.userType === 'TEACHER';

  return (
    <div className="w-full h-screen  bg-primary flex flex-col items-start justify-start gap-4">
      <div className="w-full p-4 flex flex-col items-center justify-center">
        <p className="font-bold text-lg text-white-primary">TALKATIVES</p>
      </div>
      <div className="flex flex-col justify-start w-full">
        <MenuItem name="Painel" url="/dashboard" icon={<Home size={17} />} />
        {!isTeacher && (
          <MenuItem
            name="Modulos"
            url="/dashboard/modules"
            icon={<GanttChart size={17} />}
          />
        )}
        <MenuItem
          name="Ranking"
          url="/dashboard/ranking"
          icon={<Gem size={17} />}
        />
        {isTeacher && (
          <MenuItem
            name="Turmas"
            url="/dashboard/classes"
            icon={<Users2 size={17} />}
          />
        )}
        {isTeacher && (
          <MenuItem
            name="Alunos"
            url="/dashboard/students"
            icon={<User size={17} />}
          />
        )}
        <MenuItem
          name="Minha conta"
          url="/dashboard/account"
          icon={<UserCircle size={17} />}
        />
      </div>
      <div className="mt-auto p-4">
        <LogoutButton />
      </div>
    </div>
  );
};
