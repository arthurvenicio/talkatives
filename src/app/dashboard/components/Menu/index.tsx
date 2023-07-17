import { GanttChart, Gem, LogOut, UserCircle } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { LogoutButton } from './components/LogoutButton';

export const Menu = () => {
  return (
    <div className="w-full h-screen  bg-primary flex flex-col items-start justify-start p-4 gap-4">
      <div>
        <p className="font-bold text-lg text-white-primary">TALKATIVES</p>
      </div>
      <div className="flex flex-col gap-3 justify-start">
        <Link
          className="flex flex-row items-center gap-1 hover:opacity-50 text-white-primary"
          href="/dashboard/modules"
        >
          <GanttChart size={17} />
          Modulos
        </Link>
        <Link
          className="flex flex-row items-center gap-1 hover:opacity-50 text-white-primary"
          href="/dashboard/ranking"
        >
          <Gem size={17} />
          Ranking
        </Link>

        {/* <Link href="/dashboard/profile/1">Profile</Link> */}
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
