import { ILayoutDefault } from '@/interfaces/defaults';
import { ChatView } from '../components/ChatView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talkative | Aula'
};

export default function LessonLayout({ children }: ILayoutDefault) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex-[2] p-8">{children}</div>
      <div className="flex-1 h-screen">
        <ChatView />
      </div>
    </div>
  );
}
