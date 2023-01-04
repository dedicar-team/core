import { default as RedisClient } from 'ioredis';
import { IRedisGenericRepository } from '@data';

export class ServerAdminPasswordRedisRepository implements IRedisGenericRepository {
    redisClient: RedisClient;

    constructor({ redisClient }: { redisClient: RedisClient }) {
        this.redisClient = redisClient
    }

    async set(value: string) {
        return this.redisClient.set('ADMIN_PASSWORD', value);
    }

    async get() {
        return await this.redisClient.get('ADMIN_PASSWORD');
    }
}