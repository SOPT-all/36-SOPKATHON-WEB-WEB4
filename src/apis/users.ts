import { AxiosError } from 'axios';
import api from './apiClient';

interface UserResponseTypes {
  isExistingUser: boolean;
  token: string;
}

export const registerUser = async (name: string): Promise<UserResponseTypes> => {
  try {
    const response = await api.post('/api/v1/users', {
      name,
    });
    return response.data.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    throw new Error(err.response?.data?.message || '사용자 등록 실패');
  }
}; 