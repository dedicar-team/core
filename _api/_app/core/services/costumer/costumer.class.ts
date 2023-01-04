import type { OmitStrict } from "type-zoo/types"
import type { PrismaClient, PrismaRepository } from "@data"
import { Prisma } from "@data/prisma/generated/client"
import type { ICostumerService } from "_app/_app.module"

export class CostumerService implements ICostumerService {
    private readonly prismaClient: PrismaClient
    private readonly prismaRepository: PrismaRepository

    constructor({
        prismaRepository,
        prismaClient
    }: {
        prismaRepository: PrismaRepository,
        prismaClient: PrismaClient
    }) {
        this.prismaRepository = prismaRepository
        this.prismaClient = prismaClient
    }

    async save(data: Parameters<ICostumerService['save']>['0']): ReturnType<ICostumerService['save']> {
        try {
            const Profile = await this.prismaRepository.person.save(data.Profile)
            const Costumer = await this.prismaClient.costumer.create({
                data: {
                    ...data.Costumer,
                    credentialId: Profile.Person.id
                }
            })
            const Patients = data.Patients.map(async (patient) =>
                this.prismaRepository.person.save(patient.Profile)
                    .then(async (PatientProfile) => ({
                        Profile: PatientProfile,
                        Patient: await this.prismaClient.patient.create({
                            data: {
                                ...patient.Patient,
                                personId: PatientProfile.Person.id,
                                costumerId: Profile.Person.id,
                            }
                        })
                    }))
            )
            return {
                Profile, Costumer,
                Patients: data.ImPatient ? await Promise.all([
                    ...Patients,
                    (async () => ({
                        Profile,
                        Patient: await this.prismaClient.patient.create({
                            data: {
                                ...data.ImPatient,
                                personId: Profile.Person.id,
                                costumerId: Profile.Person.id
                            }
                        })
                    }))()
                ]) : await Promise.all(Patients)
            }
        } catch (error) {
            throw error
        }
    }

    async get(where: Parameters<ICostumerService['get']>[0]): ReturnType<ICostumerService['get']> {
        try {
            const Profile = await this.prismaRepository.person.get(where)
            const result = await this.prismaClient.credential.findFirst({
                where: { personId: Profile.Person.id },
                include: {
                    Costumer: {
                        include: {
                            Contract: {
                                include: {
                                    Patients: true,
                                    Payments: true,
                                    ContractJourney: true,
                                    CaregiverToContract: true
                                }
                            }
                        }
                    }
                }
            })
            if (!result) throw Error()
            if (!result.Costumer) throw Error()
            let { Costumer, ...Credential } = result
            let { Address, BankAccounts, Contacts, Observations, Person } = Profile
            let { Contract, ...restCostumer } = Costumer
            if (!Address) throw Error()
            return {
                Profile: { Address, BankAccounts, Contacts, Observations, Person: Person },
                Costumer: restCostumer,
                Contracts: await Promise.all(Contract.map(async item => {
                    const { CaregiverToContract, ContractJourney, Patients, Payments, ...Contract } = item
                    return {
                        Caregivers: await Promise.all(CaregiverToContract.map(async item => {
                            const Person = await this.prismaClient.person.findFirst({
                                where: { id: item.caregiverId }
                            })
                            if (!Person) throw Error()
                            return Person
                        })),
                        ContractJourney,
                        Patients,
                        Payments,
                        Contract
                    }
                }))
            }
        } catch (error) {
            throw error
        }
    }

    async addPatients({ connect, Patients }: {
        connect: Prisma.CostumerWhereUniqueInput,
        Patients: {
            Profile: OmitStrict<Parameters<PrismaRepository['person']['save']>['0'], 'BankAccounts' | 'Contacts'>,
            Patient: OmitStrict<Prisma.PatientCreateManyInput, 'costumerId' | 'personId'>
        }[]
    }) {
        try {
            const Costumer = await this.prismaClient.costumer.findUnique({
                where: connect,
                select: { credentialId: true }
            })
            return Costumer ? await Promise.all(Patients.map(async patient => {
                const Profile = await this.prismaRepository.person.save(patient.Profile)
                const Patient = await this.prismaClient.patient.create({
                    data: {
                        ...patient.Patient,
                        personId: Profile.Person.id,
                        costumerId: connect.credentialId
                    }
                })
                return { Profile, Patient }
            })) : undefined
        } catch (error) {
            throw error
        }
    }
}