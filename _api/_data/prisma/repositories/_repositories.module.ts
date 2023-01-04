export * from './person.repository'

import { prismaClient } from '../client/_client.module'
import { PersonPrismaRepository } from './person.repository'

export class PrismaRepository {
    person: PersonPrismaRepository

    constructor({
        person
    }: {
        person: PersonPrismaRepository
    }) {
        this.person = person
    }
}

export const person = new PersonPrismaRepository({ prismaClient })
export const prismaRepository = new PrismaRepository({ person })