import { Siren } from 'lucide-react';

export const ExperimentalAlert = () => {
  return (
    <div className="w-full h-16 flex flex-row gap-3 bg-green-600 items-center p-4">
      <Siren className="text-white" />
      <p className="font-semibold text-sm text-white">
        Informamos que você está atualmente em um período de avaliação de 7 dias
        do nosso serviço.
      </p>
    </div>
  );
};
