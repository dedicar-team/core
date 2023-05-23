import { IGenericRepository } from "../infrastructure/repository";
import { HttpMethod, RequestData, ReturnPromise } from "./typings";

export class HttpEndpointError extends Error {
    constructor(message: string, public status: number) {
        super(message);
    }
}

export class HttpEndpointClient<
    Get = undefined,
    Post extends RequestData | unknown | undefined = undefined,
    Put extends RequestData | unknown | undefined = undefined,
    Delete = undefined
> {
    constructor(public baseUrl: string, public headers: Record<string, string>) { }

    private async request<T, U>(method: HttpMethod, endpoint: string, body?: T): Promise<U> {
        const url = `${this.baseUrl}${endpoint}`;

        const options: RequestInit = {
            method,
            headers: this.headers,
            body: body ? JSON.stringify(body) : undefined
        };

        const response = await fetch(url, options);
        const responseData = await response.json();

        if (response.ok) {
            return responseData as U;
        } else {
            throw new HttpEndpointError(responseData.error || 'An error occurred.', response.status);
        }
    }

    async get<T = Get>(endpoint: string): Promise<T> {
        return this.request<void, T>('GET', endpoint);
    }

    async post<T = Post extends RequestData ? Post['body'] : Post, U = T extends RequestData ? T['return'] extends undefined ? T['body'] : T['return'] : T>(endpoint: string, body: T): Promise<U> {
        return this.request<T, U>('POST', endpoint, body);
    }

    async put<T = Put extends RequestData ? Put['body'] : Post, U = T extends RequestData ? T['return'] extends undefined ? T['body'] : T['return'] : T>(endpoint: string, body: T): Promise<U> {
        return this.request<T, U>('PUT', endpoint, body);
    }

    async delete<T = Delete>(endpoint: string): Promise<T> {
        return this.request<void, T>('DELETE', endpoint);
    }
}

// Create an instance of the API client with the base URL that supports GET, POST, PUT, and DELETE
export const apiClient = new HttpEndpointClient('http://localhost:3000/api', { 'content-type': 'application/json', 'access-control-allow-origin': '*' });

export const HttpRepositoryEndpointClient = <T extends IGenericRepository<unknown, unknown, unknown>>(url: string, headers: Record<string, string>) => new HttpEndpointClient<
    ReturnPromise<T['findById']>,
    Parameters<T['save']>['0'],
    Partial<Parameters<T['updateById']>['1']>,
    ReturnPromise<T['deleteById']>
>(url, headers)