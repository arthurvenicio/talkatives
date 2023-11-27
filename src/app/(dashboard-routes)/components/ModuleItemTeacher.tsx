import { capitalizePhrase } from '@/utils';
import { Puzzle } from 'lucide-react';
import Link from 'next/link';

interface IModuleItemTeacherProps {
  data: IModule;
}

interface IModule {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  classId: string;
}

export const ModuleItemTeacher = ({ data }: IModuleItemTeacherProps) => {
  const { name, classId, id } = data;
  return (
    <div className="w-full h-16 bg-white shadow-md rounded-md py-2 px-4 flex items-center gap-2">
      <Puzzle size={20} className="text-primary" />
      <Link
        className="text-primary font-semibold"
        href={`/dashboard/classes/${classId}/module/${id}`}
      >
        {capitalizePhrase(name)}
      </Link>
    </div>
  );
};
