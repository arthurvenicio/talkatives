import { IClass } from '@/hooks/api';
import { Users2 } from 'lucide-react';
import Link from 'next/link';

interface IClassItemProps extends IClass {}

export const ClassItem = ({ id, name, description }: IClassItemProps) => {
  return (
    <div className="w-full h-10 bg-white-primary shadow-md rounded-md py-2 px-4 flex items-center gap-2">
      <Users2 className="text-primary" />
      <Link
        className="text-primary font-semibold"
        href={`/dashboard/classes/${id}`}
      >
        {name}
      </Link>
    </div>
  );
};
