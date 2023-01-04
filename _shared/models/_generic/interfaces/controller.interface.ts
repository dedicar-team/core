import { TMethodsToZod } from "./zod.interface"

export type TMethodsRefine<T> = {
    //@ts-ignore
    [key in keyof T]: (params: Awaited<ReturnType<T[key]>>) => unknown
}

export interface IControllerSchematics<Zod, Refine> {
    zod: Zod
    refine: Refine
}

export type TController<Methods, Zod = TMethodsToZod<Methods>, Refine = TMethodsRefine<Methods>> = Methods & IControllerSchematics<Zod, Refine>