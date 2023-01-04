import type { Prisma } from "@data/prisma/generated/client"

export type PrismaOperation = "create"
    | "connect"
    | "connectOrCreate"
    | "update"
    | "upsert"
    | "delete"

export const ACTION_LIST: Prisma.PrismaAction[] = ["create", "createMany", "delete", "deleteMany", "update", "updateMany"]
export const ACTION_LIST_PASSWORD: Prisma.PrismaAction[] = ["create", "createMany", "update", "updateMany"]