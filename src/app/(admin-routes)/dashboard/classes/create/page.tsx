'use client';
import { useUserContext } from '@/contexts/user/userContext';
import { useCreateClass } from '@/hooks/api';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface IFormData {
  name: string;
  description: string;
}

export default function CreateClassPage() {
  const { register, handleSubmit } = useForm<IFormData>();
  const { mutateAsync } = useCreateClass();
  const { user } = useUserContext();
  const { push } = useRouter();

  const handleOnSubmit = async (data: IFormData) => {
    const request = { ...data, teacherId: user?.teacher.id! };
    const response = await mutateAsync(request);

    if (response) {
      push(`/dashboard/classes/${response.id}`);
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid w-full flex flex-row justify-between py-4">
        <p className="font-bold text-primary text-3xl">Nova turma</p>
      </div>
      <div className="flex-1 flex w-96 flex-col gap-3">
        <form className="w-full" onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="mb-4">
            <label
              className="block text-primary-100 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nome da turma
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-100 leading-tight focus:outline-none focus:shadow-outline"
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
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-primary p-2 text-white-secondary rounded-sm"
            >
              Criar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
