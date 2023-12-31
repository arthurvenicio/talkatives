import { api } from '@/config/axios';
import { QUERY_KEYS } from '@/config/queryKeys';
import { useQuery } from '@tanstack/react-query';

interface IClass {
  id: string;
  name: string;
  description: string;
  Module: IModule[];
  teacherId: string;
  StudentOnClass: any[];
  Teacher: ITeacher;
}

interface ITeacher {
  id: string;
  firstName: string;
  lastName: string;
  document: string;
  phoneNumber: any;
  photoUrl: any;
  birthdate: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  genderId: number;
}

interface IModule {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  classId: string;
}

const fetchApi = async (id: string) => {
  const { data } = await api.get(`/classes/${id}`);
  return data;
};

export const useGetClassById = (id: string) => {
  return useQuery<IClass, Error>(QUERY_KEYS.class_id, () => fetchApi(id));
};
