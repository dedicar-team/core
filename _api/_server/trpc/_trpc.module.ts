export * from './models/_models.module'
export * from './router/_router.module'

import trpcExpress from '@trpc/server/adapters/express'
import { adminProcedures, authProcedures, caregiverProcedures, costumerProcedures, trpcMiddleware, trpcContext } from './router/_router.module'

export const trpcRouter = trpcMiddleware
    .merge("", adminProcedures)
    .merge("", authProcedures)
    .merge("", caregiverProcedures)
    .merge("", costumerProcedures)

export const trpcExpressMiddlewareAdapter = trpcExpress.createExpressMiddleware({ router: trpcRouter, createContext: trpcContext })
