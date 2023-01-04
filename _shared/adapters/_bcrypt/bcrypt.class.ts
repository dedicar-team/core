import * as bcrypt from 'bcrypt'

export class BcryptAdapter {
    saltRange: { min: number, max: number }

    constructor({ saltRange }: { saltRange: { min: number, max: number } }) {
        this.saltRange = saltRange
    }

    async hash(toHash: string) {
        const { min, max } = this.saltRange
        return await (async () => (Math.round(Math.random() * (max - min) + min)))()
            .then(async salt => await bcrypt.hash(toHash, salt))
    }

    async compare({ data, encrypted }: { data: string, encrypted: string }) {
        return await bcrypt.compare(data, encrypted)
    }
}
