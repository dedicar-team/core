import { v4 } from 'uuid'
import { TTrpcContext } from '../_router.module'
import { trpcMongoose, prismaClient } from '@data'
import trpc from '@trpc/server'
import { webSocketEvent } from '@server';

export const trpcMiddleware = trpc.router<TTrpcContext>()
    .middleware(async ({ ctx, next, ...log }) => {
        const before = Date.now();
        const requestId = (() => v4())()
        prismaClient.$logInfo = { emmiterId: ctx.req.session.personUuid || null, requestId }
        const result = await next()
        const after = Date.now();
        const trpcData = await trpcMongoose.create({ ...prismaClient.$logInfo, date: Date.now(), log, duration: after - before })
        webSocketEvent.emit('log/trpc', trpcData)
        return result
    });