import { request } from "./base";
import { AccessToken, DeepSeekResponse } from "./type";

export async function generateResponse(
  prompt: String,
  accessToken?: AccessToken,
) {
  const response = await request<DeepSeekResponse>({
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
