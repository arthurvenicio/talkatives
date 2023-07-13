import Image from 'next/image'

export const ChatItem = () => {
  return (
    <div className="bg-transparent border-b border-solid border-[#BDBDBD] w-full h-24 flex flex-row p-4">
      <div className="flex flex-row justify-center items-center gap-2">
        <div className="w-10 h-10">
          <Image
            src="https://i.imgur.com/W9OXQBS.jpg"
            className="rounded-full hover:cursor-pointer"
            width={50}
            height={50}
            alt="Arthur photo"
          />
        </div>
        <div className="flex-1">
          <p className="font-bold">Arthur</p>
          <p className="font-light">Que vídeo legal!</p>
        </div>
      </div>
    </div>
  )
}
