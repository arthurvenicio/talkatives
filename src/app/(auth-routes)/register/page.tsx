'use client';
import { AtSign, Binary, Eye, EyeOff, Hash, User } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import Link from 'next/link';

interface ILoginFormData {
  email: string;
  password: string;
  name: string;
  document: string;
  registerCode: string;
}

const formSchema = yup.object().shape({
  email: yup.string().email('o formato do email é invalido').required(),
  password: yup.string().min(8, 'o tamanho da senha é invalido').required(),
  name: yup.string().required(),
  document: yup.string().required(),
  registerCode: yup.string().required()
});

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { replace } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginFormData>({
    resolver: yupResolver(formSchema)
  });

  async function handleLogin(data: ILoginFormData) {
    const result = await signIn('credentials', {
      ...data,
      redirect: false
    });

    if (result?.error) {
      toast(result.error, {
        type: 'error'
      });
    }

    replace('/dashboard/modules');
  }

  return (
    <div className="bg-[url('/bg-login-online.jpg')] bg-cover w-screen h-screen flex flex-col items-end justify-center">
      <div className="w-1/4 h-full flex flex-col items-center justify-center bg-white">
        <div className="w-full  flex flex-col gap-3 items-center justify-center">
          <h1 className="font-bold text-3xl">Talkative</h1>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col justify-center items-center gap-5"
          >
            <div
              className={`w-80 h-10 border border-solid p-2 flex flex-row justify-between ${
                errors.name
                  ? 'border border-solid border-red-600 text-red-600'
                  : ''
              }`}
            >
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full h-full bg-transparent font-normal focus:outline-none"
                {...register('name')}
              />
              <User size={23} color={errors.name ? '#DC2626' : '#9CA3AF'} />
            </div>
            <div
              className={`w-80 h-10 border border-solid p-2 flex flex-row justify-between ${
                errors.email
                  ? 'border border-solid border-red-600 text-red-600'
                  : ''
              }`}
            >
              <input
                type="text"
                placeholder="Email"
                className="w-full h-full bg-transparent font-normal focus:outline-none"
                {...register('email')}
              />
              <AtSign size={23} color={errors.email ? '#DC2626' : '#9CA3AF'} />
            </div>
            <div
              className={`w-80 h-10 border border-solid p-2 flex flex-row justify-between ${
                errors.password
                  ? 'border border-solid border-red-600 text-red-600'
                  : ''
              }`}
            >
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="*********"
                className="w-full h-full bg-transparent font-normal focus:outline-none"
                {...register('password')}
              />
              {showPassword ? (
                <Eye
                  onClick={() => setShowPassword((e) => !e)}
                  size={23}
                  color={errors.password ? '#DC2626' : '#9CA3AF'}
                  className="hover:cursor-pointer"
                />
              ) : (
                <EyeOff
                  onClick={() => setShowPassword((e) => !e)}
                  size={23}
                  color={errors.password ? '#DC2626' : '#9CA3AF'}
                  className="hover:cursor-pointer"
                />
              )}
            </div>
            <div
              className={`w-80 h-10 border border-solid p-2 flex flex-row justify-between ${
                errors.document
                  ? 'border border-solid border-red-600 text-red-600'
                  : ''
              }`}
            >
              <input
                type="text"
                placeholder="CPF ou CNPJ"
                className="w-full h-full bg-transparent font-normal focus:outline-none"
                {...register('document')}
              />
              <Binary
                size={23}
                color={errors.document ? '#DC2626' : '#9CA3AF'}
              />
            </div>
            <div
              className={`w-80 h-10 border border-solid p-2 flex flex-row justify-between ${
                errors.registerCode
                  ? 'border border-solid border-red-600 text-red-600'
                  : ''
              }`}
            >
              <input
                type="text"
                placeholder="Codigo de registro"
                className="w-full h-full bg-transparent font-normal focus:outline-none"
                {...register('registerCode')}
              />
              <Hash
                size={23}
                color={errors.registerCode ? '#DC2626' : '#9CA3AF'}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              {errors.email && (
                <p className="text-red-600 font-medium text-sm">
                  {errors.email.message}
                </p>
              )}
              {errors.password && (
                <p className="text-red-600 font-medium text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button className="py-2 w-28 border border-[#263A60] border-solid rounded-sm transition-all duration-100 hover:scale-105 hover:text-white hover:bg-primary">
              cadastrar
            </button>
          </form>
        </div>
        <div className="flex flex-row gap-1 mt-4">
          <p className="text-xs">Já possui uma conta?</p>
          <Link href="/login" className="text-xs font-semibold">
            Clique aqui
          </Link>
        </div>
        <div className="w-full h-6 flex flex-col items-center justify-center mt-10">
          <p className="text-xs">
            Uma empresa do grupo{' '}
            <a
              className="no-underline text-black font-bold"
              href="https://justcode.dev"
              target="_blank"
            >
              Justcode Tecnologia
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}