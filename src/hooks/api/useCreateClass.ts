import { api } from '@/config/axios';
import { QUERY_KEYS } from '@/config/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

interface IClass {
  name: string;
  description: string;
  teacherId: string;
}

interface IClassResponse {
  id: string;
  name: string;
  description: string;
  teacherId: string;
}

const postApi = async (data: IClass): Promise<IClassResponse> => {
  const { data: classData } = await api.post('/classes', data);
  return classData;
};

export const useCreateClass = () => {
  const queryClient = useQueryClient();
  return useMutation(QUERY_KEYS.create_class, (data: IClass) => postApi(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.classes_teacher_id);
      toast('Class created successfully', {
        autoClose: 2000,
        closeButton: false,
        type: 'success'
      });
    }
  });
};
