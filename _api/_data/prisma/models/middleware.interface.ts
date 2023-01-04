import { Prisma } from "@data/prisma/generated/client"

export type TPrismaMiddleware = { params: Prisma.MiddlewareParams, result: any }