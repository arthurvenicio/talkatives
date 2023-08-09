import { StudentItem } from './StudentItem';

interface IStudentListProps {
  userId: string;
}

export const StudentList = ({ userId }: IStudentListProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row h-10 w-72 items-center justify-between">
        <input
          type="text"
          name="search-box"
          className="bg-white h-10 p-2 border-b border-solid focus:outline-none"
          placeholder="Digite o nome"
        />
      </div>
      <div className="flex flex-col gap-2">
        <StudentItem userId="1" name="Arthur" photoUrl="" />
        <StudentItem userId="1" name="Arthur" photoUrl="" />
        <StudentItem userId="1" name="Arthur" photoUrl="" />
      </div>
    </div>
  );
};
