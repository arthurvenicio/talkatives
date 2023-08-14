import { set, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface IClassCreateModalProps {
  setShowModal: (show: boolean) => void;
}

interface IFormData {
  name: string;
  description: string;
}

const ClassCreateModal = ({ setShowModal }: IClassCreateModalProps) => {
  const { register, handleSubmit } = useForm<IFormData>();

  const handleOnSubmit = (data: IFormData) => {
    setShowModal(false);
    toast('Turma criada com sucesso!', {
      type: 'success',
      progressClassName: 'bg-primary'
    });
  };
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold">Criar uma nova turma</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <form onSubmit={handleSubmit(handleOnSubmit)}>
              <div className="relative p-6 flex-auto">
                <div className="mb-4">
                  <label
                    className="block text-primary-100 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Nome da turma
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-96 py-2 px-3 text-primary-100 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="name"
                    placeholder="Nome da turma"
                    {...register('name')}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-primary-100 text-sm font-bold mb-2"
                    htmlFor="description"
                  >
                    Descrição
                  </label>
                  <textarea
                    id="description"
                    className="shadow appearance-none border rounded w-full h-28 resize-none py-2 px-3 text-primary-100 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Descrição sobre a turma"
                    {...register('description')}
                  />
                </div>
              </div>

              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  className="bg-primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Criar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default ClassCreateModal;
