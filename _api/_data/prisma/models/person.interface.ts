import { Prisma } from "@data/prisma/generated/client"

export const PERSON_ARGS_VALIDATOR = Prisma.validator<Prisma.PersonArgs>()
export const PERSON_WITH_All_INCLUDES = Prisma.validator<Prisma.PersonArgs>()({
    include: {
        Address: true,
        Contacts: true,
        Credential: {
            include: {
                Admin: true,
                Worker: true,
                Costumer: true
            }
        },
        Observations: true,
        BankAccounts: true,
        Body: true,
        Patient: true
    }
})

export type IPersonWithAllRelationship = Prisma.PersonGetPayload<typeof PERSON_WITH_All_INCLUDES>

export const { include } = PERSON_WITH_All_INCLUDES