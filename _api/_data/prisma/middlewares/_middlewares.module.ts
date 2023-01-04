import { prismaClient } from '../client/_client.module'
import { Prisma } from '../generated/client/index'
import { prismaMongoose } from '../../mongo/_mongo.module'
import { webSocketEvent } from '@server'

export const prismaMiddlewares: Array<Prisma.Middleware<any>> = [
    async (params, next) => {
        if (prismaClient.$logInfo.requestId === null) throw Error('cannot persist with prisma without requestId')
        const before = Date.now()
        const result = await next(params)
        const after = Date.now()
        const prismaLog = await prismaMongoose.create({ ...prismaClient.$logInfo, date: Date.now(), duration: after - before, log: { params, result } })
        webSocketEvent.emit('log/prisma', prismaLog)
        return result
    }
]