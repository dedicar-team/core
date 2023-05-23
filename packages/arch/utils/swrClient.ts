"use-client"
import useSWR, { SWRConfiguration } from 'swr';

import { HttpMethod, RequestData, ReturnPromise } from './typings';
import { IGenericRepository } from '../infrastructure/repository';

export class SwrEndpoint<
    Get = undefined,
    Post extends RequestData | unknown | undefined = undefined,
    Put extends RequestData | unknown | undefined = undefined,
    Delete = undefined
> {
    constructor(public baseUrl: string, public headers: Record<string, string>) { }
    private async fetch(url: string, options: RequestInit) { return fetch(url, options).then((res) => res.json()) }
    private configuration<T>(method: HttpMethod, body?: T, customHeaders?: Record<string, string>,) {
        return {
            method,
            headers: customHeaders ? customHeaders : this.headers,
            body: body ? JSON.stringify(body) : undefined
        };
    }
    Get = <T = Get>(endpoint: string, customHeaders?: Record<string, string>, swrConfig?: SWRConfiguration) => {
        const fetch = async (url: string) => { return this.fetch(url, this.configuration('GET', undefined, customHeaders)) }
        return useSWR<T>(`${this.baseUrl}${endpoint}`, fetch, swrConfig);
    }
    Post = <T = Post extends RequestData ? Post['body'] : Post, U = T extends RequestData ? T['return'] extends undefined ? T['body'] : T['return'] : T>(endpoint: string, options: { body?: T, customHeaders?: Record<string, string> }, swrConfig?: SWRConfiguration) => {
        const fetch = async (url: string) => { return this.fetch(url, this.configuration('POST', options.body, options.customHeaders)) }
        return useSWR<U>(`${this.baseUrl}${endpoint}`, fetch, swrConfig);
    }
    Put = <T = Put extends RequestData ? Put['body'] : Post, U = T extends RequestData ? T['return'] extends undefined ? T['body'] : T['return'] : T>(endpoint: string, options: { body?: T, customHeaders?: Record<string, string> }, swrConfig?: SWRConfiguration) => {
        const fetch = async (url: string) => { return this.fetch(url, this.configuration('PUT', options.body, options.customHeaders)) }
        return useSWR<U>(`${this.baseUrl}${endpoint}`, fetch, swrConfig);
    }
    Delete = <T = Delete>(endpoint: string, customHeaders?: Record<string, string>, swrConfig?: SWRConfiguration) => {
        const fetch = async (url: string) => { return this.fetch(url, this.configuration('DELETE', undefined, customHeaders)) }
        return useSWR<T>(`${this.baseUrl}${endpoint}`, fetch, swrConfig);
    }
};

export const SwrRepositoryEndpoint = <T extends IGenericRepository<unknown, unknown, unknown>>(baseUrl: string, headers: Record<string, string>) => new SwrEndpoint<
    ReturnPromise<T['findById']>,
    Parameters<T['save']>['0'],
    Partial<Parameters<T['updateById']>['1']>,
    ReturnPromise<T['deleteById']>
>(baseUrl, headers)
