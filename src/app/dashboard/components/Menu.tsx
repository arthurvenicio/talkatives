import { GanttChart, Gem, UserCircle } from 'lucide-react';
import Link from 'next/link';

export const Menu = () => {
  return (
    <div className="w-full h-screen border border-solid bg-[#f4f4f4] flex flex-col items-start justify-start p-4 gap-4">
      <div>
        <p className="font-bold text-lg">TALKATIVES</p>
      </div>
      <div className="flex flex-col gap-3 justify-start">
        <Link
          className="flex flex-row items-center gap-1 hover:opacity-50"
          href="/dashboard/modules"
        >
          <GanttChart size={17} />
          Modules
        </Link>
        <Link
          className="flex flex-row items-center gap-1 hover:opacity-50"
          href="/dashboard/ranking"
        >
          <Gem size={17} />
          Ranking
        </Link>

        {/* <Link href="/dashboard/profile/1">Profile</Link> */}
        <Link
          className="flex flex-row items-center gap-1 hover:opacity-50"
          href="/dashboard/account"
        >
          <UserCircle size={17} />
          My account
        </Link>
      </div>
    </div>
  );
};
