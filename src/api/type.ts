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
  q2a4: string;
  
}

export interface RequestParagraph {
  interest: string;
  minAtos: number;
  maxAtos: number;
}