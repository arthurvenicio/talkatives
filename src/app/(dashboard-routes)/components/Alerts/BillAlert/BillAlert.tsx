import { AlertOctagon } from 'lucide-react';

export const BillAlert = () => {
  return (
    <div className="w-full h-16 flex flex-row gap-3 bg-red-600 items-center p-4">
      <AlertOctagon className="text-white" />
      <p className="font-semibold text-sm text-white">
        Queremos informar que atualmente há uma fatura pendente em sua conta.
      </p>
    </div>
  );
};
