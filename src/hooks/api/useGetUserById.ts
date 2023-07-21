import { api } from '@/config/axios';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

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

const queryClient = new QueryClient();

const fetchApi = async (id: string) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

export const useGetUserById = (id: string) => {
  return useQuery<User, Error>(QUERY_KEY, () => fetchApi(id), {
    enabled: !!id
  });
};
