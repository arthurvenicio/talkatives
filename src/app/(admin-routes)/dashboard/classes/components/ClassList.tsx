'use client';
import { useGetClassesByTeacherId, useGetUserById } from '@/hooks/api';
import { ClassItem } from './ClassItem';
import FadeLoader from 'react-spinners/FadeLoader';

interface IClassListProps {
  userId: string;
}

export const ClassList = ({ userId }: IClassListProps) => {
  const { data: userData } = useGetUserById(userId);
  const { data, isLoading, isError } = useGetClassesByTeacherId(
    userData?.teacher.id!
  );

  if (isLoading || !data) {
    return (
      <div className="flex flex-col items-center justify-center">
        <FadeLoader color="#263A60" />
      </div>
    );
  }

  return (
    <>
      {data.map((item, index) => (
        <ClassItem
          key={index}
          description={item.description}
          name={item.name}
          id={item.id}
        />
      ))}
    </>
  );
};
