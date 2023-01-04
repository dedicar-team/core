import trpc, { TRPCError } from '@trpc/server'
import { TTrpcContext } from '../../_router.module'
import {
    prisma as prismaWs,
    trpc as trpcWs,
    mongo as mongoWs,
    redis as redisWs,
} from '../../../../ws/_web_sockets.module'

export const authProcedures = trpc.router<TTrpcContext>()
    .query('logout', {
        async resolve({ ctx }) {
            if (!ctx.req.session) throw new TRPCError({ code: 'FORBIDDEN', message: 'cannot logout an inexistent session.' })
            return await Promise.all([
                (async () => {
                    if (process.env.NODE_ENV != 'development' && ctx.req.session.role == 'DELETE') {
                        prismaWs.close()
                        trpcWs.close()
                        mongoWs.close()
                        redisWs.close()
                    }
                }),
                (async () => { ctx.req.session.destroy(() => { }) })
            ])
                .then(() => true)
                .catch(() => { throw new TRPCError({ code: 'BAD_REQUEST', message: '' }) })
        },
    });

export type AuthProcedure = typeof authProcedures;