import { toZod } from "tozod"
import { OmitStrict } from "type-zoo/types"
import { PrismaRepository, CaregiverPayment, Person, Patient } from '@data'
import { Prisma } from "@data/prisma/generated/client"
import { StrictOmit } from "ts-essentials"

export type ZCaregiverService = toZod<TCaregiverService>

export type TCaregiverService = {
    SaveParams: {
        Profile: Parameters<PrismaRepository['person']['save']>['0']
        Worker: OmitStrict<Prisma.WorkerCreateManyInput, 'credentialId'>
        Caregiver: OmitStrict<Prisma.CaregiverCreateManyInput, 'workerId'>
    }
    SaveReturn: {
        Profile: Awaited<ReturnType<PrismaRepository['person']['save']>>
        Worker: Prisma.WorkerCreateManyInput
        Caregiver: Prisma.CaregiverCreateManyInput
    }
    GetParams: Prisma.PersonWhereUniqueInput
    GetReturn: (TCaregiverService['SaveReturn'] & {
        Contracts: {
            CaregiverPayment: CaregiverPayment[],
            ContractJourney: Person[],
            Costumer: Person,
            Patients: {
                Profile: StrictOmit<Awaited<ReturnType<PrismaRepository['person']['save']>>, 'Contacts' | 'BankAccounts' | 'Observations'>,
                Patient: StrictOmit<Patient, 'contractId' | 'costumerId' | 'personId'>
            }[]
        }[]
    })
}

export interface ICaregiverService {
    save(data: TCaregiverService['SaveParams']): Promise<TCaregiverService['SaveReturn']>
    get(data: TCaregiverService['GetParams']): Promise<TCaregiverService['GetReturn']>
}