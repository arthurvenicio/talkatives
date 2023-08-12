'use client';
import {
  Triangle,
  GanttChart,
  Gem,
  Home,
  User,
  UserCircle,
  Users2,
  Ruler,
  Pencil,
  GraduationCap,
  Shapes
} from 'lucide-react';
import { LogoutButton } from './LogoutButton';
import { useUserContext } from '@/contexts/user/userContext';
import { MenuItem } from './MenuItem';
import { usePathname } from 'next/navigation';

export const Menu = () => {
  const { user } = useUserContext();
  const path = usePathname();
  const isTeacher = user?.userType === 'TEACHER';

  return (
    <div className="w-full h-screen  bg-primary flex flex-col items-start justify-start gap-4">
      <div className="w-full p-4 flex flex-col items-center justify-center">
        <p className="font-bold text-lg text-white-primary">TALKATIVES</p>
      </div>
      <div className="flex flex-col justify-start w-full">
        <MenuItem
          name="Painel"
          url="/dashboard"
          currentPath={path}
          icon={<Home size={17} />}
        />
        {!isTeacher && (
          <MenuItem
            name="Modulos"
            url="/dashboard/modules"
            currentPath={path}
            icon={<GanttChart size={17} />}
          />
        )}
        <MenuItem
          name="Ranking"
          url="/dashboard/ranking"
          currentPath={path}
          icon={<Shapes size={17} />}
        />
        {isTeacher && (
          <MenuItem
            name="Turmas"
            url="/dashboard/classes"
            currentPath={path}
            icon={<GraduationCap size={17} />}
          />
        )}
        {isTeacher && (
          <MenuItem
            name="Alunos"
            url="/dashboard/students"
            currentPath={path}
            icon={<User size={17} />}
          />
        )}
        <MenuItem
          name="Minha conta"
          currentPath={path}
          url="/dashboard/account"
          isLast
          icon={<UserCircle size={17} />}
        />
      </div>
      <div className="mt-auto p-4">
        <LogoutButton />
      </div>
    </div>
  );
};
