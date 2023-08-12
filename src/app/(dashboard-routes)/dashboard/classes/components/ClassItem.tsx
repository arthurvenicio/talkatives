import { IClass } from '@/hooks/api';
import { capitalizePhrase } from '@/utils';
import { GraduationCap, Users2 } from 'lucide-react';
import Link from 'next/link';

interface IClassItemProps extends IClass {}

export const ClassItem = ({ id, name, description }: IClassItemProps) => {
  return (
    <div className="w-full h-16 bg-white shadow-sm rounded-md py-2 px-4 flex items-center gap-2">
      <GraduationCap className="text-primary" />
      <Link
        className="text-primary font-semibold"
        href={`/dashboard/classes/${id}`}
      >
        {capitalizePhrase(name)}
      </Link>
    </div>
  );
};
