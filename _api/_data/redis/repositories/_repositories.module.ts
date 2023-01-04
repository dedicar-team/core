export * from './_repositories.interface'
export * from './server_password.class'

import { redisClient } from '../client/_client.module'
import { ServerAdminPasswordRedisRepository } from './server_password.class'

export class RedisRepository {
    serverAdminPassword: ServerAdminPasswordRedisRepository

    constructor({
        serverAdminPassword
    }: {
        serverAdminPassword: ServerAdminPasswordRedisRepository
    }) {
        this.serverAdminPassword = serverAdminPassword
    }
}

export const serverAdminPassword = new ServerAdminPasswordRedisRepository({ redisClient })
export const redisRepository = new RedisRepository({ serverAdminPassword })