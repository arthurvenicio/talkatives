export const CurrentPlanBox = () => {
  return (
    <div className="w-full h-28 bg-white rounded-md py-4 px-8 flex flex-row justify-between items-center">
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold text-primary">Plano anual</p>
        <p className="text-xs text-primary">Data de Assinatura: 20/06/2002</p>
      </div>
      <div>
        <button className="bg-transparent font-medium text-primary">
          GERENCIAR ASSINATURA
        </button>
      </div>
    </div>
  );
};
