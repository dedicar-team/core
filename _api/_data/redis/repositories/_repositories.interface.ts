import { default as RedisClient } from 'ioredis';

export interface IRedisGenericRepository {
    redisClient: RedisClient

    get(): Promise<string | null>
    set(value: string): Promise<"OK">
}