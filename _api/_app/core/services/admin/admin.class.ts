import type { PrismaClient, PrismaRepository } from '@data'
import type { IAdminService } from "_app/_app.module"

export class AdminService implements IAdminService {
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

    async save(data: Parameters<IAdminService['save']>['0']): ReturnType<IAdminService['save']> {
        try {
            const Profile = await this.prismaRepository.person.save(data.Profile)
            const Admin = await this.prismaClient.admin.create({
                data: {
                    ...data.Admin,
                    credentialId: Profile.Person.id
                }
            })
            return { Profile, Admin }
        } catch (error) {
            throw error
        }
    }

    async get(data: Parameters<IAdminService['get']>['0']): ReturnType<IAdminService['get']> {
        try {
            const [Profile, Admin] = await Promise.all([
                this.prismaRepository.person.get(data),
                this.prismaClient.admin.findUnique({
                    where: { credentialId: data.id }
                }).then((Admin) => {
                    if (!Admin) throw Error('Admin not finded')
                    return Admin
                })
            ])
            return { Profile, Admin }
        } catch (error) {
            throw error
        }
    }
}
