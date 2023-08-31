import Image from 'next/image';

interface IPixModalProps {
  setShowPixModal: (value: boolean) => void;
}

const DEFAULT_PIX_IMAGE =
  'https://s3.amazonaws.com/i.img.justcode.dev/pix/download.png';

export const PixModal = ({ setShowPixModal }: IPixModalProps) => {
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 gap-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold">
                Efetue o pagamento via PIX
              </h3>
              <button
                onClick={() => setShowPixModal(false)}
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              >
                <p className="font-bold text-2xl text-black">X</p>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto flex flex-col justify-center items-center gap-4">
              <div className="flex flex-row items-center justify-center w-full">
                <Image
                  src={DEFAULT_PIX_IMAGE}
                  alt="pix-qrcode"
                  priority
                  width={140}
                  height={140}
                />
              </div>
              <div>1:30</div>
              <div className="w-[480px] bg-gray-200 p-4 ">
                <p className="text-sm font-normal">
                  00020126580014BR.GOV.BCB.PIX0136079ee91c-ada8-4f07-8699-c24a0f21ab975204000053039865802BR5924JUSTCODE
                  TECNOLOGIA LTDA6015SANTA CRUZ DO C62070503***63043C69
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center items-center p-2">
              <button
                className="bg-primary rounded-md text-white font-semibold px-2 py-3"
                onClick={() => setShowPixModal(false)}
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
