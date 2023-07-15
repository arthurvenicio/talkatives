import { CoffeSvG } from '@/assets/coffe';

export default function Ranking() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid">
        <p className="font-bold text-primary text-3xl">Ranking</p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-3 saturate-0">
        <CoffeSvG />
        <p className="text-sm font-medium">Pagina em construção...</p>
      </div>
    </div>
  );
}
