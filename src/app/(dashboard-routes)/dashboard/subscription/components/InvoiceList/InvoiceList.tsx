'use client';
import { MoonLoader } from 'react-spinners';
import { InvoiceItem } from '../InvoiceItem';
import { useUserContext } from '@/contexts/user';
import { useGetInvoicesByTeacherId } from '@/hooks/api';

export const InvoiceList = () => {
  const { user } = useUserContext();
  const { data, isLoading } = useGetInvoicesByTeacherId(user?.teacher.id!);

  if (isLoading) {
    return (
      <div className="w-full h-32 flex items-center justify-center">
        <MoonLoader size={40} className="text-primary" />
      </div>
    );
  }

  if (!data?.invoices.length) {
    return (
      <div className="w-full h-32 flex items-center justify-center">
        <p className="text-sm font-semibold text-gray-500">
          Você não possui faturas.
        </p>
      </div>
    );
  }

  const { invoices } = data;

  return (
    <div className="w-full h-32 flex flex-col gap-3 mt-4 items-center justify-center">
      {invoices.map((invoice) => (
        <InvoiceItem
          key={invoice.id}
          data={{
            date: invoice.createdAt,
            dueDate: invoice.expireAt,
            paymentMethod: invoice.paymentMethod,
            status: invoice.status,
            totalValue: invoice.totalMount,
            pdfLink: invoice.pdfUrl
          }}
        />
      ))}
    </div>
  );
};
