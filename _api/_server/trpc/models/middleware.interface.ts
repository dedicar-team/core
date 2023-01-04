import type { OmitStrict } from "type-zoo/types"
import type { trpcRouterContext } from '@server'

export type TTrpcMiddleware = OmitStrict<Parameters<Parameters<typeof trpcRouterContext['middleware']>['0']>['0'], 'ctx' | 'next'>