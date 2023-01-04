import type { ILogInfo } from "models";
import type { Prisma } from '@data/prisma/generated/client'

import { prismaMiddlewares as middlewares } from '@data/prisma/middlewares/_middlewares.module'
import { PrismaClient } from '@data/prisma/generated/client'

export class PrismaClientAdapter extends PrismaClient {
    $logInfo: ILogInfo

    constructor({ options, middlewares }: {
        options?: ConstructorParameters<typeof PrismaClient>['0'],
        middlewares?: Array<Prisma.Middleware<any>>
    } = {}) {
        super(options)
        middlewares?.map(item => this.$use(item))
    }
}

export const prismaClient = new PrismaClientAdapter({ middlewares })