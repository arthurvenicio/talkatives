'use client';
import { useState } from 'react';
import { MoonLoader } from 'react-spinners';

interface IBilletModalProps {
  setShowBilletModal: (value: boolean) => void;
}

export const BilletModal = ({ setShowBilletModal }: IBilletModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 gap-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold">
                Efetue o pagamento via Boleto
              </h3>
              <button
                onClick={() => setShowBilletModal(false)}
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              >
                <p className="font-bold text-2xl text-black">X</p>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto flex flex-col justify-center items-center gap-4">
              <div className="flex flex-row items-center justify-center w-[600px] h-[489px]">
                {isLoading && (
                  <div className="w-full flex flex-col gap-6 items-center justify-center">
                    <MoonLoader
                      size={80}
                      className="text-primary"
                      speedMultiplier={0.4}
                    />
                    <p className="text-sm font-bold">
                      Estamos carregando o seu boleto...
                    </p>
                  </div>
                )}
                {!isLoading && (
                  <iframe
                    src="https://download.sejaefi.com.br/462735_2_BOTA2/462735-2-DRAPA7.pdf#page=1&zoom=70"
                    className="w-full h-full"
                  />
                )}
              </div>
            </div>
            <div className="w-full flex justify-center items-center p-2"></div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};
