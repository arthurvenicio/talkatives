'use client';
import { useState } from 'react';
import { MoonLoader } from 'react-spinners';
import { InvoiceItem } from '../InvoiceItem';

export const InvoiceList = () => {
  const [hasInvoices, setHasInvoices] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="w-full h-32 flex items-center justify-center">
        <MoonLoader size={40} className="text-primary" />
      </div>
    );
  }

  if (!hasInvoices) {
    return (
      <div className="w-full h-32 flex items-center justify-center">
        <p className="text-sm font-semibold text-gray-500">
          Você não possui faturas.
        </p>
      </div>
    );
  }

  const invoiceData = {
    date: 'AGOSTO - 2023',
    dueDate: '20/08/2023',
    paymentMethod: 'BILLING',
    totalValue: 39.5,
    status: 'APPROVED'
  };

  return (
    <div className="w-full h-32 flex flex-col gap-3 mt-4 items-center justify-center">
      <InvoiceItem data={invoiceData} />
      <InvoiceItem data={{ ...invoiceData, status: 'PENDING' }} />
      <InvoiceItem data={{ ...invoiceData, status: 'CANCELED' }} />
    </div>
  );
};
