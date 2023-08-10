import { api } from '@/config/axios';
import { QUERY_KEYS } from '@/config/queryKeys';
import { useQuery } from '@tanstack/react-query';

export interface IClass {
  id: string;
  name: string;
  description: string;
}

const fetchApi = async (id: string) => {
  const { data } = await api.get(`/teachers/${id}/classes`);
  return data;
};

export const useGetClassesByTeacherId = (id: string) => {
  return useQuery<IClass[], Error>(
    QUERY_KEYS.classes_teacher_id,
    () => fetchApi(id),
    {
      enabled: !!id,
      refetchOnWindowFocus: false
    }
  );
};
