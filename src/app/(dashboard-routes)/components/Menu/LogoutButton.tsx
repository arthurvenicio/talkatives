'use client';

import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

export const LogoutButton = () => {
  return (
    <button
      className="flex flex-row gap-2 bg-transparent hover:opacity-80 text-white hover:text-red-500"
      onClick={() =>
        signOut({
          callbackUrl: '/login'
        })
      }
    >
      <LogOut />
      Sair
    </button>
  );
};
