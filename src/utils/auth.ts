'use client';
import { APP_ROUTES } from '@/app.routes';
import { useUserContext } from '@/contexts/user/userContext';

const CheckUserAuthenticated = () => {
  const { session } = useUserContext();
  return !!session;
};

const checkIfIsPublicPage = (path: string) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public);

  return appPublicRoutes.includes(path);
};

export { CheckUserAuthenticated, checkIfIsPublicPage };
