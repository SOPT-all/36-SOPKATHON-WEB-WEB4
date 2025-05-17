import { AxiosError } from 'axios';
import api from './apiClient';
import { Question } from '@/types/question';

export const getQuestions = async (): Promise<Question[]> => {
  try {
    const response = await api.get('/api/v1/questions');
    return response.data.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    throw new Error(err.response?.data?.message || '질문 불러오기 실패');
  }
};
