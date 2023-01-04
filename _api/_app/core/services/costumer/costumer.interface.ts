import type { OmitStrict } from "type-zoo/types"
import type { PrismaRepository, Person, ContractJourney, Patient, ContractPayment, Contract } from "@data"
import { Prisma } from "@data/prisma/generated/client"

export interface TCostumerService {
    SaveParams: {
        Profile: Parameters<PrismaRepository['person']['save']>['0']
        Costumer: OmitStrict<Prisma.CostumerCreateManyInput, 'credentialId'>
        ImPatient?: OmitStrict<Prisma.PatientCreateManyInput, 'personId' | 'contractId' | 'costumerId'>
        Patients: {
            Profile: Parameters<PrismaRepository['person']['save']>['0'],
            Patient: OmitStrict<Prisma.PatientCreateManyInput, 'personId' | 'contractId' | 'costumerId'>
        }[],
    }
    SaveReturn: {
        Profile: Awaited<ReturnType<PrismaRepository['person']['save']>>
        Costumer: Prisma.CostumerCreateManyInput
        Patients: {
            Profile: Awaited<ReturnType<PrismaRepository['person']['save']>>,
            Patient: Prisma.PatientCreateManyInput
        }[]
    }
    GetParams: Prisma.PersonWhereUniqueInput
    GetReturn: {
        Profile: OmitStrict<Awaited<ReturnType<PrismaRepository['person']['save']>>, 'Body'>,
        Costumer: Prisma.CostumerCreateManyInput
        Contracts: {
            Caregivers: Person[];
            ContractJourney: ContractJourney[];
            Patients: Patient[];
            Payments: ContractPayment[];
            Contract: Contract
        }[]
    }
}


export interface ICostumerService {
    save: (params: TCostumerService['SaveParams']) => Promise<TCostumerService['SaveReturn']>
    get: (data: TCostumerService['GetParams']) => Promise<TCostumerService['GetReturn']>
}