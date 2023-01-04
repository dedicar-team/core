import { CostumerService, PasswordService } from "_app/_app.module";
import { PrismaClient } from "@data";
import { ICostumerController } from "./costumer.interface";

export class CostumerController implements ICostumerController {
    private readonly costumerService: CostumerService
    private readonly passwordService: PasswordService
    private readonly prismaClient: PrismaClient

    zod: ICostumerController['zod'];
    refine: ICostumerController['refine'];

    constructor({
        costumerService,
        prismaClient,
        passwordService,
        zod,
        refine
    }: {
        costumerService: CostumerService
        prismaClient: PrismaClient
        passwordService: PasswordService
        zod: ICostumerController['zod']
        refine: ICostumerController['refine']
    }) {
        this.costumerService = costumerService
        this.prismaClient = prismaClient
        this.passwordService = passwordService
        this.zod = zod
        this.refine = refine
    }

    async login({ email, password }: Parameters<ICostumerController['login']>[0]) {
        try {
            const Credential = await this.prismaClient.credential.findUnique({ where: { email } })
            if (!Credential) throw Error()
            if (!await this.passwordService.compare({ _id: Credential.personId }, password)) throw Error()
            return await this.costumerService.get({ id: Credential.personId })
        } catch (error) {
            throw error
        }
    }

    async register(data: Parameters<ICostumerController['register']>[0]) {
        try {
            const caregiver = await this.costumerService.save(data)
            if (data.Profile.Credential && data.Profile.Credential.password) await this.passwordService.save({
                _id: caregiver.Profile.Person.id,
                password: data.Profile.Credential.password
            })
            return caregiver
        } catch (error) {
            throw error
        }
    }
}