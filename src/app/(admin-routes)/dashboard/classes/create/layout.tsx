import { ILayoutDefault } from '@/interfaces/defaults';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talkative | Nova turma'
};

export default function LayoutCreateClass({ children }: ILayoutDefault) {
  return <>{children}</>;
}
