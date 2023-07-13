import { FileCheck, GanttChart } from 'lucide-react';
import Link from 'next/link';

interface ModuleItemProps {
  name: string;
  id: string;
  isFromModule?: boolean;
}

export const ModuleItem = ({
  name,
  id,
  isFromModule = true
}: ModuleItemProps) => {
  return (
    <div className="w-full h-10 bg-[#f4f4f4] shadow-md rounded-md flex flex-row items-center justify-start px-4 gap-2 hover:opacity-50">
      {isFromModule ? <GanttChart size={23} /> : <FileCheck size={23} />}
      <Link href={`/dashboard/${isFromModule ? 'lessons' : 'lesson'}/${id}`}>
        {name}
      </Link>
    </div>
  );
};
