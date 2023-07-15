import { ModuleItem } from '../components/ModulesItem';

export default function Lessons() {
  const data = {
    title: 'Passive Voice'
  };
  const arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid">
        <p className="font-bold text-primary text-3xl">{data.title}</p>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        {arrayData.map((item, index) => (
          <ModuleItem
            key={index}
            name={`Lesson ${index + 1}`}
            id="clk0ntnza000008lcbxs2hjg2"
            isFromModule={false}
          />
        ))}

        <div className="flex flex-row gap-2 items-center justify-center">
          <button className="bg-[#f4f4f4] shadow-md p-3 text-xs font-bold rounded-md hover:opacity-60 text-primary">
            1
          </button>
          <button className="bg-[#f4f4f4] shadow-md p-3 text-xs font-bold rounded-md hover:opacity-60 text-primary">
            2
          </button>
          <button className="bg-[#f4f4f4] shadow-md p-3 text-xs font-bold rounded-md hover:opacity-60 text-primary">
            3
          </button>
        </div>
      </div>
    </div>
  );
}
