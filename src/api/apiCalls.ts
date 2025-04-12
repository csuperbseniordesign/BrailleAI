import { deepseekRequest, request } from "./base";
import { AccessToken, DeepSeekResponse, FormattedParagraphResponse, ParagraphResponse } from "./type";

export async function generateResponse(
  context: string,
  paragraph: string,
  accessToken?: AccessToken,
) {
  const response = await deepseekRequest<DeepSeekResponse>({
    url: "/chat/completions",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
    data: {
      "model": "deepseek-chat",
      "messages": [
        {
          role: "system", "content": context, 
        },
        {
          role: "user",
          content: paragraph,
        }
      ],
      "stream": false,
    },
    
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