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
    model: string;
    response: string; 
} 