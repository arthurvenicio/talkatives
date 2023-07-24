'use client';
import { useRouter } from 'next/navigation';

export const ButtonCreate = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push('/dashboard/students/create');
  };
  return (
    <button
      className="bg-primary text-white-secondary border border-solid border-primary px-4 rounded-sm hover:opacity-90"
      onClick={() => handleClick()}
    >
      Cadastrar
    </button>
  );
};
