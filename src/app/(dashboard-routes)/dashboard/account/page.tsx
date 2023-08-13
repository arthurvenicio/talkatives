import { UserCircle } from 'lucide-react';
import Image from 'next/image';

const DEFAULT_PHOTO_URL = 'https://i.imgur.com/O8a3uia.jpg';

export default async function Account() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-solid w-full flex flex-row items-center justify-start gap-3 py-4">
        <UserCircle size={45} className="text-primary" />
        <p className="font-bold text-primary text-3xl">Minha conta</p>
      </div>
      <div className="w-full flex flex-col items-center gap-5">
        <Image
          src={DEFAULT_PHOTO_URL}
          alt="User photo"
          width={120}
          height={120}
          className="rounded-full border border-solid border-white shadow-lg hover:opacity-80 hover:cursor-pointer"
        />
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full h-20 flex flex-row gap-10 border-b border-solid px-12 items-center justify-between">
            <div>
              <p className="text-xl font-semibold text-primary">
                Primeiro nome
              </p>
              <p className="text-xs font-medium text-primary">
                Digite seu primeiro nome
              </p>
            </div>
            <input
              type="text"
              id="firstName"
              className="bg-transparent border border-solid border-primary p-3 w-96 h-10 rounded-md focus:outline-none"
              placeholder="João"
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
              id="firstName"
              className="bg-transparent border border-solid border-primary p-3 w-96 h-10 rounded-md focus:outline-none"
              placeholder="Silva"
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
              id="firstName"
              className="bg-transparent border border-solid border-primary p-3 w-96 h-10 rounded-md focus:outline-none"
              placeholder="123.456.789-10"
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
              id="firstName"
              className="bg-transparent border border-solid border-primary p-3 w-96 h-10 rounded-md focus:outline-none"
              placeholder="15/10/2004"
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
              <option value="none" defaultChecked>
                Selecionar uma opção
              </option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="others">Outros</option>
              <option value="no-say">Prefiro não dizer</option>
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
        </div>
      </div>
    </div>
  );
}
