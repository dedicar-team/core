import type { ZodType } from "zod"
export type TMethodsToZod<T> = {
    //@ts-ignore
    [K in keyof T]: ZodType<Exclude<Parameters<T[K]>[0], undefined>>
}