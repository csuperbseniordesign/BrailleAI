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
    status: string;
    response: string; 
    error?: string;
} 