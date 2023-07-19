import { api } from '@/config/axios';
import { useQuery } from '@tanstack/react-query';

export interface IClass {
  id: string;
  name: string;
  description: string;
}

const QUERY_KEY = ['classes_teacher_id'];

const fetchApi = async (id: string) => {
  const { data } = await api.get(`/teachers/${id}/classes`);
  return data;
};

export const useGetClassesByTeacherId = (id: string) => {
  return useQuery<IClass[], Error>(QUERY_KEY, () => fetchApi(id));
};
