import { ButtonCreate, StudentList } from './components';

export default function Students() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid w-full flex flex-row justify-between py-4">
        <p className="font-bold text-primary text-3xl">Alunos</p>
        <ButtonCreate />
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <StudentList />
      </div>
    </div>
  );
}
