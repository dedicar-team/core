import { CaregiverService, PasswordService } from "_app/_app.module";
import { PrismaClient } from "@data";
import { ICaregiverController } from "./caregiver.interface";

export class CaregiverController implements ICaregiverController {
    private readonly caregiverService: CaregiverService
    private readonly passwordService: PasswordService
    private readonly prismaClient: PrismaClient

    zod: ICaregiverController['zod'];
    refine: ICaregiverController['refine'];

    constructor({
        caregiverService,
        prismaClient,
        passwordService,
        zod,
        refine
    }: {
        caregiverService: CaregiverService
        prismaClient: PrismaClient
        passwordService: PasswordService
        zod: ICaregiverController['zod']
        refine: ICaregiverController['refine']
    }) {
        this.caregiverService = caregiverService
        this.prismaClient = prismaClient
        this.passwordService = passwordService
        this.zod = zod
        this.refine = refine
    }

    async login({ email, password }: Parameters<ICaregiverController['login']>[0]) {
        try {
            const Credential = await this.prismaClient.credential.findUnique({ where: { email } })
            if (!Credential) throw Error()
            if (!await this.passwordService.compare({ _id: Credential.personId }, password)) throw Error()
            return await this.caregiverService.get({ id: Credential.personId })
        } catch (error) {
            throw error
        }
    }

    async register(data: Parameters<ICaregiverController['register']>[0]) {
        try {
            const caregiver = await this.caregiverService.save(data)
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