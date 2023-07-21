import { ClassList } from './components/ClassList';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Link from 'next/link';

export default async function Classes() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid w-full flex flex-row justify-between py-4">
        <p className="font-bold text-primary text-3xl">Turmas</p>
        <Link
          href={'/dashboard/classes/create'}
          className="bg-primary text-white-secondary border border-solid border-primary px-4 rounded-sm hover:opacity-90 flex items-center justify-center"
        >
          Criar
        </Link>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <ClassList userId={session?.user.id!} />
      </div>
    </div>
  );
}
