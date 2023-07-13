import { ChatItem } from './ChatItem';

export const ChatView = () => {
  return (
    <div className="w-full h-full border-l border-solid bg-[#ddd] flex flex-col justify-between">
      <div className="overflow-y-scroll h-[785px]">
        <ChatItem />
      </div>
      <div className="w-full h-28 flex flex-row">
        <textarea
          name="comment"
          placeholder="Escreva um comentario..."
          className="flex-[4] p-2 bg-gray-200 text-black focus:outline-0 resize-none"
        />
        <button className="h-full flex-1 bg-gray-500 font-bold text-white">
          Enviar
        </button>
      </div>
    </div>
  );
};
