import { StudentList } from './components/StudentList/StudentList';

export default function Classes() {
  const id = 'clk8dqybv00016740kdzow85m';
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid w-full flex flex-row justify-between py-4">
        <p className="font-bold text-primary text-3xl">Alunos</p>
        <button className="bg-primary text-white-secondary border border-solid border-primary px-4 rounded-sm hover:opacity-90">
          Cadastrar
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <StudentList userId={id} />
      </div>
    </div>
  );
}
