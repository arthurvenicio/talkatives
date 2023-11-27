import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { InputUserImage } from '../InputUserImage/InputUserImage';

interface ICreateStudentModalProps {
  setShowModal: (show: boolean) => void;
}

export interface IFormData {
  firstName: string;
  lastName: string;
  document: string;
  birthDate: string;
  gender: string;
  email: string;
  password: string;
  class: string;
  phone: string;
}

export const CreateStudentModal = ({
  setShowModal
}: ICreateStudentModalProps) => {
  const { register, handleSubmit } = useForm<IFormData>();

  const handleOnSubmit = (data: IFormData) => {
    setShowModal(false);
    toast('Turma criada com sucesso!', {
      type: 'success'
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
              <h3 className="text-xl font-semibold">Cadastra um aluno</h3>
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
              <div className="flex flex-row gap-2">
                <div className="flex flex-col gap-1">
                  <div className="relative p-6 flex-auto flex flex-row gap-6">
                    <div>
                      <label
                        className="block text-primary-100 text-sm font-bold mb-2"
                        htmlFor="name"
                      >
                        Nome
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-56 py-2 px-3 text-primary-100 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="name"
                        placeholder="Ex: João"
                        {...register('firstName')}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-primary-100 text-sm font-bold mb-2"
                        htmlFor="lastName"
                      >
                        Sobrenome
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-56 py-2 px-3 text-primary-100 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="lastName"
                        placeholder="Ex: Silva"
                        {...register('lastName')}
                      />
                    </div>
                  </div>
                  <div className="relative p-6 flex-auto flex flex-row gap-6">
                    <div>
                      <label
                        className="block text-primary-100 text-sm font-bold mb-2"
                        htmlFor="birthdate"
                      >
                        Data de nascimento
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-56 py-2 px-3 text-primary-100 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        id="birthdate"
                        placeholder="Ex: 20/06/2002"
                        {...register('birthDate')}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-primary-100 text-sm font-bold mb-2"
                        htmlFor="gender"
                      >
                        Genero
                      </label>
                      <select className="shadow appearance-none border rounded w-56 py-2 px-3 text-primary-100 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="male">Homem</option>
                        <option value="female">Mulher</option>
                      </select>
                    </div>
                  </div>
                  <div className="relative p-6 flex-auto flex flex-row gap-6">
                    <div>
                      <label
                        className="block text-primary-100 text-sm font-bold mb-2"
                        htmlFor="document"
                      >
                        CPF
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-56 py-2 px-3 text-primary-100 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="document"
                        placeholder="Ex: 000.000.000-00"
                        {...register('document')}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-primary-100 text-sm font-bold mb-2"
                        htmlFor="phone"
                      >
                        Telefone
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-56 py-2 px-3 text-primary-100 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="phone"
                        placeholder="Ex: (11) 91234-5678"
                        {...register('phone')}
                      />
                    </div>
                  </div>
                  <div className="relative p-6 flex-auto flex flex-row gap-6">
                    <div>
                      <label
                        className="block text-primary-100 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-56 py-2 px-3 text-primary-100 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="email"
                        placeholder="Ex: jose@qualker.com"
                        {...register('email')}
                      />
                    </div>
                  </div>
                </div>
                <InputUserImage register={register} />
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
