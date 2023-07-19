import { ClassList } from './components/ClassList';

export default function Classes() {
  const id = 'clk8dqybv00016740kdzow85m';
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid w-full flex flex-row justify-between py-4">
        <p className="font-bold text-primary text-3xl">Turmas</p>
        <button className="bg-primary text-white-secondary border border-solid border-primary px-4 rounded-sm hover:opacity-90">
          Criar
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <ClassList teacherId={id} />
      </div>
    </div>
  );
}
