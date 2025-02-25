import { baseUrl } from '@/api/config';
import axiosModule, {AxiosRequestConfig, AxiosResponse} from 'axios';
import { AuthRequestHeader } from './type';

const axios = axiosModule.create({
    baseURL: baseUrl,
    timeout: 5000,
});


export async function request<T = any>(
    config: AxiosRequestConfig & AuthRequestHeader
) : Promise<T> {
    const headers = config.headers || {};

    if(config.accessToken) {
        headers['x-token-acess'] = config.accessToken;
    }

    try {
        const response: AxiosResponse<T> = await axios({ ...config, headers});
        return response.data;
    }

    catch(error) {
        throw error instanceof Error ? error : new Error('An unkown error occured');
    } 
}