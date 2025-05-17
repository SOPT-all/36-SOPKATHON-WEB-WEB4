export interface AnswerRequest {
    options: number[];
}

export interface AnswerResult {
    userName: string;
    imageUrl: string | null;
    location: string;
    drinkName: string;
    drinkDescription: string;
}

export interface AnswerResponse {
    code: string;
    message: string;
    data: AnswerResult;
}
