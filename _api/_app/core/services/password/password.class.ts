import type { BcryptAdapter } from "adapters"
import { PasswordModel, passwordMongoose as passwordMongooseInstance } from "@data"
import type { IPasswordService } from "../../../_app.module"

export class PasswordService implements IPasswordService {
    bcryptAdapter: BcryptAdapter
    passwordMongoose: typeof passwordMongooseInstance

    constructor({
        bcryptAdapter,
        passwordMongoose
    }: {
        bcryptAdapter: BcryptAdapter
        passwordMongoose: typeof passwordMongooseInstance
    }) {
        this.bcryptAdapter = bcryptAdapter
        this.passwordMongoose = passwordMongoose
    }

    async compare(whereFind: Partial<PasswordModel>, passwordToCompare: string) {
        try {
            const encryptedData = await this.passwordMongoose.findOne(whereFind)
            if (!encryptedData) return false
            return this.bcryptAdapter.compare({ data: passwordToCompare, encrypted: encryptedData.password })
        } catch (error) {
            throw error
        }
    }

    async save(data: PasswordModel) {
        try {
            data = { ...data, password: await this.bcryptAdapter.hash(data.password) }
            return await this.passwordMongoose.create(data)
        } catch (error) {
            throw error
        }
    }

    async update(whereFind: Partial<PasswordModel>, data: Partial<PasswordModel>) {
        try {
            if (data.password) data = { ...data, password: await this.bcryptAdapter.hash(data.password) }
            return await this.passwordMongoose.updateOne(whereFind, { $set: { password: data.password } })
        } catch (error) {
            throw error
        }
    }
}