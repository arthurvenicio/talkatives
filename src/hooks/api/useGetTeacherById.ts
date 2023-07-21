import { api } from '@/config/axios';
import { useQuery } from '@tanstack/react-query';

interface Teacher {
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
  gender: Gender;
}

interface Gender {
  id: number;
  name: string;
  description: string;
}

const QUERY_KEY = ['teacher_id'];

const fetchApi = async (id: string) => {
  const { data } = await api.get(`/teachers/${id}`);
  return data;
};

export const useGetTeacherById = (id: string) => {
  return useQuery<Teacher, Error>(QUERY_KEY, () => fetchApi(id));
};
