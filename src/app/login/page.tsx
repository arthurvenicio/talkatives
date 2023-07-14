'use client';
import { AtSign, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import { useRouter } from 'next/navigation';

interface ILoginFormData {
  email: string;
  password: string;
}

const formSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { push } = useRouter();
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

  return (
    <div className="bg-primary w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-[480px] h-[320px] bg-white-primary shadow-md rounded-lg flex flex-col gap-3 items-center justify-center">
        <h1 className="font-bold text-3xl">Talkative</h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col justify-center items-center gap-5"
        >
          <div className="w-80 h-10 border border-solid p-2 flex flex-row justify-between">
            <input
              type="text"
              placeholder="Email"
              className="w-full h-full bg-transparent font-normal focus:outline-none"
              {...register('email')}
            />
            <AtSign size={23} color="#9CA3AF" />
          </div>
          <div className="w-80 h-10 border border-solid p-2 flex flex-row justify-between">
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
                color="#9CA3AF"
                className="hover:cursor-pointer"
              />
            ) : (
              <EyeOff
                onClick={() => setShowPassword((e) => !e)}
                size={23}
                color="#9CA3AF"
                className="hover:cursor-pointer"
              />
            )}
          </div>
          <button className="py-2 w-28 border border-[#263A60] border-solid">
            login
          </button>
        </form>
      </div>
    </div>
  );
}
