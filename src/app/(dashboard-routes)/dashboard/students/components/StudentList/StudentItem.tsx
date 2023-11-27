'use client';
import { Trash } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { DeleteStudentModal } from '../DeleteStudentModal';

interface IStudentItemProps {
  userId: string;
  name: string;
  email?: string;
  photoUrl?: string;
}

const DEFAULT_PHOTO_URL = 'https://i.imgur.com/VoKGrwB.png';

export const StudentItem = ({
  name,
  userId,
  photoUrl,
  email
}: IStudentItemProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <>
      {showDeleteModal && (
        <DeleteStudentModal setShowDeleteModal={setShowDeleteModal} />
      )}
      <div className="w-full h-16 bg-white items-center p-4 flex flex-row gap-2 shadow-sm rounded-md">
        <Image
          src={photoUrl ? photoUrl : DEFAULT_PHOTO_URL}
          alt={`${name} photo's`}
          className="w-7 h-7 rounded-full"
          width={30}
          height={30}
        />
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col self-start">
            <p className="text-sm">{name}</p>
            <p className="text-xs">{userId}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Email</p>
            <p className="text-xs">{email}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Turma</p>
            <p className="text-xs">{userId}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={() => setShowDeleteModal(true)}
              className="bg-transparent"
            >
              <Trash className="text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
