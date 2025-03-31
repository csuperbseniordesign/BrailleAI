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

export interface DeepSeekResponse {
  model: string;
  response: string;
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

export interface Paragraph {
  paragraph: string;
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
}

export interface ParagraphList {
  Paragraph1: Paragraph[]
  Paragraph2: Paragraph[]
}