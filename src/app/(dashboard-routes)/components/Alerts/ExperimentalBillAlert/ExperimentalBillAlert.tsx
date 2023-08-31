import { AlertOctagon } from 'lucide-react';

export const ExperimentalBillAlert = () => {
  return (
    <div className="w-full h-16 flex flex-row gap-3 bg-red-600 items-center p-4">
      <AlertOctagon className="text-white" />
      <p className="font-semibold text-sm text-white">
        O período de avaliação expirou e uma fatura pendente está associada à
        sua conta. Favor verificar e proceder com o pagamento, obrigado.
      </p>
    </div>
  );
};
