import { Prisma } from "@data/prisma/generated/client"

export type PrismaKnownError = Prisma.PrismaClientKnownRequestError
export const PrismaKnownError = Prisma.PrismaClientKnownRequestError