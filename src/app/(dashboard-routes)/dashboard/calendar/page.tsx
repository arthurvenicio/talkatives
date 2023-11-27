import { Calendar } from 'lucide-react';

export default async function Classes() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid w-full flex flex-row items-center justify-start gap-3 py-4">
        <Calendar size={45} className="text-primary" />
        <p className="font-bold text-primary text-3xl">Calendario</p>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <p>a</p>
      </div>
    </div>
  );
}
