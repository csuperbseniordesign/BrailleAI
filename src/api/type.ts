export type AccessToken = string;

export interface AuthRequestHeader {
  accessToken?: AccessToken;
}

export interface ApiResponse<T> {
  message: string;
  folio: string;
  result: T;
  response: string;
}

export interface deepseekChoices {
  index: number;
  message: {
    role: string;
    content: string;
  }
}

export interface DeepSeekResponse {
  model: string;
  choices: deepseekChoices[];
}

export interface ParagraphResponse {
  id: number,
  title: string,
  paragraph: string;
  q1: string,
  q1a1: string;
  q1a2: string;
  q1a3: string;
  q1a4: string;
  q2: string;
  q2a1: string;
  q2a2: string;
  q2a3: string;
  q2a4: string;
  
}

export interface RequestParagraph {
  interest: string;
  minAtos: number;
  maxAtos: number;
}

export interface ParagraphQuestions {
  question: string;
  options: string[];
  answer: string;
}

export interface FormattedParagraphResponse {
  id: number,
  title: string,
  paragraph: string;
  questions: ParagraphQuestions[]
  
}