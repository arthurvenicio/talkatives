'use client';
import { IClass } from '@/hooks/api';
import { capitalizePhrase } from '@/utils';
import { GraduationCap, Trash } from 'lucide-react';
import Link from 'next/link';
import DeleteClassModal from './DeleteClassModal';
import { useState } from 'react';

interface IClassItemProps extends IClass {}

export const ClassItem = ({ id, name }: IClassItemProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <>
      {showDeleteModal && (
        <DeleteClassModal
          name={name}
          id={id}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
      <div className="w-full h-16 bg-white shadow-sm rounded-md py-2 px-4 flex items-center gap-2">
        <GraduationCap className="text-primary" />
        <Link
          className="text-primary font-semibold"
          href={`/dashboard/classes/${id}`}
        >
          {capitalizePhrase(name)}
        </Link>
        <div className="ml-auto mr-2">
          <button
            onClick={() => setShowDeleteModal(true)}
            className="bg-transparent"
          >
            <Trash className="text-red-600" />
          </button>
        </div>
      </div>
    </>
  );
};
