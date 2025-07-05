import { deepseekRequest, request } from "./base";
import {
  AccessToken,
  DeepSeekResponse,
  finalUserData,
  finalUserDataResponse,
  initialUserData,
  initialUserDataResponse,
  ParagraphQuestions,
  ParagraphResponse,
} from "./type";

export async function generateResponse(
  context: string,
  paragraph: string,
  accessToken: AccessToken,
) {
  const response = await deepseekRequest<DeepSeekResponse>({
    url: "/chat/completions",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: {
      model: "deepseek-chat",
      messages: [
        {
          role: "system",
          content: context,
        },
        {
          role: "user",
          content: paragraph,
        },
      ],
      stream: false,
    },
  });

  return response;
}

export async function requestRandomParagraph(
  interest: string,
  minAtos: number,
  maxAtos: number,
  ethnicity: string,
  gender: string,
  accessToken: string | undefined,
) {
  const response = await request<ParagraphResponse>({
    url: `/paragraphs/${interest}/${minAtos}/${maxAtos}/${ethnicity}/${gender}`,
    method: "GET",
    accessToken,
  });

  return response;
}

export async function requestParagraph(
  paragraphId: string,
  selectedName: string,
) {
  const response = await request<ParagraphQuestions>({
    url: `/paragraph/${paragraphId}/${selectedName}`,
    method: "GET",
  });

  return response;
}

export async function createStudentData(studentData: initialUserData) {
  const response = await request<initialUserDataResponse>({
    url: `/students/`,
    method: "POST",
    data: studentData,
  });

  return response;
}

export async function addFinalStudentData(
  studentId: number,
  studentData: finalUserData,
) {
  const response = await request<finalUserDataResponse>({
    url: `/students/${studentId}`,
    method: "PUT",
    data: studentData,
  });

  return response;
}
