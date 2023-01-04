import type {
    PrismaClient,
    Person,
    Address,
    Body,
    BankAccount,
    Contact,
    Observation, Credential
} from "@data/prisma/generated/client"
import type { OmitStrict } from 'type-zoo/types';

import { Prisma } from "@data/prisma/generated/client"
import { MarkOptional, StrictOmit } from "ts-essentials";

export type TSaveParamsWithCredential = {
    Person: OmitStrict<Prisma.PersonCreateManyInput, 'id' | 'deletedAt'>,
    Body?: OmitStrict<Prisma.BodyCreateManyInput, 'personId'>,
    Address?: OmitStrict<Prisma.AddressCreateManyInput, 'personId'>,
    BankAccounts?: OmitStrict<Prisma.BankAccountCreateManyInput, 'id' | 'personId'>[],
    Contacts?: OmitStrict<Prisma.ContactCreateManyInput, 'id' | 'personId'>[],
    Observations?: OmitStrict<Prisma.ObservationCreateManyInput, 'id' | 'createdAt' | 'personId'>[],
    Credential: OmitStrict<Prisma.CredentialCreateManyInput, 'personId'>
}
export type TSaveParamsWithCredentialReturn = { Person: Person, Body: Body, Address: Address, BankAccounts: BankAccount[], Contacts: Contact[], Observations: Observation[], Credential: Credential }

export type TSaveParamsWithoutCredential = StrictOmit<TSaveParamsWithCredential, 'Credential'>
export type TSaveParamsWithoutCredentialReturn = StrictOmit<TSaveParamsWithCredentialReturn, 'Credential'>

export type TSaveParams = MarkOptional<TSaveParamsWithCredential, 'Credential'>
export type TSaveReturn = MarkOptional<TSaveParamsWithCredentialReturn, 'Credential'>

interface IPersonPrismaRepository {
    get(params: Prisma.PersonWhereUniqueInput): Promise<TSaveParamsWithoutCredentialReturn>

    getAll(params: Prisma.PersonWhereUniqueInput): Promise<TSaveParamsWithoutCredentialReturn[]>

    save(params: TSaveParamsWithCredential): Promise<TSaveParamsWithCredentialReturn>
    save(params: TSaveParamsWithoutCredential): Promise<TSaveParamsWithoutCredentialReturn>
    save(params: TSaveParams): Promise<TSaveReturn>
}

export class PersonPrismaRepository implements IPersonPrismaRepository {
    readonly prismaClient: PrismaClient
    private readonly includeAll = Prisma.validator<Prisma.PersonInclude>()({
        BankAccounts: true,
        Contacts: true,
        Observations: true,
        Address: true,
        Body: true,
    })

    constructor({ prismaClient }: { prismaClient: PrismaClient }) {
        this.prismaClient = prismaClient
    }

    async get(where: Prisma.PersonWhereUniqueInput) {
        try {
            return await this.prismaClient.person.findFirst({
                where,
                include: this.includeAll
            })
                .then((Profile) => {
                    if (!Profile) throw Error()
                    if (!Profile.Address) throw Error()
                    if (!Profile.Body) throw Error()
                    const { Address, BankAccounts, Body, Contacts, Observations, ...Person } = Profile
                    return { Address, BankAccounts, Body, Contacts, Observations, Person }
                })
        } catch (error) {
            throw error
        }
    }
    async getAll() {
        try {
            return await this.prismaClient.person.findMany({ include: this.includeAll })
                .then(Profiles => Promise.all(Profiles.map(profile => {
                    if (!profile) throw Error()
                    if (!profile.Address) throw Error()
                    if (!profile.Body) throw Error()
                    const { Address, BankAccounts, Body, Contacts, Observations, ...Person } = profile
                    return { Address, BankAccounts, Body, Contacts, Observations, Person }
                })))
        } catch (error) {
            throw error
        }
    }

    async save(params: TSaveParamsWithCredential): Promise<TSaveParamsWithCredentialReturn>
    async save(params: TSaveParamsWithoutCredential): Promise<TSaveParamsWithoutCredentialReturn>
    async save({ Person, Body, Address, BankAccounts, Contacts, Observations, Credential }: TSaveParams): Promise<TSaveReturn> {
        try {
            if (!Credential) return await this.prismaClient.person.create({
                data: {
                    ...Person,
                    Address: { create: Address },
                    Body: { create: Body },
                    BankAccounts: { create: BankAccounts },
                    Contacts: { create: Contacts },
                    Observations: { create: Observations }
                },
                include: this.includeAll
            })
                .then(({ Address, BankAccounts, Body, Contacts, Observations, ...Person }) => {
                    if (!Address) throw Error()
                    if (!Body) throw Error()
                    if (!Credential) throw Error()
                    return {
                        Address, BankAccounts, Body, Contacts, Observations, Person,
                    }
                });
            return await this.prismaClient.person.create({
                data: {
                    ...Person,
                    Address: { create: Address },
                    Body: { create: Body },
                    BankAccounts: { create: BankAccounts },
                    Contacts: { create: Contacts },
                    Observations: { create: Observations },
                    Credential: { create: Credential }
                },
                include: { ...this.includeAll, Credential: true }
            })
                .then(({ Address, BankAccounts, Body, Contacts, Observations, Credential, ...Person }) => {
                    if (!Address) throw Error()
                    if (!Body) throw Error()
                    if (!Credential) throw Error()
                    return {
                        Address, BankAccounts, Body, Contacts, Observations, Credential, Person,
                    }
                });
        } catch (error) {
            throw error
        }
    }
    async update({ where, Person, Body, Address, BankAccounts, Contacts, Observations }: {
        where: Prisma.PersonWhereUniqueInput,
        Person: OmitStrict<Prisma.PersonUncheckedUpdateManyInput, 'id' | 'deletedAt'>,
        Body: OmitStrict<Prisma.BodyUncheckedUpdateManyInput, 'personId'>,
        Address: OmitStrict<Prisma.AddressUncheckedUpdateManyInput, 'personId'>,
        BankAccounts: (OmitStrict<Prisma.BankAccountUncheckedUpdateManyInput, 'personId' | 'id'> & { where: Pick<Prisma.BankAccountWhereInput, 'id'> } & { delete: boolean | undefined })[],
        Contacts: (OmitStrict<Prisma.ContactUncheckedUpdateManyInput, 'personId' | 'id'> & { where: Pick<Prisma.ContactWhereInput, 'id'> } & { delete: boolean | undefined })[],
        Observations: (OmitStrict<Prisma.ObservationUncheckedUpdateManyInput, 'createdAt' | 'personId' | 'id'> & { where: Pick<Prisma.ObservationWhereInput, 'id'> } & { delete: boolean | undefined })[]
    }) {
        try {
            return await Promise.all([
                this.prismaClient.person.update({ where, data: Person }),
                this.prismaClient.body.update({ where: { personId: where.id }, data: Body }),
                this.prismaClient.address.update({ where: { personId: where.id }, data: Address }),
                Promise.all(BankAccounts.map(async account => {
                    if (await this.prismaClient.bankAccount.findFirst({
                        where: {
                            personId: where.id,
                            id: account.where.id
                        }
                    })) return account.delete ?
                        this.prismaClient.bankAccount.delete({ where: { id: account.where.id as string } }) :
                        this.prismaClient.bankAccount.update({ where: { id: account.where.id as string }, data: account })
                })),
                Promise.all(Contacts.map(async contact => {
                    if (await this.prismaClient.contact.findFirst({
                        where: {
                            personId: where.id,
                            id: contact.where.id
                        }
                    })) return contact.delete ?
                        this.prismaClient.contact.delete({ where: { id: contact.where.id as string } }) :
                        this.prismaClient.contact.update({ where: { id: contact.where.id as string }, data: contact })
                })),
                Promise.all(Observations.map(async observation => {
                    if (await this.prismaClient.observation.findFirst({
                        where: {
                            personId: where.id,
                            id: observation.where.id
                        }
                    })) return observation.delete ?
                        this.prismaClient.observation.delete({ where: { id: observation.where.id as string } }) :
                        this.prismaClient.observation.update({ where: { id: observation.where.id as string }, data: observation })
                }))
            ])
                .then(([Person, Body, Address, BankAccounts, Contacts, Observations]) => ({
                    Person, Body, Address, BankAccounts, Contacts, Observations
                }))
        } catch (error) {
            throw error
        }
    }
    // TODO: IMPLEMENT SOFT DELETE
    // async delete(where: Prisma.PersonWhereUniqueInput) {
    //     return await this.prisma.person.delete({
    //         where,
    //         include: this.includeAll
    //     });
    // }
}


