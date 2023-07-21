'use client';
import { User, useGetUserById } from '@/hooks/api/useGetUserById';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { createContext, useContext, useEffect, useState } from 'react';

interface IUserContext {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
}

const UserContext = createContext({} as IUserContext);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { data: session } = useSession();

  const { data, isLoading } = useGetUserById(session?.user.id);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  return (
    <UserContext.Provider value={{ user, isLoading, session }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { useUserContext, UserContextProvider };
