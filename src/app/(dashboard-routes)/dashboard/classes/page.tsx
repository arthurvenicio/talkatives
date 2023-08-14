import { ClassList } from './components/ClassList';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { GraduationCap } from 'lucide-react';
import ButtonCreateClass from './components/ButtonCreateClass';

export default async function Classes() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid w-full flex flex-row items-center justify-start gap-3 py-4">
        <GraduationCap size={45} className="text-primary" />
        <p className="font-bold text-primary text-3xl">Turmas</p>
        <ButtonCreateClass />
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <ClassList userId={session?.user.id!} />
      </div>
    </div>
  );
}
