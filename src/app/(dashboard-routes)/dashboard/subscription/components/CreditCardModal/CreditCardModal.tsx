import { MoonLoader } from 'react-spinners';

interface ICreditCardModalProps {
  setShowCreditCardModal: (value: boolean) => void;
}

export const CreditCardModal = ({
  setShowCreditCardModal
}: ICreditCardModalProps) => {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  openInNewTab(
    'https://pagamento.sejaefi.com.br/90c0bcc7-34d2-48ae-a1dc-e100b150614c'
  );

  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 gap-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold">
                Efetue o pagamento via Cartão de Credito
              </h3>
              <button
                onClick={() => setShowCreditCardModal(false)}
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              >
                <p className="font-bold text-2xl text-black">X</p>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto flex flex-col justify-center items-center gap-4">
              <div className="flex flex-row items-center justify-center w-full">
                <MoonLoader size={60} className="text-primary" />
              </div>

              <div className="w-[480px] flex items-center justify-center">
                <p className="text-sm font-normal">
                  Estamos te redirecionando para a página de pagamento...
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center items-center p-2">
              <button
                className="bg-primary rounded-md text-white font-semibold px-2 py-3"
                onClick={() => setShowCreditCardModal(false)}
              >
                PAGO
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};
