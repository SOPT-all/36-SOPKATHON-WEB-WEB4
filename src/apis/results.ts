import { AxiosError } from 'axios';
import api from './apiClient';
import { AnswerResult } from '@/types/result';

export const postResult = async (options: number[], token: string): Promise<AnswerResult> => {
    try {
        const requestBody = {
            options,
            token
        };
        
        console.log('결과 요청 body:', requestBody);
        
        const response = await api.post('/api/v1/questions/answer', requestBody);
        return response.data.data;
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        throw new Error(err.response?.data?.message || '결과 불러오기 실패');
    }
};
