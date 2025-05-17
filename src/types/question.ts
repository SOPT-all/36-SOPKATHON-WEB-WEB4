export interface Option {
  id: number;
  description: string;
}

export interface Question {
  imageUrl: string;
  title: string;
  options: Option[];
}

export interface QuestionResponse {
  code: string;
  message: string;
  data: Question[];
}
