import { ILayoutDefault } from '@/interfaces/defaults';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function PrivateLayout({ children }: ILayoutDefault) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/dashboard/modules');
  }
  return <>{children}</>;
}
