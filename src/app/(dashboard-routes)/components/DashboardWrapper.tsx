'use client';
import { useUserContext } from '@/contexts/user/userContext';
import { Menu } from './Menu';
import { MoonLoader } from 'react-spinners';
import { useState } from 'react';
import { ExperimentalAlert, BillAlert } from './Alerts';
import { ExperimentalBillAlert } from './Alerts/ExperimentalBillAlert/ExperimentalBillAlert';

export const DashboardWrapper = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { isLoading } = useUserContext();
  const [isExperimental, setIsExperimental] = useState(false);
  const [isDebtor, setIsDebtor] = useState(false);
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
            {isExperimental && !isDebtor && <ExperimentalAlert />}
            {isDebtor && !isExperimental && <BillAlert />}
            {isDebtor && isExperimental && <ExperimentalBillAlert />}
            {children}
          </div>
        </>
      )}
    </>
  );
};
