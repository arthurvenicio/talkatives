import { Save } from 'lucide-react';
import { Timezones } from './components/timezones';
import { Languages } from './components/Languages';

export default function Account() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid py-4">
        <p className="font-bold text-primary text-3xl">Minha conta</p>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <div className="w-full h-44 px-16 py-4 border-b border-solid flex flex-row items-center justify-between">
          <div className="flex-1">
            <p className="text-base font-bold">Biografia</p>
          </div>
          <div className="flex-1">
            <p className="text-sm font-normal ">Escreva um pouco sobre você</p>
          </div>
          <div className="flex-1">
            <div className="w-96 h-full bg-white rounded-md">
              <textarea
                name="comment"
                placeholder="Escreva sua biografia."
                className="w-full h-full p-2 bg-transparent text-black focus:outline-0 resize-none"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-40 px-16 py-4 border-b border-solid flex flex-row items-center justify-between">
          <div className="flex-1">
            <p className="text-base font-bold">Timezone</p>
          </div>

          <div className="flex-1">
            <p className="text-sm font-normal">
              Selecione de acordo com sua região e País
            </p>
          </div>
          <div className="flex-1">
            <Timezones />
          </div>
        </div>
        <div className="w-full h-40 px-16 py-4 border-b border-solid flex flex-row items-center justify-between">
          <div className="flex-1">
            <p className="text-base font-bold">Idioma</p>
          </div>

          <div className="flex-1">
            <p className="text-sm font-normal">
              Selecione um idioma de acordo com sua preferencia
            </p>
          </div>
          <div className="flex-1">
            <Languages />
          </div>
        </div>
        <div className="w-full h-40 px-16 py-4 border-b border-solid flex flex-row items-center justify-between">
          <div className="flex-1">
            <p className="text-base font-bold">Alterar senha</p>
          </div>
          <div className="flex-1">
            <p className="text-sm font-normal">Criar uma nova senha</p>
          </div>
          <div className="flex-1">
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
        </div>
        <div className="w-full h-40 px-16 py-4 border-b border-solid flex flex-row items-center justify-between">
          <div className="flex-1">
            <p className="text-base font-bold">Salvar alterações</p>
          </div>
          <div className="flex-1">
            <p className="text-sm font-normal">
              Salve as alterações realizadas
            </p>
          </div>
          <div className="flex-1">
            <div className="w-96 h-8 bg-transparent flex flex-row justify-start gap-2 rounded-md">
              <button className="w-24  h-10 flex flex-row items-center justify-center gap-2 bg-blue-950  text-white rounded-sm self-end">
                <Save />
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
