'use client';
import { APP_ROUTES } from '@/app.routes';
import { useSession } from 'next-auth/react';

const CheckUserAuthenticated = () => {
  const { data: session } = useSession();
  return !!session;
};

const checkIfIsPublicPage = (path: string) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public);

  return appPublicRoutes.includes(path);
};

export { CheckUserAuthenticated, checkIfIsPublicPage };
