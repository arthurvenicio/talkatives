import { api } from '@/config/axios';
import { useQuery } from '@tanstack/react-query';

interface Invoice {
  id: string;
  paymentMethod: string;
  gateway: string;
  barcode: string;
  pdfUrl: string;
  qrCodeUrl: string;
  creditCardLinkUrl: string | null;
  totalMount: number;
  discount: number;
  status: string;
  signatureId: string;
  teacherId: string;
  paidAt: string | null;
  expireAt: string;
  createdAt: string;
  updatedAt: string;
}

const QUERY_KEY = ['teacher_invoices'];

const fetchApi = async (id: string) => {
  const { data } = await api.get(`/teachers/${id}/invoices`);
  return data;
};

export const useGetInvoicesByTeacherId = (id: string) => {
  return useQuery<{ invoices: Invoice[] }, Error>(
    QUERY_KEY,
    () => fetchApi(id),
    {
      enabled: !!id
    }
  );
};
