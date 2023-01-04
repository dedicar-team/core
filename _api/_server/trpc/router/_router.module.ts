export * from './middlewares/_middlewares.module'
export * from './procedures/_procedures.module'

//@ts-ignore
import type { inferAsyncReturnType } from "@trpc/server"
//@ts-ignore
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express"

import trpc from '@trpc/server'

export const trpcContext = async (opts?: CreateExpressContextOptions) => {
    const { req, res } = opts!
    return { req, res }
}

export type TTrpcContext = inferAsyncReturnType<typeof trpcContext>;

export const trpcRouterContext = trpc.router<TTrpcContext>()