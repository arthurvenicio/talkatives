'use client';
import { useUserContext } from '@/contexts/user';
import { formatDate, formatToCpf } from '@/utils';
import { getUserGender } from '@/utils/gender';
import { getStudentProperty, getTeacherProperty } from '@/utils/userObj';
import Image from 'next/image';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface IFormProfileValues {
  firstName: string;
  lastName: string;
  document: string;
  birthdate: string;
}

export const Forms = () => {
  const { user } = useUserContext();
  const { register, handleSubmit } = useForm<IFormProfileValues>();

  const onSubmit = (data: IFormProfileValues) => {
    toast('Dados atualizados com sucesso!', {
      type: 'success'
    });
  };
  const userGender = useMemo(() => {
    return getUserGender(user);
  }, [user]);

  if (!user) return;
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <Image
        src={user.image}
        alt="User photo"
        width={120}
        height={120}
        className="rounded-full border border-solid border-white shadow-lg hover:opacity-80 hover:cursor-pointer"
        priority
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <div className="w-full h-20 flex flex-row gap-10 border-b border-solid px-12 items-center justify-between">
          <div>
            <p className="text-xl font-semibold text-primary">Primeiro nome</p>
            <p className="text-xs font-medium text-primary">
              Digite seu primeiro nome
            </p>
          </div>
          <input
            type="text"
            id="firstName"
            className="bg-transparent border border-solid border-primary p-3 w-96 h-10 rounded-md focus:outline-none"
            defaultValue={user?.name.split(' ')[0]}
            placeholder="João"
            {...register('firstName')}
          />
        </div>
        <div className="w-full h-20 flex flex-row gap-10 border-b border-solid px-12 items-center justify-between">
          <div>
            <p className="text-xl font-semibold text-primary">Ultimo nome</p>
            <p className="text-xs font-medium text-primary">
              Digite seu primeiro nome
            </p>
          </div>
          <input
            type="text"
            className="bg-transparent border border-solid border-primary p-3 w-96 h-10 rounded-md focus:outline-none"
            placeholder="Silva"
            defaultValue={user?.name.split(' ')[1]}
            {...register('lastName')}
          />
        </div>
        <div className="w-full h-20 flex flex-row gap-10 border-b border-solid px-12 items-center justify-between">
          <div>
            <p className="text-xl font-semibold text-primary">Documento</p>
            <p className="text-xs font-medium text-primary">
              Um documento valido como RG ou CPF.
            </p>
          </div>
          <input
            type="text"
            className="bg-transparent border border-solid border-primary p-3 w-96 h-10 rounded-md focus:outline-none"
            placeholder="123.456.789-10"
            defaultValue={
              user.student
                ? formatToCpf(getStudentProperty(user, 'document'))
                : formatToCpf(getTeacherProperty(user, 'document'))
            }
            {...register('document')}
          />
        </div>
        <div className="w-full h-20 flex flex-row gap-10 border-b border-solid px-12 items-center justify-between">
          <div>
            <p className="text-xl font-semibold text-primary">
              Data de nascimento
            </p>
            <p className="text-xs font-medium text-primary">
              Aqui deverá inserir sua data de nascimento.
            </p>
          </div>
          <input
            type="text"
            className="bg-transparent border border-solid border-primary p-3 w-96 h-10 rounded-md focus:outline-none"
            placeholder="15/10/2004"
            defaultValue={
              user.student
                ? formatDate(getStudentProperty(user, 'birthdate'))
                : formatDate(getTeacherProperty(user, 'birthdate'))
            }
            {...register('birthdate')}
          />
        </div>
        <div className="w-full h-20 flex flex-row gap-10 border-b border-solid px-12 items-center justify-between">
          <div>
            <p className="text-xl font-semibold text-primary">Gênero</p>
            <p className="text-xs font-medium text-primary">
              Escolha o genero que você se identifica.
            </p>
          </div>
          <select
            name="gender"
            id="gender"
            className="bg-transparent border border-solid border-primary p-1 w-96 h-10 rounded-md focus:outline-none"
          >
            <option value="none">Selecionar uma opção</option>
            <option value="male" selected={userGender === 'MALE'}>
              Masculino
            </option>
            <option value="female" selected={userGender === 'FEMALE'}>
              Feminino
            </option>
            <option value="others" selected={userGender === 'OTHERS'}>
              Outros
            </option>
            <option value="no-say" selected={userGender === 'NO-SAY'}>
              Prefiro não dizer
            </option>
          </select>
        </div>
        <div className="w-full h-20 flex flex-row gap-10 border-b border-solid px-12 items-center justify-between">
          <div>
            <p className="text-xl font-semibold text-primary">Email</p>
            <p className="text-xs font-medium text-primary">
              Um email valido para contato, será usado para login.
            </p>
          </div>
          <input
            type="text"
            className="bg-transparent border border-solid border-primary p-3 w-96 h-10 rounded-md focus:outline-none"
            defaultValue={user?.email}
            placeholder="joaosilva15@glako.com"
          />
        </div>
        <div className="w-full h-20 flex flex-row gap-10 border-b border-solid px-12 items-center justify-between">
          <div>
            <p className="text-xl font-semibold text-primary">Telefone</p>
            <p className="text-xs font-medium text-primary">
              Seu telefone para contato
            </p>
          </div>
          <input
            type="text"
            className="bg-transparent border border-solid border-primary p-3 w-96 h-10 rounded-md focus:outline-none"
            placeholder="(11) 99999-9999"
          />
        </div>
        <div className="w-full h-20 flex flex-row gap-10 border-b border-solid px-12 items-center justify-between">
          <div>
            <p className="text-xl font-semibold text-primary">Endereço</p>
            <p className="text-xs font-medium text-primary">
              Seu endereço residencial
            </p>
          </div>
          <input
            type="text"
            className="bg-transparent border border-solid border-primary p-3 w-96 h-10 rounded-md focus:outline-none"
            placeholder="Largo Treze de Maio, 474, Santo Amaro, São Paulo, SP"
          />
        </div>
        <div className="w-full h-20 flex flex-row items-center justify-center">
          <button className="bg-primary text-white font-semibold text-xl w-24 h-10 rounded-md">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};
