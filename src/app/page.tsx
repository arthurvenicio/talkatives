import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col gap-4 items-center justify-center bg-primary">
      <p className="text-white font-bold text-8xl">Talkative</p>
      <p className="text-white font-bold text-xl">
        A platform used by students and teachers.
      </p>

      <div>
        <Link
          className="p-3 w-28 border bg-white-primary border-solid text-primary rounded-md font-bold"
          href="/login"
        >
          Fazer Login
        </Link>
      </div>
    </main>
  );
}
