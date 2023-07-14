'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { push } = useRouter();
  return (
    <main className="flex w-screen h-screen flex-col gap-4 items-center justify-center bg-primary">
      <p className="text-white font-bold text-8xl">Talkative</p>
      <p className="text-white font-bold text-xl">
        A platform used by students and teachers.
      </p>

      <div>
        <button
          className="py-2 w-28 border bg-white-primary border-solid text-primary rounded-md font-bold"
          onClick={() => {
            push('/login');
          }}
        >
          Fazer login
        </button>
      </div>
    </main>
  );
}
