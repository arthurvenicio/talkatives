import { CurrentPlanBox } from './components/CurrentPlanBox';
import { InvoiceList } from './components/InvoiceList';

export default function Subscription() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid w-full py-4">
        <p className="font-bold text-primary text-3xl">Assinatura</p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-3">
        <CurrentPlanBox />
        <div className="w-full h-44 items-center justify-start">
          <p className="text-primary text-2xl font-bold">Faturas</p>
          <InvoiceList />
        </div>
      </div>
    </div>
  );
}
