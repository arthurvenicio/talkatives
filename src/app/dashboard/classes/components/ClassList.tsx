'use client';
import { useGetClassesByTeacherId } from '@/hooks/api';
import { ClassItem } from './ClassItem';
import FadeLoader from 'react-spinners/FadeLoader';

interface IClassListProps {
  teacherId: string;
}

export const ClassList = ({ teacherId }: IClassListProps) => {
  const { data, isLoading, isError } = useGetClassesByTeacherId(
    'clk8dqybv00016740kdzow85m'
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
