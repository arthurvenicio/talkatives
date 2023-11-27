import { ILayoutDefault } from '@/interfaces/defaults';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talkative | Assinatura'
};

export default function Layout({ children }: ILayoutDefault) {
  return <div className="p-8">{children}</div>;
}
