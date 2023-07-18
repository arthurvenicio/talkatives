'use client';
import PrivateRoutes from '@/components/PrivateRoutes';
import { ILayoutDefault } from '@/interfaces/defaults';
import { checkIfIsPublicPage } from '@/utils/auth';
import { usePathname } from 'next/navigation';
import { NextAuthProvider } from './providers';

interface IRenderPages extends ILayoutDefault {}

export default function RenderPages({ children }: IRenderPages) {
  const path = usePathname();
  const isPublicPage = checkIfIsPublicPage(path);
  return (
    <>
      <NextAuthProvider>
        {isPublicPage && children}
        {!isPublicPage && <PrivateRoutes>{children}</PrivateRoutes>}
      </NextAuthProvider>
    </>
  );
}
