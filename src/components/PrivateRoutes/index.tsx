'use client';
import { APP_ROUTES } from '@/app.routes';
import { ILayoutDefault } from '@/interfaces/defaults';
import { CheckUserAuthenticated } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface IPrivateRoutesProps extends ILayoutDefault {}

export default function PrivateRoutes({ children }: IPrivateRoutesProps) {
  const { push } = useRouter();

  const isUserAuthenticated = CheckUserAuthenticated();

  useEffect(() => {
    if (!isUserAuthenticated) {
      push(APP_ROUTES.public.login);
    }
  }, [isUserAuthenticated, push]);

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  );
}
