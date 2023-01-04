import type { ZodType } from "zod"

export interface IPromiseWithZodOverload<Parameter, Response> {
    (): Promise<ZodType<Parameter>>
    (data: Parameter): Promise<Response>
    (data?: Parameter): Promise<ZodType<Parameter> | Response>
}