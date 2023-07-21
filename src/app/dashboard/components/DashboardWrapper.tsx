'use client';
import { useUserContext } from '@/contexts/user/userContext';
import { Menu } from './Menu';
import { MoonLoader } from 'react-spinners';

export const DashboardWrapper = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { isLoading } = useUserContext();
  return (
    <>
      {isLoading && (
        <div className="w-screen h-screen flex items-center justify-center">
          <MoonLoader className="text-primary" />
        </div>
      )}
      {!isLoading && (
        <>
          <div className="flex-1">
            <Menu />
          </div>
          <div className="flex-[8] h-screen overflow-y-scroll bg-white-secondary">
            {children}
          </div>
        </>
      )}
    </>
  );
};
