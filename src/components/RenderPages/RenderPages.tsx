'use client';
import PrivateRoutes from '@/components/PrivateRoutes';
import { ILayoutDefault } from '@/interfaces/defaults';
import { checkIfIsPublicPage } from '@/utils/auth';
import { usePathname } from 'next/navigation';
import { NextAuthProvider } from '../../providers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { UserContextProvider } from '@/contexts/user/userContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface IRenderPages extends ILayoutDefault {}

export default function RenderPages({ children }: IRenderPages) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 40
          }
        }
      })
  );
  const path = usePathname();
  const isPublicPage = checkIfIsPublicPage(path);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NextAuthProvider>
          <UserContextProvider>
            {isPublicPage && children}
            {!isPublicPage && <PrivateRoutes>{children}</PrivateRoutes>}
          </UserContextProvider>
        </NextAuthProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}
