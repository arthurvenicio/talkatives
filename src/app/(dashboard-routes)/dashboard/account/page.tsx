import { UserCircle } from 'lucide-react';
import { Forms } from './components/Forms';

export default function Account() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid w-full flex flex-row items-center justify-start gap-3 py-4">
        <UserCircle size={45} className="text-primary" />
        <p className="font-bold text-primary text-3xl">Minha conta</p>
      </div>
      <Forms />
    </div>
  );
}
