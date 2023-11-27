import Image from 'next/image';
import LogoPix from '../../../../../../../public/logo-pix.png';
import { CreditCard, FileText } from 'lucide-react';
import { Tally4 } from 'lucide-react';
import { useState } from 'react';
import { PaymentModal } from '../PaymentModal/PaymentModal';
import { PixModal } from '../PixModal';
import { CreditCardModal } from '../CreditCardModal';
import { BilletModal } from '../BilletModal';
import { getFormattedName } from '@/utils';

interface IInvoiceItemProps {
  data: InvoiceData;
}

interface InvoiceData {
  date: string;
  dueDate: string;
  paymentMethod: string;
  totalValue: number;
  status: string;
  pdfLink?: string;
}

export const InvoiceItem = ({ data }: IInvoiceItemProps) => {
  const { date, dueDate, paymentMethod, totalValue, status, pdfLink } = data;
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPixModal, setShowPixModal] = useState(false);
  const [showCreditCardModal, setShowCreditCardModal] = useState(false);
  const [showBilletModal, setShowBilletModal] = useState(false);

  const onHandleClickPay = () => {
    setShowPaymentModal(true);
  };

  return (
    <>
      {showBilletModal && (
        <BilletModal setShowBilletModal={setShowBilletModal} />
      )}
      {showPixModal && <PixModal setShowPixModal={setShowPixModal} />}
      {showCreditCardModal && (
        <CreditCardModal setShowCreditCardModal={setShowCreditCardModal} />
      )}
      {showPaymentModal && (
        <PaymentModal
          setShowPaymentModal={setShowPaymentModal}
          setShowPixModal={setShowPixModal}
          setShowCreditCardModal={setShowCreditCardModal}
          setShowBilletModal={setShowBilletModal}
        />
      )}
      <div className="w-full h-16 bg-white rounded-md py-4 px-8 flex flex-row justify-around items-center">
        <div className="flex-1 flex flex-col items-center justify-center border-r-2">
          <p>{getFormattedName(date)}</p>
        </div>
        <div className="flex-1 flex flex-col items-center border-r-2">
          <p className="font-semibold text-base">Vencimento</p>
          <p className="text-sm">
            {String(new Date(dueDate).toLocaleDateString('pt-BR'))}
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center border-r-2">
          <p className="font-semibold text-base">Forma de pagamento</p>
          {paymentMethod === 'pix' && (
            <Image
              src={LogoPix}
              alt="Logo do pix"
              width={20}
              height={20}
              className="saturate-0"
            />
          )}
          {paymentMethod === 'credit_card' && <CreditCard size={20} />}
          {paymentMethod === 'banking_billet' && <Tally4 size={20} />}
        </div>
        <div className="flex-1 flex flex-col items-center border-r-2">
          <p className="font-semibold text-base">Valor total</p>
          <p>R${totalValue.toFixed(2)}</p>
        </div>
        <div className="flex-1 flex flex-col items-center border-r-2">
          <p className="font-semibold text-base">Status</p>
          {status === 'APPROVED' && (
            <p className="bg-green-400 text-center rounded-2xl text-xs px-2 w-24">
              PAGO
            </p>
          )}
          {status === 'waiting' || status.toLowerCase() === 'ativa' ? (
            <p className="bg-yellow-400 text-center rounded-2xl text-xs px-2 w-24">
              PENDENTE
            </p>
          ) : (
            ''
          )}

          {status === 'CANCELED' && (
            <p className="bg-red-400 text-center rounded-2xl text-xs px-2 w-24">
              CANCELADO
            </p>
          )}
        </div>

        {status !== 'PENDING' && (
          <div className="flex-1 flex flex-col items-center justify-center">
            <p className="font-semibold text-base">PDF</p>
            <a href={pdfLink} target="_blank">
              <FileText size={20} className="text-red-500" />
            </a>
          </div>
        )}

        {status === 'PENDING' && (
          <div className="flex-1 flex flex-col items-center justify-center">
            <button
              onClick={onHandleClickPay}
              className="font-semibold text-primary"
            >
              PAGAR
            </button>
          </div>
        )}
      </div>
    </>
  );
};
