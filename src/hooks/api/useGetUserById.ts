import { api } from '@/config/axios';
import { useQuery } from '@tanstack/react-query';

export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: any;
  image: string;
  userType: string;
  permissionOnUser: any[];
  student: any;
  teacher: Teacher;
}

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
  genderId: number;
}

const QUERY_KEY = ['user_id'];

const fetchApi = async (id: string) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

export const useGetUserById = (id: string) => {
  return useQuery<User, Error>(QUERY_KEY, () => fetchApi(id), {
    enabled: !!id
  });
};
