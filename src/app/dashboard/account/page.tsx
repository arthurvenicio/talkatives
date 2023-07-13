import { Timezones } from './components/timezones';

export default function Account() {
  return (
    <div className="p-4 w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid py-2">
        <p className="font-bold text-3xl">My Account</p>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <div className="w-full h-44 px-16 py-4 border-b border-solid flex flex-row items-center justify-between">
          <p>Biografia</p>
          <div className="w-96 h-full bg-white rounded-md">
            <textarea
              name="comment"
              placeholder="Escreva sua biografia."
              className="w-full h-full p-2 bg-transparent text-black focus:outline-0 resize-none"
            />
          </div>
        </div>
        <div className="w-full h-40 px-16 py-4 border-b border-solid flex flex-row items-center justify-between">
          <p>Timezone</p>
          <Timezones />
        </div>
        <div className="w-full h-40 px-16 py-4 border-b border-solid flex flex-row items-center justify-between">
          <p>Alterar senha</p>
          <div className="flex gap-6">
            <input
              type="password"
              name="password"
              placeholder="**********"
              className="focus:outline-none p-2"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="**********"
              className="focus:outline-none p-2"
            />
          </div>
        </div>

        <div className="w-full h-40 px-16 py-4 border-b border-solid flex flex-row items-center justify-between">
          <p>Salvar alterações</p>
          <div className="w-96 h-8 bg-transparent flex flex-row justify-end gap-2 rounded-md">
            <button className="w-16 bg-blue-950 p-2 text-white rounded-sm self-end">
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
