'use client';
import { isValid } from '@/utils/document';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserPlus2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

interface IFormData {
  firstName: string;
  lastName: string;
  document: string;
  birthDate: string;
  gender: string;
  email: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required('Campo obrigatório'),
  lastName: yup.string().required('Campo obrigatório'),
  document: yup
    .string()
    .required('Campo obrigatório')
    .test((value) => isValid(value)),
  birthDate: yup.string().required('Campo obrigatório'),
  gender: yup.string().required('Campo obrigatório'),
  email: yup.string().email().required('Campo obrigatório')
});

export default function CreateStudentPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormData>({
    resolver: yupResolver(schema)
  });

  const handleOnSubmit = (data: IFormData) => {
    toast('Aluno cadastrado com sucesso!', {
      type: 'success'
    });
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid w-full flex flex-row justify-between py-4">
        <div className="flex flex-row gap-1 items-center">
          <UserPlus2 className="text-primary" size={40} />
          <p className="font-bold text-primary text-3xl">Criar novo aluno</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-3 ">
            <div className="flex flex-row gap-8 w-96">
              <div>
                <label htmlFor="firstName" className="text-base text-primary">
                  Primeiro nome
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="bg-transparent border border-solid border-primary rounded-sm p-3"
                  {...register('firstName')}
                />
              </div>
              <div>
                <label htmlFor="lastname" className="text-base text-primary">
                  Ultimo nome
                </label>
                <input
                  id="lastname"
                  type="text"
                  className="bg-transparent border border-solid border-primary rounded-sm p-3"
                  {...register('lastName')}
                />
              </div>
            </div>
            <div className="flex flex-row gap-8 w-96">
              <div>
                <label htmlFor="document" className="text-base text-primary">
                  Cpf
                </label>
                <input
                  id="document"
                  type="text"
                  className="bg-transparent border border-solid border-primary rounded-sm p-3"
                  {...register('document')}
                />
              </div>
              <div>
                <label htmlFor="birthDate" className="text-base text-primary">
                  Data de nascimento
                </label>
                <input
                  id="birthDate"
                  type="date"
                  className="bg-transparent border border-solid border-primary rounded-sm p-3 w-72"
                  {...register('birthDate')}
                />
              </div>
            </div>
          </div>
          <div className="w-full border-b border-solid"></div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-primary">
              Criar usuario no sistema
            </h2>
            <div className="w-64">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-base text-primary">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="bg-transparent border border-solid border-primary rounded-sm px-3 py-2"
                  {...register('email')}
                />
              </div>
            </div>
          </div>
          <div>
            <button className="bg-primary rounded-md p-3 text-white">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
