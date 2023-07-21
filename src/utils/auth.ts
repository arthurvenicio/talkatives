import { APP_ROUTES } from '@/app.routes';

const checkIfIsPublicPage = (path: string) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public);
  return appPublicRoutes.includes(path);
};

export { checkIfIsPublicPage };
