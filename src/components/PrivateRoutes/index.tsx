import { APP_ROUTES } from '@/app.routes';
import { useUserContext } from '@/contexts/user';
import { ILayoutDefault } from '@/interfaces/defaults';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface IPrivateRoutesProps extends ILayoutDefault {}

export default function PrivateRoutes({ children }: IPrivateRoutesProps) {
  const { push } = useRouter();
  const { session } = useUserContext();

  const isUserAuthenticated = !!session;

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
