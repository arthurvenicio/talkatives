'use client';
import { useUserContext } from '@/contexts/user';
import { StudentItem } from './StudentItem';
import { Search } from 'lucide-react';

export const StudentList = () => {
  const { user } = useUserContext();

  if (!user) return null;
  const { id } = user;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row h-10 w-80 items-center justify-between gap-1 border border-solid rounded-lg p-2">
        <Search className="text-gray-700" />
        <input
          type="text"
          name="search-box"
          className="bg-transparent h-10 p-2 border-b border-solid focus:outline-none"
          placeholder="Digite o nome"
        />
      </div>
      <div className="flex flex-col gap-2">
        <StudentItem
          userId="1"
          name="Arthur"
          photoUrl=""
          email="arthur@justcode.dev"
        />
        <StudentItem
          userId="1"
          name="Arthur"
          photoUrl=""
          email="arthur@justcode.dev"
        />
        <StudentItem
          userId="1"
          name="Arthur"
          photoUrl=""
          email="arthur@justcode.dev"
        />
      </div>
    </div>
  );
};
