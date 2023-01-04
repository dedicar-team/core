import { AdminService, PasswordService } from "_app/_app.module";
import { PrismaClient } from "@data";
import { IAdminController } from "./admin.interface";

export class AdminController implements IAdminController {
    private readonly adminService: AdminService
    private readonly passwordService: PasswordService
    private readonly prismaClient: PrismaClient

    zod: IAdminController['zod'];
    refine: IAdminController['refine'];

    constructor({
        adminService,
        prismaClient,
        passwordService,
        zod,
        refine
    }: {
        adminService: AdminService
        prismaClient: PrismaClient
        passwordService: PasswordService
        zod: IAdminController['zod']
        refine: IAdminController['refine']
    }) {
        this.adminService = adminService
        this.prismaClient = prismaClient
        this.passwordService = passwordService
        this.zod = zod
        this.refine = refine
    }

    async login({ email, password }: Parameters<IAdminController['login']>[0]) {
        try {
            const Credential = await this.prismaClient.credential.findUnique({ where: { email } })
            if (!Credential) throw Error('Fail')
            if (!await this.passwordService.compare({ _id: Credential.personId }, password)) throw Error('Fail')
            return await this.adminService.get({ id: Credential.personId })
        } catch (error) {
            throw error
        }
    }

    async register(data: Parameters<IAdminController['register']>[0]) {
        try {
            const { password, ...Credential } = data.Profile.Credential
            const admin = await this.adminService.save({ ...data, Profile: { ...data.Profile, Credential } })
            await this.passwordService.save({
                _id: admin.Profile.Person.id,
                password
            })
            return admin
        } catch (error) {
            throw error
        }
    }
}