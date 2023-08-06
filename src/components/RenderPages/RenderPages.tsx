'use client';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { ILayoutDefault } from '@/interfaces/defaults';
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
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NextAuthProvider>
          <UserContextProvider>
            {children}
            <ToastContainer />
          </UserContextProvider>
        </NextAuthProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}
