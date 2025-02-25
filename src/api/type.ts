export type AccessToken = string;

export interface AuthRequestHeader {
    accessToken?: AccessToken;
}

export interface ApiResponse<T> {
    message: string;
    folio: string;
    result: T;
}

export interface DeepSeekResponse {
    status: string;
    data: string; 
    error?: string;
} 