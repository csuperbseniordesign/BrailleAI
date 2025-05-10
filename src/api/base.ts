import { baseUrl } from "@/api/config";
import axiosModule, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthRequestHeader } from "./type";

const deepseekAxiosRequest = axiosModule.create({
  baseURL: "https://api.deepseek.com",
  timeout: 30000, // Set timeout to 30 seconds for deepseek to answer a difficult question
});

const axios = axiosModule.create({
  baseURL: baseUrl,
  timeout: 30000, // Set timeout to 30 seconds for deepseek to answer a difficult question
});

export async function request<T = any>(
  config: AxiosRequestConfig & AuthRequestHeader,
): Promise<T> {
  const headers = config.headers || {};

  if (config.accessToken) {
    headers["x-token-acess"] = config.accessToken;
  }

  try {
    const response: AxiosResponse<T> = await axios({ ...config, headers });
    return response.data;
  } catch (error) {
    throw error instanceof Error ? error : new Error("An unkown error occured");
  }
}

export async function deepseekRequest<T = any>(
  config: AxiosRequestConfig & AuthRequestHeader,
): Promise<T> {
  const headers = config.headers || {};

  if (config.accessToken) {
    headers["x-token-acess"] = config.accessToken;
  }

  try {
    const response: AxiosResponse<T> = await deepseekAxiosRequest({
      ...config,
      headers,
    });
    return response.data;
  } catch (error) {
    throw error instanceof Error ? error : new Error("An unkown error occured");
  }
}
