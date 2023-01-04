import type { PrismaClient, PrismaRepository } from "@data"
import type { ICaregiverService } from "_app/_app.module"

export class CaregiverService implements ICaregiverService {
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

    async save(data: Parameters<ICaregiverService['save']>['0']): ReturnType<ICaregiverService['save']> {
        try {
            const Profile = await this.prismaRepository.person.save(data.Profile)
            const Worker = await this.prismaClient.worker.create({
                data: {
                    ...data.Worker,
                    credentialId: Profile.Person.id
                }
            })
            const Caregiver = await this.prismaClient.caregiver.create({
                data: {
                    ...data.Caregiver,
                    workerId: Profile.Person.id
                }
            })
            return { Profile, Worker, Caregiver }
        } catch (error) {
            throw error
        }
    }
    async get(data: Parameters<ICaregiverService['get']>[0]): ReturnType<ICaregiverService['get']> {
        try {
            const Profile = await this.prismaRepository.person.get(data)
                .then(({ Address, Body, ...restProfile }) => {
                    if (!Address) throw Error()
                    if (!Body) throw Error()
                    return { Address, Body, ...restProfile }
                })
            const Credential = await this.prismaClient.credential.findUnique({
                where: { personId: Profile.Person.id },
                include: {
                    Worker: {
                        include: {
                            Caregiver: {
                                include: {
                                    CaregiverToContract: {
                                        include: {
                                            CaregiverPayment: true,
                                            Contract: {
                                                include: {
                                                    ContractJourney: true,
                                                    Patients: true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                }
            })
            const { Worker, ...restCredential } = Credential!
            const { Caregiver, ...restWorker } = Worker!
            const { CaregiverToContract, ...restCaregiver } = Caregiver!
            const Contracts = await Promise.all(CaregiverToContract.map(async item => {
                const { CaregiverPayment, Contract, ...restCaregiverToContract } = item
                const Costumer = await this.prismaClient.person.findFirst({ where: { id: Contract.costumerId } })
                const Patients = await Promise.all(Contract.Patients.map(async item => {
                    const Patient = await this.prismaClient.person.findFirst({
                        where: { id: item.personId },
                        include: { Address: true, Body: true }
                    })
                    if (!Patient) throw Error()
                    if (!Patient.Body) throw Error()
                    if (!Patient.Address) throw Error()
                    const { Address, Body, ...restPatient } = Patient
                    return {
                        Profile: { Address, Body, Person: { ...restPatient } },
                        Patient: { diseases: item.diseases }
                    }
                }))
                const { ContractJourney, ...restContract } = Contract
                const Caregivers = await Promise.all(ContractJourney.filter(journey => journey.contractId == Contract.id)[0]
                    .caregiverOrder.map(async item => {
                        const Person = await this.prismaClient.person.findFirst({
                            where: {
                                id: item
                            }
                        })
                        if (!Person) throw Error()
                        return Person
                    }))
                if (!Costumer) throw Error()
                return {
                    CaregiverPayment,
                    ContractJourney: Caregivers,
                    Costumer,
                    Patients
                }
            }))
            return {
                Profile,
                Worker: restWorker,
                Caregiver: restCaregiver,
                Contracts
            }
        } catch (error) {
            throw error
        }
    }
}