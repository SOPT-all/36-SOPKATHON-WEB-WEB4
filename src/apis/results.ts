import { AxiosError } from 'axios';
import api from './apiClient';
import { AnswerResult } from '@/types/result';

export const postResult = async (options: number[]): Promise<AnswerResult> => {
    try {
        const response = await api.post('/api/v1/questions/answer',{
            options,
        })
        return response.data.data;
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        throw new Error(err.response?.data?.message || '결과 불러오기 실패');
    }
};
