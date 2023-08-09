import Image from 'next/image';

interface IStudentItemProps {
  userId: string;
  name: string;
  photoUrl?: string;
}

const DEFAULT_PHOTO_URL = 'https://i.imgur.com/VoKGrwB.png';

export const StudentItem = ({ name, userId, photoUrl }: IStudentItemProps) => {
  return (
    <div className="w-full h-16 bg-white items-center p-4 flex flex-row gap-2 shadow-sm">
      <Image
        src={photoUrl ? photoUrl : DEFAULT_PHOTO_URL}
        alt={`${name} photo's`}
        className="w-7 h-7 rounded-full"
        width={30}
        height={30}
      />
      <div className="flex flex-col">
        <p className="text-base">{name}</p>
        <p className="text-xs">{userId}</p>
      </div>
    </div>
  );
};
