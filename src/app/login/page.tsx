'use client';
import { AtSign, Eye, EyeOff } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import GoogleIcon from '@/assets/google';
import { signIn, useSession } from 'next-auth/react';
import { useUserContext } from '@/contexts/user/userContext';

interface ILoginFormData {
  email: string;
  password: string;
}

const formSchema = yup.object().shape({
  email: yup.string().email('o formato do email é invalido').required(),
  password: yup.string().min(8, 'o tamanho da senha é invalido').required()
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { push } = useRouter();
  const { session } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginFormData>({
    resolver: yupResolver(formSchema)
  });

  function handleLogin(data: ILoginFormData) {
    push('/dashboard/modules');
  }

  useEffect(() => {
    if (session) {
      push('/dashboard/modules');
    }
  }, [session, push]);

  return (
    <div className="bg-primary w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-[480px] h-[320px] bg-white-primary shadow-lg rounded-t-lg flex flex-col gap-3 items-center justify-center">
        <h1 className="font-bold text-3xl">Talkative</h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col justify-center items-center gap-5"
        >
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
          <button className="py-2 w-28 border border-[#263A60] border-solid rounded-sm hover:scale-105">
            login
          </button>
        </form>
        <div>
          <button
            className="py-2 w-28 border border-[#263A60] flex flex-row justify-center items-center gap-2 border-solid rounded-sm hover:scale-105"
            onClick={() => signIn('google')}
          >
            <div className="w-6 h-6">
              <GoogleIcon />
            </div>
            Google
          </button>
        </div>
      </div>
      <div className="w-[480px] h-6 flex flex-col items-center justify-center bg-white-secondary">
        <p className="text-xs">
          Uma empresa do grupo{' '}
          <a
            className="no-underline text-black font-bold"
            href="https://justcode.dev"
            target="_blank"
          >
            Justcode
          </a>
        </p>
      </div>
    </div>
  );
}
