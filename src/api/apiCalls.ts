import { deepseekRequest, request } from "./base";
import { AccessToken, DeepSeekResponse, FormattedParagraphResponse, ParagraphResponse } from "./type";

export async function generateResponse(
  prompt: string,
  accessToken?: AccessToken,
) {
  const response = await deepseekRequest<DeepSeekResponse>({
    url: "/api/generate",
    method: "POST",
    data: {
      model: "deepseek-r1:7b",
      prompt: prompt,
      stream: false,
    },
    accessToken,
  });

  return response;
}

export async function requestRandomParagraph(
  interest: string,
  minAtos: number,
  maxAtos: number,
  accessToken?: AccessToken,
) {
 
  const response = await request<ParagraphResponse>({
    url: `/paragraphs/${interest}/${minAtos}/${maxAtos}`,
    method: 'GET',
  });

  return response;
}

export async function requestParagraph(
  paragraphId: string,
  accessToken?: AccessToken
) {
  const response = await request<FormattedParagraphResponse>({
    url: `/paragraph/${paragraphId}`,
    method: 'GET'
  });

  return response;
}