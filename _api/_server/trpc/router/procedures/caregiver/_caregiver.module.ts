import { createSession } from '../../../../express/session'
import { caregiverController, } from '_app/_app.module'
import { TTrpcContext } from '../../_router.module'
import trpc, { TRPCError } from '@trpc/server'

import dotenv from 'dotenv'
dotenv.config()

// TODO: ONLY AUTHENTICATED ADMIN WITH ROLE EXCLUDE CAN CREATE OTHERS ADMINS WITH MINOR ROLE, ROLE EXCLUDE IS CREATED BY SERVER ADMIN KEY
export const caregiverProcedures = trpc.router<TTrpcContext>()
    .mutation('Caregiver.login', {
        input: caregiverController.zod.login,
        async resolve({ input, ctx }) {
            if (ctx.req.session.personUuid) throw new TRPCError({ code: 'FORBIDDEN', message: 'already logged at this client.' })
            const data = await caregiverController.login(input)
            const [refinedData] = await Promise.all([
                caregiverController.refine.login(data),
                (async () => createSession(ctx, { personUuid: data.Profile.Person.id }))()
            ])
            return refinedData
        },
    })
    .mutation('Caregiver.register', {
        input: caregiverController.zod.register,
        resolve: async ({ ctx, input }) => {
            try {
                const caregiver = await caregiverController.register(input)
                const [refinedCaregiver] = await Promise.all([
                    caregiverController.refine.register(caregiver),
                    (async () => createSession(ctx, { personUuid: caregiver.Profile.Person.id, }))()
                ])
                return refinedCaregiver
            } catch (e) {
                console.log(e)
            }
        }
    })

// export const registerProcedures = trpcRouterContext
//     .mutation('Admin', {
//         input: z.object({
//             person: personModule.personRepositoryZodInput.save,
//             credential: credentialModule.credentialRepositoryZod.save,
//             admin: adminModule.adminRepositoryZod.save
//         }),
//         resolve: async ({ ctx, input }) => {
//             try {
//                 const person = await ctx.repository.person.save(input.person)
//                 if (person?.id) {
//                     await ctx.repository.credential.save({ ...input.credential, personId: person?.id })
//                     await ctx.repository.admin.save({ ...input.admin, credentialId: person?.id })
//                 }
//             } catch (e) {

//             }
//         }
//     })
//     .mutation('Caregiver', {
//         input: z.object({
//             person: personModule.personRepositoryZodInput.save,
//             credential: credentialModule.credentialRepositoryZod.save,
//             worker: workerModule.workerRepositoryZod.save,
//             caregiver: caregiverModule.patientRepositoryZod.save
//         }),
//         resolve: async ({ ctx, input }) => {
//             try {
//                 const person = await ctx.repository.person.save(input.person)
//                 if (person?.id) {
//                     await ctx.repository.credential.save({ ...input.credential, personId: person.id })
//                     await ctx.repository.worker.save({ ...input.worker, credentialId: person.id })
//                     await ctx.repository.caregiver.save({ ...input.caregiver, workerId: person.id })
//                 }
//             } catch (e) {
//             }
//         }
//     })
//     .mutation('Patient', {
//         input: z.object({
//             person: personModule.personRepositoryZodInput.save,
//             patient: patientModule.patientRepositoryZod.save
//         }),
//         resolve: async ({ ctx, input }) => {
//             try {
//                 const person = await ctx.repository.person.save(input.person)
//                 if (person?.id) {
//                     await ctx.repository.patient.save({ ...input.patient, personId: person.id })
//                 }
//             } catch (e) {
//             }
//         }
//     })
//     .mutation('Costumer', {
//         input: z.object({
//             person: personModule.personRepositoryZodInput.save,
//             credential: credentialModule.credentialRepositoryZod.save,
//             costumer: costumerModule.costumerRepositoryZod.save
//         }),
//         resolve: async ({ ctx, input }) => {
//             let person
//             try {
//                 person = await ctx.repository.person.save(input.person)
//                 if (person?.id) {
//                     await ctx.repository.credential.save({ ...input.credential, personId: person.id })
//                     await ctx.repository.costumer.save({ ...input.costumer, credentialId: person.id })
//                     return await ctx.container.prismaORM.client.person.findFirst({
//                         where: { id: person.id }, include: {
//                             Address: true,
//                             BankAccounts: true,
//                             Body: true,
//                             Contacts: true,
//                             Observations: true,
//                             Credential: {
//                                 include: { Costumer: true }
//                             },
//                         }
//                     })
//                 }
//             } catch (e) {
//             }
//         }
//     })