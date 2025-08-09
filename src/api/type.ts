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
  };
}

export interface DeepSeekResponse {
  model: string;
  choices: deepseekChoices[];
}

export interface ParagraphData {
  id: number;
  title: string;
  paragraph: string;
  q1: string;
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

export interface ParagraphResponse {
  source: string;
  data: ParagraphData;
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

export interface ParagraphQuestions {
  questions: ParagraphQuestions[];
}

export interface initialUserData {
  code_id: string;
  gradeLevel: string;
  readingLevel: string;
  ethnicity: string;
  gender: string;
  familyBackground: string;
  birthPlace: string;
  region: string;
  primaryInterest: string;
  languages: string;
  country: string;
  vision: string;
  preferredMedia: string;
  appAccess: string;
  digitalTextAccess: string;
  year: string;
  timeStamp: string;
}

export interface finalUserData {
  question1: string;
  question2: string;
  question3: string;
  characterQuestion1: string;
  characterQuestion2: string;
  characterQuestion3: string;
  characterQuestion4: string;
  experienceQuestion1: string;
  endingQuestion1: string;
  endingQuestion2: string;
  endingQuestion3: string;
  endingQuestion4: string;
  feedback: string;
  teacher_question1: string;
  teacher_question2: string;
  teacher_question3: string;
  teacher_question4: string;
  teacher_question5: string;
  teacher_question6: string;
  teacher_question7: string;
  teacher_feedback: string;
  comprehension_score: number;
  timeInSeconds: number;
  modified_paragraph_id: number;
  cr_avg: number;
}

export interface finalUserDataResponse {
  id: string;
}

export interface initialUserDataResponse {
  id: string;
}
