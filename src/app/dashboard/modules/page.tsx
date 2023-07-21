import { ModuleItem } from '../components/ModulesItem';

export default function Modules() {
  const arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid w-full py-4">
        <p className="font-bold text-primary text-3xl">Conteúdos</p>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        {arrayData.map((item, index) => (
          <ModuleItem
            key={index}
            name={`Module ${item}`}
            id="clk0ntnza000008lcbxs2hjg2"
          />
        ))}
      </div>
    </div>
  );
}
