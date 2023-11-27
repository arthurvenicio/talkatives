import Image from 'next/image';
import LogoPix from '../../../../../../../public/logo-pix.png';
import LogoCreditCard from '../../../../../../../public/credit-card.png';
import LogoBillet from '../../../../../../../public/billet.png';

interface IPaymentModalProps {
  setShowPaymentModal: (value: boolean) => void;
  setShowPixModal: (value: boolean) => void;
  setShowCreditCardModal: (value: boolean) => void;
  setShowBilletModal: (value: boolean) => void;
}

export const PaymentModal = ({
  setShowPaymentModal,
  setShowPixModal,
  setShowCreditCardModal,
  setShowBilletModal
}: IPaymentModalProps) => {
  const onHandlePixSelect = () => {
    setShowPixModal(true);
    setShowPaymentModal(false);
  };
  const onHandleCreditCardSelect = () => {
    setShowCreditCardModal(true);
    setShowPaymentModal(false);
  };
  const onHandleBilletSelect = () => {
    setShowBilletModal(true);
    setShowPaymentModal(false);
  };
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 gap-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold">
                Escolha uma forma de pagamento
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowPaymentModal(false)}
              >
                <p className="font-bold text-2xl text-black">X</p>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto flex flex-row justify-between items-center">
              <button
                className="flex flex-col items-center justify-center p-3 gap-2 font-semibold text-primary"
                onClick={onHandlePixSelect}
              >
                <Image src={LogoPix} alt="Logo pix" width={45} height={45} />
                PIX
              </button>
              <button
                className="flex flex-col items-center justify-center p-3  gap-2 font-semibold text-primary"
                onClick={onHandleCreditCardSelect}
              >
                <Image
                  src={LogoCreditCard}
                  alt="Logo pix"
                  width={45}
                  height={45}
                />
                CARTÃO
              </button>
              <button
                className="flex flex-col items-center justify-center p-3  gap-2 font-semibold text-primary"
                onClick={onHandleBilletSelect}
              >
                <Image src={LogoBillet} alt="Logo pix" width={45} height={45} />
                BOLETO
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};
