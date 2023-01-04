import type { OmitStrict } from "type-zoo/types"
import type { PrismaRepository, TSaveParamsWithCredential } from "@data"
import { Prisma, Admin } from "@data/prisma/generated/client"
import type { toZod } from 'tozod'
import { Merge } from "ts-essentials"

export type ZAdminService = toZod<TAdminService>

export type TAdminService = {
    SaveParams: {
        Profile: TSaveParamsWithCredential
        Admin: OmitStrict<Prisma.AdminCreateManyInput, 'credentialId'>
    }
    SaveReturn: {
        Profile: Awaited<ReturnType<PrismaRepository['person']['save']>>
        Admin: Admin
    }
    GetParams: Prisma.PersonWhereUniqueInput
    GetReturn: Merge<TAdminService['SaveReturn'], { Admin: Admin }>
}

export interface IAdminService {
    save(data: TAdminService['SaveParams']): Promise<TAdminService['SaveReturn']>
    get(data: TAdminService['GetParams']): Promise<TAdminService['GetReturn']>
}