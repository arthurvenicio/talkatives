import { ModuleItem } from '../lessons/components/ModulesItem'

export default function Modules() {
  const arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  return (
    <div className="p-4 w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid py-2">
        <p className="font-bold text-3xl">Conteúdos</p>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        {arrayData.map((item, index) => (
          <ModuleItem
            key={index}
            name="Passive voice"
            id="clk0ntnza000008lcbxs2hjg2"
          />
        ))}
      </div>
    </div>
  )
}
