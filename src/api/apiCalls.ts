import { request } from "./base";
import { AccessToken, ApiResponse, DeepSeekResponse } from "./type";

export async function generateResponse(prompt: String, accessToken?: AccessToken) {

    const response = await request<ApiResponse<DeepSeekResponse>>({
        url: '/api/generate',
        method: 'POST',
        data: {
            'prompt': prompt,
        },
        accessToken

    })

    return response.result;
}